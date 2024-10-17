import { SupplierRepository } from '@/domain/supplier/repositories/supplier-repository';
import { ListSuppliersByKwhLimitUseCase } from '@/domain/supplier/use-cases/list-suppliers-by-kwh-limit';
import { DatabaseModule } from '@/infra/database/database.module';
import { Module } from '@nestjs/common';
import { ListSuppliersController } from './controllers/list-suppliers.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: ListSuppliersByKwhLimitUseCase,
      useFactory: (supplierRepository: SupplierRepository) => {
        return new ListSuppliersByKwhLimitUseCase(supplierRepository);
      },
      inject: [SupplierRepository],
    },
  ],
  controllers: [ListSuppliersController],
})
export class SupplierModule {}
