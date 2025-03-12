import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { CommonModule } from '@/common/common.module';

@Module({
  imports: [CommonModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
