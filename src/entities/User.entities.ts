import { Entity, Column, PrimaryGeneratedColumn, OneToMany, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, BeforeInsert, BeforeUpdate, JoinTable, ManyToMany } from "typeorm";
import Schedule from "./Schedule.entities";
import { getRounds, hashSync } from "bcryptjs";
import { AppError } from "../errors";
import RealEstate from "./RealEstate.entities";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ default: false })
    admin: boolean;

    @Column({ length: 120 })
    password: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date;

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt?: Date | undefined | null;

    @OneToMany(() => Schedule, (s) => s.user)
    schedule: Array<Schedule>;

    @ManyToMany(() => RealEstate)
    @JoinTable()
    categories: Array<RealEstate>;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hashRound: number = getRounds(this.password);

        if (!hashRound) {
            this.password = hashSync(this.password, 10);
        };
    };
};