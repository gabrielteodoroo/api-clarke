import { Type } from 'class-transformer';
import { IsNotEmpty, Min } from 'class-validator';

export class ListSuppliersDto {
  @IsNotEmpty({ message: 'kwh is required' })
  @Min(1, { message: 'kwh must be greater than 0' })
  @Type(() => Number)
  kwh: number;
}
