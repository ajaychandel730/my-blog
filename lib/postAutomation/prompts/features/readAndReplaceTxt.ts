import fs from "fs/promises";
import Path from "path";
import { GoogleNews } from "../../googleNews";
import { readFile } from "fs";

const googleNewsIntoOrderList = (data:GoogleNews[]):string=>{
    const newsList = data.map((news, idx)=>{
          return `${idx+1}. title: ${news.title} \nlink:${news.link} \npubDate:${news.pubDate}`;
    }).join("\n");
    return newsList
};

export async function getTopicsScorePrompt(data:GoogleNews[]){
    const filePath = Path.join(process.cwd(), "lib", "postAutomation", "prompts", "genrateTopicsScorePrompt.txt")
    const file  = await fs.readFile(filePath, "utf-8");
    const text = file.replace("[INSERT YOUR TOPICS HERE]",  googleNewsIntoOrderList(data));
    return text;
}

export async function getBlogPrompt(topic:GoogleNews){
   const filePath = Path.join(process.cwd(), "lib", "postAutomation", "prompts", "genrateBlogPrompt.txt");
    const file  = await fs.readFile(filePath, "utf-8");
    const topicPromptString = `1. title: ${topic.title} \nresourceLink: ${topic.link} \npublish Date: ${topic.pubDate}.` 
    const text = file.replace("{{TOPIC}}", topicPromptString);
    return text;
}