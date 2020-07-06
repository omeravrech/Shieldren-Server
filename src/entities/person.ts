import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeORM';

export class Person extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    oid: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    constructor() {
        super();
    };
}