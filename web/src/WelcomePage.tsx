import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchYourNextDelivery, formatGbp, HttpError } from './api.ts';
import {
  Actions,
  Card,
  CardBody,
  GiftLabel,
  Hero,
  Message,
  Page,
  Price,
  PrimaryButton,
  SecondaryButton,
  Spinner,
  Status,
  Title,
} from './WelcomePage.styles.ts';

export function WelcomePage() {
  const { userId } = useParams<{ userId: string }>();
  const query = useQuery({
    queryKey: ['your-next-delivery', userId],
    queryFn: () => fetchYourNextDelivery(userId!),
    enabled: Boolean(userId),
  });

  if (query.isPending) {
    return (
      <Page aria-busy="true">
        <Status>
          <Spinner aria-hidden="true" />
          <p>Fetching your next delivery…</p>
        </Status>
      </Page>
    );
  }

  if (query.isError) {
    const status =
      query.error instanceof HttpError ? query.error.status : undefined;
    const copy =
      status === 404
        ? 'We could not find that cat parent.'
        : status === 422
          ? 'No upcoming delivery.'
          : 'Something went wrong loading this delivery.';
    return (
      <Page>
        <Status>{copy}</Status>
      </Page>
    );
  }

  const { title, message, totalPrice, freeGift } = query.data;

  return (
    <Page>
      <Card>
        {freeGift ? <GiftLabel>Free gift</GiftLabel> : null}
        <Hero>
          <img src="/cat.png" alt="A cat looking toward the camera" />
        </Hero>
        <CardBody>
          <Title>{title}</Title>
          <Message>{message}</Message>
          <Price>Total price: {formatGbp(totalPrice)}</Price>
          <Actions>
            <PrimaryButton type="button">See details</PrimaryButton>
            <SecondaryButton type="button">Edit delivery</SecondaryButton>
          </Actions>
        </CardBody>
      </Card>
    </Page>
  );
}
