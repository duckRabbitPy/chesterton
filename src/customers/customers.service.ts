import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './customer.schema';
import { CustomersRepository } from './customers.repository';

@Injectable()
export class CustomersService {
  constructor(private readonly customers: CustomersRepository) {}

  getById(id: string): Customer {
    const customer = this.customers.findById(id);
    if (!customer) {
      throw new NotFoundException(`No customer with id ${id}`);
    }
    return customer;
  }
}
