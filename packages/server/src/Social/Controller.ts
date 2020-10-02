import express, { Express } from "express";

import { Posts, SocialService } from "./Service";

interface SocialControllerParams {
  app: Express;
}

const SocialController = ({
  socialService,
}: {
  socialService: SocialService;
}) => ({ app }: SocialControllerParams): void => {
  app.get(
    "/api/tweets/:user",
    async (req: express.Request, res: express.Response) => {
      const { user = "" } = req.params;

      try {
        const tweets: Posts[] = await socialService.getTweets(user);

        res.set("Cache-Control", "max-age=3000");

        res.json(tweets);
      } catch (e) {
        res.status(500).send(new Error("Sever Error"));
      }
    }
  );

  app.get(
    "/api/facebook",
    async (req: express.Request, res: express.Response) => {
      try {
        const facebookPosts: Posts[] = await socialService.getFacebookPosts();

        res.set("Cache-Control", "max-age=3000");

        res.json(facebookPosts.slice(0, 5));
      } catch (e) {
        res.status(500).send(e.response.data);
      }
    }
  );

  app.get("/api/linkedin", async (req, res) => {
    const linkedinPosts: Posts[] = await socialService.getLinkedinPosts();

    res.json(linkedinPosts);
  });
};

export default SocialController;
