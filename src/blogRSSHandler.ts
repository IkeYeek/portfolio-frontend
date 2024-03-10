import {XMLParser} from "fast-xml-parser";

type ChannelItem = {
    title: string,
    category: Array<string>,
    description: string,
    link: string,
    "content:encoded": string,
    image?: {
        link: string,
        alt: string,
    }
}

type RSSChannel = {
    description: string,
    image: {
        link: string,
        title: string,
        url: string,
    }
    item: Array<ChannelItem>,
}

type RSS = {
    channel: RSSChannel,
    description: string,
    link: string,
}

const extract_rss_img = (rawContent: string): { link: string, alt: string } | undefined => {
    const res = /^<img src="(https:\/\/[a-zA-Z0-9-_&?.=\/;]*)" alt="([a-zA-Z :&#0-9;,\[\]\<\>!?\(\)]+)"/.exec(rawContent);
    if (res && res.length === 3) {
        return {
            link: res[1],
            alt: res[2],
        }
    }
    console.log("=== t'as encore foiré ta regex pq t'en prends pas une sur le net sérieux??? ===")
    console.log(res);
    console.log(rawContent)
    console.log("===")
    return undefined;
}

const handleBlogRSS = async (): Promise<RSSChannel> => {
    const feed = await fetch("https://blog.ike.icu/rss");
    const rawFeed = await feed.text();
    const parser = new XMLParser();
    const jObj = parser.parse(rawFeed).rss as RSS;
    for (const item of jObj.channel.item.slice(0, 8)) {
        item.image = extract_rss_img(item["content:encoded"])
    }
    return jObj.channel as RSSChannel;
}

export default handleBlogRSS;