import { Module } from '@nestjs/common';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [SupplierModule],
  exports: [SupplierModule],
})
export class HttpModule {}
