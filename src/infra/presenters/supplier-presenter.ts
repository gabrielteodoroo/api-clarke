import Supplier from '@/domain/supplier/entities/supplier';

export class SupplierPresenter {
  static toHTTP(entity: Supplier) {
    return {
      id: entity.id.toString(),
      name: entity.name,
      logoUrl: entity.logoUrl,
      originState: entity.originState,
      costPerKwh: entity.costPerKwh,
      minKwhLimit: entity.minKwhLimit,
      totalClients: entity.totalClients,
      averageRating: entity.averageRating,
    };
  }
}
