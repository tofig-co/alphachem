import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { AboutModule } from "./about/about.module";
import { ContactsModule } from "./contacts/contacts.module";
import { ProductsModule } from "./products/products.module";
import { MulterModule } from "@nestjs/platform-express";
import { SliderModule } from './slider/slider.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AboutModule,
    ContactsModule,
    ProductsModule,
    SliderModule,
  ],
})
export class AppModule {}
