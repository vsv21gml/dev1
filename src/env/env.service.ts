import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvService {
  private getValue(key: string, defaultValue?: string): string {
    const value = process.env[key];

    if (value === undefined || value === '') {
      if (defaultValue !== undefined) {
        return defaultValue;
      }

      throw new Error(`Environment variable ${key} is not set`);
    }

    return value;
  }

  private getNumber(key: string, defaultValue?: number): number {
    const value = this.getValue(key, defaultValue?.toString());
    const numberValue = Number(value);

    if (Number.isNaN(numberValue)) {
      throw new Error(`Environment variable ${key} is not a number`);
    }

    return numberValue;
  }

  getPort(): number {
    return this.getNumber('PORT', 3000);
  }

  getDatabasePath(): string {
    return this.getValue('DATABASE_PATH', 'database.sqlite');
  }

  getNodeEnv(): string {
    return this.getValue('NODE_ENV', 'development');
  }

  isProduction(): boolean {
    return this.getNodeEnv() === 'production';
  }
}
