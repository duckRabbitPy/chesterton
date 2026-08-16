import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import {
  NoActiveCatsError,
  buildYourNextDelivery,
} from './build-your-next-delivery';
import {
  YourNextDeliveryResponse,
  yourNextDeliveryResponseSchema,
} from './your-next-delivery.schema';

@Injectable()
export class CommsService {
  constructor(private readonly customers: CustomersService) {}

  getYourNextDelivery(userId: string): YourNextDeliveryResponse {
    const customer = this.customers.getById(userId);
    try {
      return yourNextDeliveryResponseSchema.parse(
        buildYourNextDelivery(customer),
      );
    } catch (error) {
      if (error instanceof NoActiveCatsError) {
        throw new UnprocessableEntityException(
          `No active subscriptions for customer ${userId}`,
        );
      }
      throw error;
    }
  }
}
