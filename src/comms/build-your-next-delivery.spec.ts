import { Customer } from '../customers/customer.schema';
import {
  NoActiveCatsError,
  buildYourNextDelivery,
} from './build-your-next-delivery';

// Synthetic fixture, no PII or sensitive data.
const ada: Customer = {
  id: '00000000-0000-4000-8000-000000000001',
  firstName: 'Ada',
  lastName: 'Example',
  email: 'ada@example.com',
  cats: [
    {
      name: 'Pip',
      subscriptionActive: true,
      breed: 'Tabby',
      pouchSize: 'C',
    },
    {
      name: 'Noodle',
      subscriptionActive: true,
      breed: 'Tabby',
      pouchSize: 'F',
    },
    {
      name: 'Skip',
      subscriptionActive: false,
      breed: 'Tabby',
      pouchSize: 'A',
    },
  ],
};

describe('buildYourNextDelivery', () => {
  it('builds the payload from active cats only', () => {
    expect(buildYourNextDelivery(ada)).toEqual({
      title: 'Your next delivery for Pip and Noodle',
      message:
        "Hey Ada! In two days' time, we'll be charging you for your next order for Pip and Noodle's fresh food.",
      totalPrice: 134,
      freeGift: true,
    });
  });

  it('uses a single name in title and joint possessive for one active cat', () => {
    const oneCat: Customer = {
      ...ada,
      cats: [ada.cats[0]],
    };
    const payload = buildYourNextDelivery(oneCat);
    expect(payload.title).toBe('Your next delivery for Pip');
    expect(payload.message).toContain("Pip's fresh food");
  });

  it('uses a British list of three names with no Oxford comma', () => {
    const threeCats: Customer = {
      ...ada,
      cats: [
        {
          name: 'Pip',
          subscriptionActive: true,
          breed: 'Tabby',
          pouchSize: 'A',
        },
        {
          name: 'Noodle',
          subscriptionActive: true,
          breed: 'Tabby',
          pouchSize: 'A',
        },
        {
          name: 'Miso',
          subscriptionActive: true,
          breed: 'Tabby',
          pouchSize: 'A',
        },
      ],
    };
    expect(buildYourNextDelivery(threeCats).title).toBe(
      'Your next delivery for Pip, Noodle and Miso',
    );
  });

  it('throws NoActiveCatsError instead of emitting empty-name copy', () => {
    const paused: Customer = {
      ...ada,
      cats: ada.cats.map((cat) => ({
        ...cat,
        subscriptionActive: false,
      })),
    };
    expect(() => buildYourNextDelivery(paused)).toThrow(NoActiveCatsError);
  });
});
