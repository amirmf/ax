import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserDto } from './dto/user.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async validateUser(username: string, password: string): Promise<UserDto> {
    // TODO: get login result(UserDto) from logto
    const userDto = new UserDto();
    userDto.id = 1;
    userDto.username = username;
    userDto.password = password;
    return userDto;
  }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    const payload = { username: user.username, sub: user.id, tenantId:user.tenantId, refresh:'-' };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
