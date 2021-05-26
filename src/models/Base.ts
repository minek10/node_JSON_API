import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseModel {
    @CreateDateColumn()
    public creationDate!: Date;

    @UpdateDateColumn()
    public updateDate !: Date;

    @DeleteDateColumn()
    public deleteOnDate ?: Date;

    @PrimaryGeneratedColumn("increment")
    public id!: number;
}