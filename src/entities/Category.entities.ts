import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import RealEstate from "./RealEstate.entities";

@Entity("categories")
export default class Category {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, unique: true })
    name: string;

    @OneToMany(() => RealEstate, (r) => r.category)
    realEstate: Array<RealEstate>
};