import "dotenv/config";
import "./database";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import UsersResource from "./resources/UsersResource";

import locale from "./locales";

// O adapter que o adminjs vai registrar (comando da lib)
AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
  databases: [],
  rootPath: "/admin",
  resources: [UsersResource],
  ...locale,
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);

app.listen(5000, () => {
  console.log("AdminJS is under http://localhost:5000/admin");
});
