import { z } from 'zod';

export const yourNextDeliveryResponseSchema = z.object({
  title: z.string(),
  message: z.string(),
  totalPrice: z.number(),
  freeGift: z.boolean(),
});

export type YourNextDeliveryResponse = z.infer<
  typeof yourNextDeliveryResponseSchema
>;
