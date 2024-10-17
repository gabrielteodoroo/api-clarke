import { Either, left, right } from '@/core/errors/either/either';
import Supplier from '../entities/supplier';
import { SupplierRepository } from '../repositories/supplier-repository';

type Request = {
  kwh: number;
};

type Response = Either<null, Supplier[]>;

export class ListSuppliersByKwhLimitUseCase {
  constructor(private repository: SupplierRepository) {}

  async execute({ kwh }: Request): Promise<Response> {
    const suppliers = await this.repository.findManyByKwhLimit(kwh);

    return right(suppliers);
  }
}
