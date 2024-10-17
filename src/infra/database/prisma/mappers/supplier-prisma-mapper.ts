import Identity from '@/core/entities/identity';
import Supplier from '@/domain/supplier/entities/supplier';
import { Supplier as SupplierDatabase } from '@prisma/client';

export class SupplierPrismaMapper {
  static toDomain(entity: SupplierDatabase): Supplier {
    return Supplier.create(
      {
        name: entity.name,
        logoUrl: entity.logoUrl,
        originState: entity.originState,
        costPerKwh: entity.costPerKwh,
        minKwhLimit: entity.minKwhLimit,
        totalClients: entity.totalClients,
        averageRating: entity.averageRating,
      },
      new Identity(entity.id),
    );
  }

  static toPersistence(domain: Supplier): SupplierDatabase {
    return {
      id: domain.id.toString(),
      name: domain.name,
      logoUrl: domain.logoUrl,
      originState: domain.originState,
      costPerKwh: domain.costPerKwh,
      minKwhLimit: domain.minKwhLimit,
      totalClients: domain.totalClients,
      averageRating: domain.averageRating,
    };
  }
}
