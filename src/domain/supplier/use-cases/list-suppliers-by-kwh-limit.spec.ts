import { InMemorySupplierRepository } from '../../../../test/repositories/in-memory-supplier-repository';
import { ListSuppliersByKwhLimitUseCase } from './list-suppliers-by-kwh-limit';
import Supplier from '../entities/supplier';

let supplierRepository: InMemorySupplierRepository;
let useCase: ListSuppliersByKwhLimitUseCase;

const generateSuppliers = (
  counts: { minKwhLimit: number; name: string; logoUrl: string }[],
) => {
  return counts.map((data) => {
    return Supplier.create({
      averageRating: parseFloat((Math.random() * 5).toFixed(1)),
      costPerKwh: parseFloat((Math.random() * 1).toFixed(2)),
      logoUrl: data.logoUrl,
      minKwhLimit: data.minKwhLimit,
      name: data.name,
      originState: 'SP',
      totalClients: Math.floor(Math.random() * 5000),
    });
  });
};

describe('List suppliers by kwh limit', () => {
  beforeEach(() => {
    supplierRepository = new InMemorySupplierRepository();
    useCase = new ListSuppliersByKwhLimitUseCase(supplierRepository);

    //prettier-ignore
    const supplierData = [
      { minKwhLimit: 100, name: 'CEMIG', logoUrl: 'https://example.com/cemig.png' },
      { minKwhLimit: 200, name: 'ENEL', logoUrl: 'https://example.com/enel.png' },
      { minKwhLimit: 300, name: 'CPFL', logoUrl: 'https://example.com/cpfl.png' },
      { minKwhLimit: 400, name: 'ELETROBRAS', logoUrl: 'https://example.com/eletrobras.png' },
      { minKwhLimit: 500, name: 'Energisa', logoUrl: 'https://example.com/energisa.png' },
      { minKwhLimit: 600, name: 'Light', logoUrl: 'https://example.com/light.png' },
      { minKwhLimit: 700, name: 'Celg', logoUrl: 'https://example.com/celg.png' },
      { minKwhLimit: 800, name: 'Coelba', logoUrl: 'https://example.com/coelba.png' },
      { minKwhLimit: 900, name: 'Ceará', logoUrl: 'https://example.com/ceara.png' },
      { minKwhLimit: 1000, name: 'Aneel', logoUrl: 'https://example.com/aneel.png' },
    ];

    const suppliers = generateSuppliers(supplierData);
    suppliers.forEach((supplier) => supplierRepository.create(supplier));
  });

  test('Should list suppliers based on kWh limit', async () => {
    const response = await useCase.execute({ kwh: 500 });

    expect(response.isRight()).toBeTruthy();
    expect(response.value).toHaveLength(5);
  });

  test('Should return empty list if no supplier is found', async () => {
    const response = await useCase.execute({ kwh: -10 });

    expect(response.isRight()).toBeTruthy();
    expect(response.value).toHaveLength(0);
  });
});
