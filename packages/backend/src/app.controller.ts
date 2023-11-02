import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AppService, Info } from './app.service';
import { AppAuthService } from './app.auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appAuthService: AppAuthService
  ) {}

  @Get('/')
  info(): Info {
    return this.appService.getInfo();
  }

  @Post('/login')
  login(@Body() body: LoginRequestBody): LoginRequestResponse {
    console.log(body);
    const { username, password } = body;
    if (!this.appAuthService.auth(username, password)) {
      throw new HttpException({
        success: false,
        token: null,
        error: 'Invalid username or password',
      }, HttpStatus.UNAUTHORIZED);
    }

    return {
      success: true,
      token: Buffer.from(`${username}:${password}`).toString('base64'),
      error: null
    };
  }
}

type LoginRequestBody = {
  username: string;
  password: string;
};

type LoginRequestResponse = {
  success: boolean;
  token: string | null;
  error: string | null;
};
