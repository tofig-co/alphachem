import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "tofik!547",
  database: "alphachem",
  entities: [__dirname + "/../**/*.entity.js"],
  synchronize: true,
};
