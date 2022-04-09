import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { Token } from './models/token.model';

@ApiTags('Auth')
@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: User })
  @ApiResponse({ type: Token,  status: 201 })
  async login(@Body()  user: User): Promise<Token> {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

