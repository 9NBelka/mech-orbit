// Список ботов
const BOT_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  '://developers.google.com',
  'slackbot',
  'vkShare',
  'W3C_Validator',
  'redditbot',
  'Applebot',
  'WhatsApp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'SkypeUriPreview',
  'nuzzel',
  'Discordbot',
  'Google Page Speed',
  'Qwantify',
];

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase();
  const url = new URL(request.url);
  const token = process.env.PRERENDER_TOKEN;

  // Проверяем: это бот и это не запрос за файлом (картинкой, скриптом)
  if (
    token &&
    userAgent &&
    BOT_AGENTS.some((bot) => userAgent.includes(bot)) &&
    !url.pathname.includes('.')
  ) {
    const renderUrl = `https://service.prerender.io{url.href}`;

    // Запрашиваем готовую страницу у Prerender.io
    const res = await fetch(renderUrl, {
      headers: {
        'X-Prerender-Token': token,
      },
    });

    // Возвращаем результат роботу
    return new Response(res.body, res);
  }

  // Если это обычный юзер — просто идем дальше
  return fetch(request);
}

// Указываем Vercel, на какие пути реагировать (обычно на все)
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
