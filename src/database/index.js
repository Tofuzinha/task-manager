import { Sequelize } from "sequelize";
import config from "../config/database";

import User from "../models/user";

const models = [User];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init(); //metodo de iniciação
    this.associate(); //metodo de associação
  }

  init() {
    //para iniciar cada model(do sequelize) que tenho registrado
    models.forEach((model) => model.init(this.connection));
  }

  associate() {
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
