import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserStatus {
  Enabled = 'Enabled',
  Disabled = 'Disabled',
  Deleted = 'Deleted',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column('json')
  roles: string[];

  @Column({
    type: 'text',
    enum: UserStatus,
    default: UserStatus.Enabled,
  })
  status: UserStatus;
}
