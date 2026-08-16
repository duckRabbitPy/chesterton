import { Customer } from '../customers/customer.schema';
import { formatCatNames } from './format-cat-names';
import { activeCats, qualifiesForFreeGift, totalPriceGbp } from './pricing';
import { YourNextDeliveryResponse } from './your-next-delivery.schema';

export class NoActiveCatsError extends Error {
  constructor() {
    super('Customer has no active cat subscriptions');
    this.name = 'NoActiveCatsError';
  }
}

export function buildYourNextDelivery(
  customer: Customer,
): YourNextDeliveryResponse {
  const cats = activeCats(customer.cats);
  if (cats.length === 0) {
    throw new NoActiveCatsError();
  }
  const names = formatCatNames(cats.map((cat) => cat.name));
  const totalPrice = totalPriceGbp(cats);

  return {
    title: `Your next delivery for ${names}`,
    message: `Hey ${customer.firstName}! In two days' time, we'll be charging you for your next order for ${names}'s fresh food.`,
    totalPrice,
    freeGift: qualifiesForFreeGift(totalPrice),
  };
}
