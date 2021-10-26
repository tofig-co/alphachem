import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("/check")
  @UseGuards(AuthGuard())
  check() {
    return "OK";
  }

  @Post("/signup")
  signUp(
    @Body(ValidationPipe) authCredentials: AuthCredentialsDto
  ): Promise<void> {
    return this.authService.signUp(authCredentials);
  }

  @Post("/signin")
  signIn(
    @Body(ValidationPipe) authCredentials: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentials);
  }
}
