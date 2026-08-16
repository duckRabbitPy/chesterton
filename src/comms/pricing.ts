import { Cat, PouchSize } from '../customers/customer.schema';

export const POUCH_PRICES_GBP: Record<PouchSize, number> = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66,
  E: 69,
  F: 71.25,
};

export const FREE_GIFT_THRESHOLD_GBP = 120;

export function activeCats(cats: Cat[]): Cat[] {
  return cats.filter((cat) => cat.subscriptionActive);
}

export function totalPriceGbp(cats: Cat[]): number {
  return cats.reduce((sum, cat) => sum + POUCH_PRICES_GBP[cat.pouchSize], 0);
}

export function qualifiesForFreeGift(totalPrice: number): boolean {
  return totalPrice > FREE_GIFT_THRESHOLD_GBP;
}
