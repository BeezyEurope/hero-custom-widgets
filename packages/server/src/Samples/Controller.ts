import express, { Express } from "express";

import negative from "./data/stock_static_negative";
import positive from "./data/stock_static_positive";
import neutral from "./data/stock_static_neutral";

type SampleControllerParams = {
  app: Express;
};

const SampleController = ({ app }: SampleControllerParams): void => {
  app.get(
    "/api/sample/negative",
    (req: express.Request, res: express.Response) => {
      res.set("Cache-Control", "max-age=3000");

      res.set("Content-Disposition", 'inline; filename="negative.json"');

      res.json(negative);
    }
  );

  app.get(
    "/api/sample/positive",
    (req: express.Request, res: express.Response) => {
      res.set("Cache-Control", "max-age=3000");

      res.set("Content-Disposition", 'inline; filename="positive.json"');

      res.json(positive);
    }
  );

  app.get(
    "/api/sample/neutral",
    (req: express.Request, res: express.Response) => {
      res.set("Cache-Control", "max-age=3000");

      res.set("Content-Disposition", 'inline; filename="neutral.json"');

      res.json(neutral);
    }
  );
};

export default SampleController;
