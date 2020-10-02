import { SocialRepositoryType } from "./Repository";

export type Posts = {
  text: string;
  createdAt: string;
  user: string;
  link: string;
};

export type SocialService = {
  getTweets: (user: string) => Promise<Posts[]>;
  getFacebookPosts: () => Promise<Posts[]>;
  getLinkedinPosts: () => Promise<Posts[]>;
};

const SocialService = (repository: SocialRepositoryType): SocialService => {
  const getTweets = async (user: string): Promise<Posts[]> => {
    const tweets: any = await repository.getTweets(user);

    return tweets.map((tweet: any): {
      createdAt: any;
      text: any;
      user: any;
      link: any;
    } => {
      const link = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
      return {
        text: tweet.text,
        createdAt: tweet.created_at,
        user: `@${tweet.user.screen_name}`,
        link,
      };
    });
  };

  const getFacebookPosts = async () => {
    const posts: any[] = await repository.getFacebookFeeds();

    return (
      posts &&
      posts.map((post: any) => {
        const text = post && post.message && post.message.substr(0, 280);
        return {
          text,
          createdAt: post.created_time,
          user: post.from.name,
          link: post.permalink_url,
        };
      })
    );
  };

  const getLinkedinPosts = async () => {
    const posts: Posts[] = await repository.getLinkedInFeeds();

    return posts;
  };

  return { getTweets, getFacebookPosts, getLinkedinPosts };
};

export default SocialService;
