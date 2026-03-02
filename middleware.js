import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  const bots = [
    'googlebot',
    'bingbot',
    'yandex',
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
  ];

  const isBot = bots.some((bot) => userAgent.toLowerCase().includes(bot));

  if (!isBot) {
    return NextResponse.next();
  }

  const prerenderUrl = `https://service.prerender.io/${request.url}`;

  const response = await fetch(prerenderUrl, {
    headers: {
      'X-Prerender-Token': process.env.PRERENDER_TOKEN,
    },
  });

  const body = await response.text();

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
