import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";

import { HomeController } from "./controller/home";

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * need session & passport config
 * here
 *
 *
 */

app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

app.get("/", HomeController);

export default app;
