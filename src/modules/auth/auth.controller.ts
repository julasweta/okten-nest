import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

@ApiTags('AUTH') // Додайте декоратор тут
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
