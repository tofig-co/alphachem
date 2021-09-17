import { Module } from "@nestjs/common";
import { AboutService } from "./about.service";
import { AboutController } from "./about.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutRepository } from "./about.repository";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([AboutRepository]), AuthModule],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
