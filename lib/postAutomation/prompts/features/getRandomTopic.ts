import { GoogleNews } from "../../googleNews";

export async function getRandomTopic(googleNews:GoogleNews[]){
  const idx =  Math.floor(Math.random() * googleNews.length);
  return googleNews[idx];
}