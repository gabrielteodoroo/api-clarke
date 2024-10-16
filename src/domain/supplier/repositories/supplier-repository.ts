import Supplier from '../entities/supplier';

export abstract class SupplierRepository {
  abstract create(supplier: Supplier): Promise<Supplier>;
  abstract findManyByKwhLimit(kwh: number): Promise<Supplier[]>;
}
