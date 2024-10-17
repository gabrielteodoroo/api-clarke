import { ListSuppliersByKwhLimitUseCase } from '@/domain/supplier/use-cases/list-suppliers-by-kwh-limit';
import { Controller, Get, Query } from '@nestjs/common';
import { ListSuppliersDto } from '../dtos/list-suppliers.dto';
import { SupplierPresenter } from '@/infra/presenters/supplier-presenter';

@Controller('/suppliers')
export class ListSuppliersController {
  constructor(
    private readonly listSuppliersUseCase: ListSuppliersByKwhLimitUseCase,
  ) {}

  @Get()
  async handle(@Query() query: ListSuppliersDto) {
    const kwh = Number(query.kwh);
    const response = await this.listSuppliersUseCase.execute({ kwh });

    return response.value.map(SupplierPresenter.toHTTP);
  }
}
