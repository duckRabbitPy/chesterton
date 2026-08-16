import { Module } from '@nestjs/common';
import { CustomersModule } from '../customers/customers.module';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';

@Module({
  imports: [CustomersModule],
  controllers: [CommsController],
  providers: [CommsService],
})
export class CommsModule {}
