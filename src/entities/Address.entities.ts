import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import RealEstate from "./RealEstate.entities";

@Entity("adresses")
export default class Address {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    street: string;

    @Column({ length: 8 })
    zipCode: string;

    @Column()
    number: number;

    @Column({ length: 20 })
    city: string;

    @Column({ length: 2 })
    state: string;

    @OneToOne(() => RealEstate, (r) => r.address)
    realEstate: RealEstate;
};