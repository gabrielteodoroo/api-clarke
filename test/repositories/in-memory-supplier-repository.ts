import Supplier from '@/domain/supplier/entities/supplier';
import { SupplierRepository } from '@/domain/supplier/repositories/supplier-repository';

export class InMemorySupplierRepository extends SupplierRepository {
  items: Supplier[] = [];

  async create(supplier: Supplier) {
    this.items.push(supplier);
    return supplier;
  }

  async findManyByKwhLimit(kwh: number) {
    const suppliers = this.items.filter(
      (supplier) => supplier.minKwhLimit <= kwh,
    );
    return suppliers;
  }
}
