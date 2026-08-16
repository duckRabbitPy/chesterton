import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { CustomersModule } from './customers.module';
import { CustomersService } from './customers.service';

const CANONICAL_CUSTOMER_ID = 'ff535484-6880-4653-b06e-89983ecf4ed5'; // README example id

describe('CustomersService', () => {
  let service: CustomersService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CustomersModule],
    }).compile();
    service = module.get(CustomersService);
  });

  it('returns the canonical customer by id', () => {
    expect(service.getById(CANONICAL_CUSTOMER_ID).firstName).toBe('Kayleigh');
  });

  it('throws NotFoundException for an unknown string', () => {
    expect(() => service.getById('not-a-user')).toThrow(NotFoundException);
  });
});
