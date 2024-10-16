import { Body, Controller, Post } from '@nestjs/common';
import { AuthService as AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import { SkipAuth } from './auth.skip-auth.decorator';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(protected authService: AuthService) {}

  @Post('/login')
  @SkipAuth()
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }
}
