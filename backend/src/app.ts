require("dotenv").config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.env.NODE_NO_WARNINGS = "1";
const isDev = process.env.NODE_ENV === "development";
import * as http from "http";
import * as https from "https";
import * as fs from "fs";
import * as path from "path";
import * as express from "express";
import * as shrinkRay from "shrink-ray-current";
import * as cors from "cors";
import { initApp } from "./Api";
import { setlog } from "./Util";
import * as cookieParser from "cookie-parser";

const port = Number(process.env.HTTP_PORT || 80);
const portHttps = Number(process.env.HTTPS_PORT || 443);

process.on("uncaughtException", (err: Error) => setlog("exception", err));
process.on("unhandledRejection", (err: Error) => setlog("rejection", err));

Date.now = () => Math.round(new Date().getTime() / 1000);

/* var crypto = require('crypto'); */

(async () => {
  try {
    await initApp();
    /* await Redis.connect(); */
    const app = express();
    const server = http.createServer(app);
    let httpsServer = null as any;
    const file_key = __dirname + "/../certs/cert.key";
    const file_crt = __dirname + "/../certs/cert.crt";
    const file_ca = __dirname + "/../certs/cert.ca-bundle";
    if (
      fs.existsSync(file_key) &&
      fs.existsSync(file_crt) &&
      fs.existsSync(file_ca)
    ) {
      const key = fs.readFileSync(file_key, "utf8");
      const cert = fs.readFileSync(file_crt, "utf8");
      const caBundle = fs.readFileSync(file_ca, "utf8");
      const ca = caBundle
        .split("-----END CERTIFICATE-----\n")
        .map((cert) => cert + "-----END CERTIFICATE-----\n");
      ca.pop();
      const options = { cert, key, ca };
      httpsServer = https.createServer(options, app);
    } else {
      console.log("Do not find ssl files, disabled ssl features.");
    }
    app.use(shrinkRay());
    app.use(
      cors({
        origin: function (origin, callback) {
          return callback(null, true);
        },
      })
    );

    app.use(express.urlencoded());
    app.use(express.json());
    app.use(cookieParser());
    const FRONTENDPATH = path.normalize(__dirname + "/../../frontend/build");
    app.use(express.static(FRONTENDPATH));
    /* app.post("/api/logs",(req, res) => {
			res.json({logs, prices});
		}) */
    app.get("*", (req, res) => {
      res.sendFile(FRONTENDPATH + "/index.html");
    });
    let time = +new Date();
    await new Promise((resolve) =>
      server.listen({ port, host: "0.0.0.0" }, () => resolve(true))
    );
    setlog(`Started HTTP service on port ${port}. ${+new Date() - time}ms`);
    if (httpsServer) {
      await new Promise((resolve) =>
        httpsServer.listen({ port: portHttps, host: "0.0.0.0" }, () =>
          resolve(true)
        )
      );
      setlog(
        `Started HTTPS service on port ${portHttps}. ${+new Date() - time}ms`
      );
    }
  } catch (error) {
    setlog("init", error);
    process.exit(1);
  }
})();
