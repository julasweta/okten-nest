import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthLoginRequestDto } from '../auth/dto/request/auth-login-request.dto';
import { CreateUserDto } from './dto/request/user-create.request.dto';
import { UserListQueryRequestDto } from './dto/request/user-list-query.request.dto';
import { UpdateUserDto } from './dto/request/user-update.request.dto';
import { ResponseCreateUser } from './dto/response/user-create-response.dto';
import { UserUpdateResponse } from './dto/response/user-update-response.dto';
import { UserResponseMapper } from './user.response.mapper';
import { UsersService } from './users.service';

@ApiTags('Users') // Додайте декоратор тут
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  async login(@Body() body: AuthLoginRequestDto): Promise<any> {
    return await this.usersService.login(body);
  }

  @ApiOperation({ summary: 'Get all users' })
  @UseGuards(AuthGuard())
  @Get()
  async getdAll(@Query() query: UserListQueryRequestDto): Promise<any> {
    const result = await this.usersService.getdAll(query);
    return result;
  }

  @ApiOperation({ summary: 'Create new user' })
  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<ResponseCreateUser> {
    const result = await this.usersService.createUser(body);
    return UserResponseMapper.toCreatesRes(result);
  }

  @ApiOperation({ summary: 'Get user byId' })
  @UseGuards(AuthGuard())
  @Get('user/:id')
  async getUserById(@Param('id') id: string, @Headers() headers: any) {
    console.log(headers);
    const result = await this.usersService.getUserById(id);
    return UserResponseMapper.toCreatesRes(result);
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ): Promise<UserUpdateResponse> {
    const result = await this.usersService.updateUser(id, body);
    return result;
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return await this.usersService.deleteUser(id);
  }
}
