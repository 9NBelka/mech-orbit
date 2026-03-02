export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const url = new URL(request.url);
  const token = process.env.PRERENDER_TOKEN;

  // Список ботов
  const bots = [
    'googlebot',
    'yandex',
    'bingbot',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'prerender',
    'discordbot',
  ];

  // Условие: есть токен И это бот И это не файл (нет точки в пути или это не картинка/скрипт)
  const isBot = bots.some((bot) => userAgent.includes(bot));
  const isFile = url.pathname.includes('.');

  if (token && isBot && !isFile) {
    const renderUrl = `https://service.prerender.io{url.href}`;

    try {
      const res = await fetch(renderUrl, {
        headers: { 'X-Prerender-Token': token },
      });
      return new Response(res.body, res);
    } catch (e) {
      // Если сервис Prerender упал, просто отдаем обычный сайт, чтобы не было ошибки 500
      return Response.next();
    }
  }

  // ДЛЯ ОБЫЧНЫХ ПОЛЬЗОВАТЕЛЕЙ:
  // В Vercel Edge Middleware нужно просто ничего не возвращать или возвращать undefined,
  // чтобы запрос прошел дальше к статическим файлам.
  return;
}

export const config = {
  // Выполнять middleware только для страниц, игнорируя системные папки
  matcher: '/((?!_next|api|favicon.ico).*)',
};
