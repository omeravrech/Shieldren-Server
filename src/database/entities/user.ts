import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Child from "./child";
import Person from "./person";

@Entity()
export default class User extends Person {

    @Column({ unique: true })
    email!: string;
    
    @Column({ length: 20 })
    salt!: string;
    
    @Column({ length: 128 })
    password!: string;

    @OneToMany(type => Child, child => child.oid)
    children!: Child[];

}