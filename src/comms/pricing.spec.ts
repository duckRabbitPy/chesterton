import { Cat } from '../customers/customer.schema';
import {
  FREE_GIFT_THRESHOLD_GBP,
  POUCH_PRICES_GBP,
  activeCats,
  qualifiesForFreeGift,
  totalPriceGbp,
} from './pricing';

// cat creation helper
const cat = (
  overrides: Partial<Cat> & Pick<Cat, 'pouchSize' | 'subscriptionActive'>,
): Cat => ({
  name: overrides.name ?? 'Cat',
  breed: 'Thai',
  ...overrides,
});

describe('activeCats', () => {
  it('omits cats with subscriptionActive false', () => {
    const cats = [
      cat({ name: 'Dorian', pouchSize: 'C', subscriptionActive: true }),
      cat({ name: 'Eldridge', pouchSize: 'A', subscriptionActive: false }),
    ];
    expect(activeCats(cats).map((c) => c.name)).toEqual(['Dorian']);
  });
});

describe('totalPriceGbp', () => {
  it('sums each cat by pouch size from the price table', () => {
    const cats = [
      cat({ pouchSize: 'A', subscriptionActive: true }),
      cat({ pouchSize: 'B', subscriptionActive: true }),
    ];
    expect(totalPriceGbp(cats)).toBe(POUCH_PRICES_GBP.A + POUCH_PRICES_GBP.B);
  });

  // README example: Dorian (C) + Ocie (F) = 134
  it('sums pouch sizes C and F to 134', () => {
    const cats = [
      cat({ pouchSize: 'C', subscriptionActive: true }),
      cat({ pouchSize: 'F', subscriptionActive: true }),
    ];
    expect(totalPriceGbp(cats)).toBe(134);
  });

  it('does not include inactive cats when summing the filtered list', () => {
    const cats = [
      cat({ pouchSize: 'C', subscriptionActive: true }),
      cat({ pouchSize: 'A', subscriptionActive: false }),
    ];
    expect(totalPriceGbp(activeCats(cats))).toBe(POUCH_PRICES_GBP.C);
  });
});

describe('qualifiesForFreeGift', () => {
  // Gift only if total is greater than 120, not equal.
  it('returns false when totalPrice is exactly 120', () => {
    expect(qualifiesForFreeGift(FREE_GIFT_THRESHOLD_GBP)).toBe(false);
  });

  it('returns true when totalPrice is greater than 120', () => {
    expect(qualifiesForFreeGift(FREE_GIFT_THRESHOLD_GBP + 0.01)).toBe(true);
  });
});
