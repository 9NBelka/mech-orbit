import { NextResponse } from 'next/server';

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

export function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase();
  const url = new URL(request.url);
  const token = process.env.PRERENDER_TOKEN;

  // Если зашел бот и это не запрос к статичному файлу (с расширением .js, .css, .png и т.д.)
  if (
    token &&
    userAgent &&
    BOT_AGENTS.some((bot) => userAgent.includes(bot)) &&
    !url.pathname.includes('.')
  ) {
    const renderUrl = `https://service.prerender.io{url.href}`;

    return fetch(renderUrl, {
      headers: {
        'X-Prerender-Token': token,
      },
    });
  }

  return NextResponse.next();
}
