import Twitter from "twitter";
import axios from "axios";

import linkedinLastPosts from "./__fake__/mockedLinkedin";

export type SocialRepositoryType = {
  getLinkedInFeeds: () => Promise<any[]>;
  getTweets: (user: string) => Promise<unknown>;
  getFacebookFeeds: () => Promise<any[]>;
};

const SocialRepository: (twitterClient: Twitter) => SocialRepositoryType = (
  twitterClient: Twitter
) => {
  const getTweets = (user: string) => {
    return new Promise((resolve) => {
      twitterClient.get(
        "search/tweets",
        { q: `from:${user}`, count: 5 },
        (error: any, tweets: Twitter.ResponseData) => {
          const result: any[] = tweets.statuses;
          resolve(result);
        }
      );
    });
  };

  const getFacebookFeeds = async () => {
    const accessToken = process.env.FB_TOKEN;
    const response = await axios.get(
      `https://graph.facebook.com/v8.0/340251695999924?fields=posts%7Bfrom%2Cmessage%2Cpermalink_url%2Ccreated_time%7D&access_token=${accessToken}`
    );

    return response.data && response.data.posts && response.data.posts.data
      ? response.data.posts.data
      : [];
  };

  const getLinkedInFeeds = async () => {
    return linkedinLastPosts;
  };

  return { getTweets, getFacebookFeeds, getLinkedInFeeds };
};

export default SocialRepository;
