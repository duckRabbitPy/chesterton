import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommsModule } from './comms/comms.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule, CommsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
