import { SupplierRepository } from '@/domain/supplier/repositories/supplier-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import Supplier from '@/domain/supplier/entities/supplier';
import { SupplierPrismaMapper } from '../mappers/supplier-prisma-mapper';

@Injectable()
export class SupplierPrismaRepository implements SupplierRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(supplier: Supplier) {
    const data = SupplierPrismaMapper.toPersistence(supplier);

    const createdSupplier = await this.prismaService.supplier.create({
      data,
    });

    return SupplierPrismaMapper.toDomain(createdSupplier);
  }

  async findManyByKwhLimit(kwh: number): Promise<Supplier[]> {
    const suppliers = await this.prismaService.supplier.findMany({
      where: {
        minKwhLimit: {
          lte: kwh,
        },
      },
    });

    return suppliers.map(SupplierPrismaMapper.toDomain);
  }
}
