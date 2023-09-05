import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import Category from "./Category.entities";
import Address from "./Address.entities";
import Schedule from "./Schedule.entities";
import User from "./User.entities";

@Entity("realEstates")
export default class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "boolean", default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string | null;

    @Column()
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date | string;

    @OneToOne(() => Address, (a) => a.realEstate)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (c) => c.realEstate)
    category: Category;

    @OneToMany(() => Schedule, (s) => s.realEstate)
    schedule: Array<Schedule>

    @ManyToMany(() => User)
    categories: Array<User>;
};