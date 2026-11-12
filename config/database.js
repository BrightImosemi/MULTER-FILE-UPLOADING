const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
   process.env.DB_DEV_NAME,
   process.env.DB_DEV_USERNAME,
   process.env.DB_DEV_PASSWORD,
   {
   host: process.env.DB_DEV_HOST,
   dialect: "mysql",
   port: process.env.DB_DEV_PORT,
});

    module.exports= sequelize