import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SupplierRepository } from '@/domain/supplier/repositories/supplier-repository';
import { SupplierPrismaRepository } from './repositories/supplier-prisma-repository';

@Module({
  providers: [
    PrismaService,
    { provide: SupplierRepository, useClass: SupplierPrismaRepository },
  ],
  exports: [PrismaService, SupplierRepository],
})
export class PrismaModule {}
