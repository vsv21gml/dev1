import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Project {
  @ApiProperty({ description: 'Project ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Project name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Project description' })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({ description: 'Project status' })
  @Column({ default: 'active' })
  status: string;

  @ApiProperty({ description: 'Created date' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Updated date' })
  @UpdateDateColumn()
  updatedAt: Date;
}