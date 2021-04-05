import fetch from "node-fetch";

export async function getAllPostsData() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const posts = await res.json();
  console.log(posts)
  return posts;
}