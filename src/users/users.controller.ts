import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseCreateUser } from './dto/response/user-create-response.dto';
import { CreateUserDto } from './dto/request/user-create.request.dto';
import { UpdateUserDto } from './dto/request/user-update.request.dto';
import { UserResponseMapper } from './user.response.mapper';
import { UsersService } from './users.service';

@ApiTags('Users') // Додайте декоратор тут
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create new user' })
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(@Body() body: CreateUserDto): Promise<ResponseCreateUser> {
    const result = await this.usersService.createUser(body);
    return UserResponseMapper.toCreatesRes(result);
  }

  @ApiOperation({ summary: 'Get user byId' })
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const result = await this.usersService.getUserById(id);
    return UserResponseMapper.toCreatesRes(result);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  async findAll(): Promise<any> {
    const result = await this.usersService.findAll();
    return result;
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
