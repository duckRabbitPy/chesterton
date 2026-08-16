import { z } from 'zod';

const pouchSizeSchema = z.enum(['A', 'B', 'C', 'D', 'E', 'F']);

const catSchema = z.object({
  name: z.string(),
  subscriptionActive: z.boolean(),
  breed: z.string(),
  pouchSize: pouchSizeSchema,
});

const customerSchema = z.object({
  id: z.uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  cats: z.array(catSchema),
});

export const customersFileSchema = z.array(customerSchema);

export type PouchSize = z.infer<typeof pouchSizeSchema>;
export type Cat = z.infer<typeof catSchema>;
export type Customer = z.infer<typeof customerSchema>;
