import { plainToInstance } from 'class-transformer';
import { IsNumber, IsUrl, Max, Min, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsUrl({ protocols: ['postgresql'], require_tld: false })
  DATABASE_URL: string;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
