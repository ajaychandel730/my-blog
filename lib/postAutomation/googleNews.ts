import Parser from "rss-parser";

export interface GoogleNews {
  title: string | undefined;
  link: string | undefined;
  pubDate: string | undefined;
}

export async function googleNewsJson(): Promise<Error | GoogleNews[]> {
  const parser = new Parser();
  const newsResponse = await parser.parseURL(
    "https://news.google.com/rss/search?q=India&hl=en-IN&gl=IN&ceid=IN:en",
  );

  const googleNews: GoogleNews[] = newsResponse.items.map((news) => ({
    title: news.title,
    link: news.link,
    pubDate: news.pubDate,
  }));

  return googleNews.slice(0, 20);
}
