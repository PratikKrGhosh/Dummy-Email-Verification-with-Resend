import dotenv from "dotenv";
dotenv.config();

const config = {
  dev: {
    db: process.env.DB_URI,
    port: process.env.PORT || 3000,
    log: "bug",
  },
};

const stage = process.env.STAGE || "dev";

export default config[stage];
