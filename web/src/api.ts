import { yourNextDeliveryResponseSchema } from './your-next-delivery.schema.ts';

export class HttpError extends Error {
  readonly status: number;

  constructor(status: number) {
    super(`Request failed with ${status}`);
    this.name = 'HttpError';
    this.status = status;
  }
}

const apiBase = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export async function fetchYourNextDelivery(userId: string) {
  const response = await fetch(
    `${apiBase}/comms/your-next-delivery/${encodeURIComponent(userId)}`,
  );
  if (!response.ok) {
    throw new HttpError(response.status);
  }
  return yourNextDeliveryResponseSchema.parse(await response.json());
}

export function formatGbp(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount);
}
