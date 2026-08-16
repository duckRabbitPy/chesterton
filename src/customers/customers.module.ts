import { Module } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { CustomersService } from './customers.service';

@Module({
  providers: [CustomersRepository, CustomersService],
  exports: [CustomersRepository, CustomersService],
})
export class CustomersModule {}
