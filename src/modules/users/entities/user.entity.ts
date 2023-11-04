import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CreatedUpdatedModel } from '../../../entities/comon/create-update.model';
import { carEntity } from '../../cars/entities/car.entity';

@Entity('users')
// users назва бази
export class UserEntity extends CreatedUpdatedModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  userName: string;

  @Column({ type: 'text', nullable: false, default: 'your_default_password' })
  password: string;

  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  city?: string;

  @Column({ type: 'int', nullable: false })
  age: number;

  @Column({ type: 'boolean', nullable: false })
  status: boolean;

  @OneToMany(() => carEntity, (entity) => entity.user)
  cars: carEntity;
}
