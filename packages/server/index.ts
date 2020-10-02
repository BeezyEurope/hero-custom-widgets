import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import compression from "compression";

import Twitter from "twitter";
import SocialConfig, {
  SocialConfig as SocialConfigType,
} from "./src/Social/Config";
import AppController from "./src/AppController";
import SampleController from "./src/Samples/Controller";

dotenv.config();

const app: Express = express();

app.use(cors());

app.use(compression());

const PORT = process.env.PORT || 4000;

const twitterClient: Twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || "",
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || "",
  bearer_token: process.env.TWITTER_BEARER_TOKEN || "",
});

const { socialController }: SocialConfigType = SocialConfig(twitterClient);

socialController({ app });

SampleController({ app });

AppController(app);

app.listen(PORT, () => {
  console.info(`APP  PORT:${PORT}`);
});
