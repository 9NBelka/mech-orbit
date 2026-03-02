export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

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
    return res.status(404).end();
  }

  // const prerenderUrl = `https://service.prerender.io/${req.headers.host}${req.url}`;
  const prerenderUrl = `https://service.prerender.io/https://mech-orbit.vercel.app${req.url}`;

  // const prerenderUrl = `https://mech-orbit.vercel.app${req.url}`;

  try {
    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': process.env.PRERENDER_TOKEN,
      },
    });

    const html = await response.text();

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send('Prerender error');
  }
}
