import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Customer, customersFileSchema } from './customer.schema';

@Injectable()
export class CustomersRepository {
  readonly customers: readonly Customer[];

  constructor() {
    const filePath = join(process.cwd(), 'data.json');
    this.customers = customersFileSchema.parse(
      JSON.parse(readFileSync(filePath, 'utf8')),
    );
  }
}
