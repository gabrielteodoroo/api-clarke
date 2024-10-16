import Entity from '@/core/entities/entity';
import Identity from '@/core/entities/identity';

type SupplierType = {
  name: string;
  logoUrl: string;
  originState: string;
  costPerKwh: number;
  minKwhLimit: number;
  totalClients: number;
  averageRating: number;
};

export default class Supplier extends Entity<SupplierType> {
  static create(data: SupplierType, id?: Identity) {
    return new Supplier({ ...data }, id);
  }

  get name() {
    return this.attributes.name;
  }

  get logoUrl() {
    return this.attributes.logoUrl;
  }

  get originState() {
    return this.attributes.originState;
  }

  get costPerKwh() {
    return this.attributes.costPerKwh;
  }

  get minKwhLimit() {
    return this.attributes.minKwhLimit;
  }

  get totalClients() {
    return this.attributes.totalClients;
  }

  get averageRating() {
    return this.attributes.averageRating;
  }
}
