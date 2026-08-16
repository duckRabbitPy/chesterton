import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Customer, customersFileSchema } from './customer.schema';

@Injectable()
export class CustomersRepository {
  private readonly byId: ReadonlyMap<string, Customer>;

  constructor() {
    const filePath = join(process.cwd(), 'data.json');
    const parsed = customersFileSchema.parse(
      JSON.parse(readFileSync(filePath, 'utf8')),
    );
    this.byId = new Map(parsed.map((customer) => [customer.id, customer]));
  }

  findById(id: string): Customer | undefined {
    return this.byId.get(id);
  }
}
