import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { Project } from './project/entities/project.entity';
import { EnvModule } from './env/env.module';
import { EnvService } from './env/env.service';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRootAsync({
      inject: [EnvService],
      useFactory: (envService: EnvService) => ({
        type: 'sqlite',
        database: envService.getDatabasePath(),
        entities: [Project],
        synchronize: !envService.isProduction(), // 개발환경에서만 사용
      }),
    }),
    ProjectModule,
  ],
})
export class AppModule {}