import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alphachem-user",
  password: "tofik!547",
  database: "alphachem-db",
  entities: [__dirname + "/../**/*.entity.js"],
  synchronize: true,
};
