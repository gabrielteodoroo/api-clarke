import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.supplier.deleteMany();

  await prisma.supplier.createMany({
    data: [
      {
        name: 'CEMIG',
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZFbjmW7jdmKpqSo6XZD6B55pnhnsM9gz9w&s',
        originState: 'MG',
        costPerKwh: 0.5,
        minKwhLimit: 100,
        totalClients: 1000,
        averageRating: 4.5,
      },
      {
        name: 'ENEL',
        logoUrl: 'https://fmcom.com.br/wp-content/uploads/2022/12/Enel.png',
        originState: 'SP',
        costPerKwh: 0.6,
        minKwhLimit: 200,
        totalClients: 2000,
        averageRating: 4.2,
      },
      {
        name: 'EDP',
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-qbxfFCMtVGsLBo1Z8z26LGswqA616opJw&s',
        originState: 'RJ',
        costPerKwh: 0.65,
        minKwhLimit: 300,
        totalClients: 1500,
        averageRating: 4.0,
      },
      {
        name: 'Neoenergia',
        logoUrl:
          'https://www.abgd.com.br/portal/wp-content/uploads/jet-engine-forms/7/2022/10/290830764_2603876579745334_5874136344886667303_n.jpg',
        originState: 'BA',
        costPerKwh: 0.55,
        minKwhLimit: 400,
        totalClients: 1200,
        averageRating: 3.0,
      },
      {
        name: 'Light',
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKDz7wR7yPQ2hoTrUZBE7SpkWPrg3Te50hg&s',
        originState: 'RJ',
        costPerKwh: 0.48,
        minKwhLimit: 500,
        totalClients: 2500,
        averageRating: 4.6,
      },
      {
        name: 'Itaipu',
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurIr6Zm0inlJbX8X9H-0NgwBFPoU-s0BTiQ&s',
        originState: 'PR',
        costPerKwh: 0.7,
        minKwhLimit: 600,
        totalClients: 3000,
        averageRating: 4.8,
      },
      {
        name: 'Energisa',
        logoUrl:
          'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/fda6e8409250.5834d7cd6b9e0.png',
        originState: 'MT',
        costPerKwh: 0.58,
        minKwhLimit: 700,
        totalClients: 1700,
        averageRating: 5.0,
      },
      {
        name: 'Copel',
        logoUrl:
          'https://muraldoparana.com.br/wp-content/uploads/2020/12/Copel.svg_-1024x375-e1647875285368.png',
        originState: 'PR',
        costPerKwh: 0.63,
        minKwhLimit: 800,
        totalClients: 2200,
        averageRating: 4.4,
      },
      {
        name: 'Engie Brasil',
        logoUrl:
          'https://media.licdn.com/dms/image/v2/D4D0BAQH44m3nUCN14A/company-logo_200_200/company-logo_200_200/0/1667308224521/engie_brasil_logo?e=2147483647&v=beta&t=MtiD4crQSV9dXPaqsiwnUqqPvar04-PUXH5ApeArZXY',
        originState: 'SC',
        costPerKwh: 0.52,
        minKwhLimit: 900,
        totalClients: 2700,
        averageRating: 5.0,
      },
      {
        name: 'Ceará Energia',
        logoUrl:
          'https://media.licdn.com/dms/image/v2/D4D0BAQEZct0eUbOgKQ/company-logo_200_200/company-logo_200_200/0/1703681937000/cear_energia_logo?e=2147483647&v=beta&t=nNaF919r_O-Aav5gV2Xcof7vutKAnFobzMYkpDJP6s0',
        originState: 'CE',
        costPerKwh: 0.61,
        minKwhLimit: 1000,
        totalClients: 1900,
        averageRating: 4.5,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
