import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';

const CANONICAL_CUSTOMER_ID = 'ff535484-6880-4653-b06e-89983ecf4ed5'; // README example id

describe('CommsController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /comms/your-next-delivery/:userId returns 200 with Kayleigh’s README body (Dorian and Ocie, 134, freeGift true)', async () => {
    const response = await request(app.getHttpServer()).get(
      `/comms/your-next-delivery/${CANONICAL_CUSTOMER_ID}`,
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      title: 'Your next delivery for Dorian and Ocie',
      message:
        "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
      totalPrice: 134,
      freeGift: true,
    });
  });

  it('GET /comms/your-next-delivery/:userId returns 404 when the user id is not in data.json', async () => {
    const response = await request(app.getHttpServer()).get(
      '/comms/your-next-delivery/not-a-user',
    );

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: 'No customer with id not-a-user',
      error: 'Not Found',
      statusCode: 404,
    });
  });
});
