import { z } from 'zod';

export const yourNextDeliveryResponseSchema = z.object({
  title: z.string(),
  message: z.string(),
  totalPrice: z.number(),
  freeGift: z.boolean(),
});

// TODO: publish types as shared package between web and API
export type YourNextDeliveryResponse = z.infer<
  typeof yourNextDeliveryResponseSchema
>;
