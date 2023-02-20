import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('store')
class store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Column({ default: 'ACTIVE' })
  status: string;

  @Column()
  quantity: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({
    nullable: true,
    default: '0000-00-00T00:00:00.0000',
    name: 'deleted_at',
  })
  deletedAt: string;
}

export default store;
