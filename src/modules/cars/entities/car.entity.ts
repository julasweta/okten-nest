import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CreatedUpdatedModel } from '../../../entities/comon/create-update.model';
import { UserEntity } from '../../users/entities/user.entity';
import { ProducerEnum } from '../enum/producer.enum';

export class Car {}
@Entity('cars')
// cars назва бази
export class carEntity extends CreatedUpdatedModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  model: string;

  @Column({ type: 'int', nullable: false })
  year: number;

  @Column({ type: 'int', nullable: false })
  price: number;

  @Column({ type: 'enum', enum: ProducerEnum }) // Вказуйте enum або enumName
  producer: ProducerEnum;

  @ManyToOne(() => UserEntity, (entity) => entity.cars)
  user: UserEntity;
}
