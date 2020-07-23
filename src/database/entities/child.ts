import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './user';
import Person from './person';

@Entity()
export default class Child extends Person {
    @ManyToOne(type => User, parent => parent.oid)
    parent!: User;

    @Column()
    yearOfBirth!: number;

    @Column({default: () => false})
    isConnected!: boolean;

}