import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '@/app.module';
import { DatabaseModule } from '@/infra/database/database.module';
import * as request from 'supertest';

describe('ListSuppliersController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    prisma = moduleFixture.get(PrismaService);

    await app.init();

    //prettier-ignore
    await prisma.supplier.createMany({
      data: [
        { name: 'CEMIG', logoUrl: 'https://example.com/cemig.png', originState: 'MG', costPerKwh: 0.50, minKwhLimit: 100, totalClients: 1000, averageRating: 4.5 },
        { name: 'ENEL', logoUrl: 'https://example.com/enel.png', originState: 'SP', costPerKwh: 0.60, minKwhLimit: 200, totalClients: 2000, averageRating: 4.2 },
        { name: 'EDP', logoUrl: 'https://example.com/edp.png', originState: 'RJ', costPerKwh: 0.65, minKwhLimit: 300, totalClients: 1500, averageRating: 4.0 },
        { name: 'Neoenergia', logoUrl: 'https://example.com/neoenergia.png', originState: 'BA', costPerKwh: 0.55, minKwhLimit: 400, totalClients: 1200, averageRating: 4.3 },
        { name: 'Light', logoUrl: 'https://example.com/light.png', originState: 'RJ', costPerKwh: 0.48, minKwhLimit: 500, totalClients: 2500, averageRating: 4.6 },
        { name: 'Itaipu', logoUrl: 'https://example.com/itaipu.png', originState: 'PR', costPerKwh: 0.70, minKwhLimit: 600, totalClients: 3000, averageRating: 4.8 },
        { name: 'Energisa', logoUrl: 'https://example.com/energisa.png', originState: 'MT', costPerKwh: 0.58, minKwhLimit: 700, totalClients: 1700, averageRating: 4.1 },
        { name: 'Copel', logoUrl: 'https://example.com/copel.png', originState: 'PR', costPerKwh: 0.63, minKwhLimit: 800, totalClients: 2200, averageRating: 4.4 },
        { name: 'Engie Brasil', logoUrl: 'https://example.com/engie.png', originState: 'SC', costPerKwh: 0.52, minKwhLimit: 900, totalClients: 2700, averageRating: 4.7 },
        { name: 'Ceará Energia', logoUrl: 'https://example.com/cearaenergia.png', originState: 'CE', costPerKwh: 0.61, minKwhLimit: 1000, totalClients: 1900, averageRating: 4.5 },
      ],
    });
  });

  test('/suppliers (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/suppliers?kwh=500')
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(5);
  });
});
