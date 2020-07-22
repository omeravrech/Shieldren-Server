import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export default class Person extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    oid!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
    createdAt!: string;

}