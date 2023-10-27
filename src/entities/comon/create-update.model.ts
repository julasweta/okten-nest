import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
//частина моделі бази данних, яка повтроється в різних моделяї
export abstract class CreatedUpdatedModel {
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  updatedAt: Date;
}
