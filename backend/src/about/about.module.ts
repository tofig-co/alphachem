import { Module } from "@nestjs/common";
import { AboutService } from "./about.service";
import { AboutController } from "./about.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutRepository } from "./about.repository";

@Module({
  imports: [TypeOrmModule.forFeature([AboutRepository])],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
