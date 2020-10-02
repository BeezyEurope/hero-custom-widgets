import express, { Express } from "express";
import path from "path";

const AppController = (app: Express): void => {
  app.get("*.js|css|html|svg|ttf", (req, res, next) => {
    const acceptEncondig =
      (req && req.header && req.header("Accept-Encoding")) || "";

    if (acceptEncondig.includes("br")) {
      req.url += ".br";
      res.set("Content-Encoding", "br");
      res.set("Content-Type", "application/javascript; charset=UTF-8");
    }

    next();
  });

  app.use(express.static(path.join(__dirname, "../../client/dist")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
  });
};

export default AppController;
