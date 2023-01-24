import { json } from '@sveltejs/kit';

export const POST =  (async ({ request }) => {
  const feed = await request.json()
  const res = await fetch(feed.feed);
  const weather = await res.text();
  return json(weather);
});