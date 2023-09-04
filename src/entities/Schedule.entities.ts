import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import User from "./User.entities";
import RealEstate from "./RealEstate.entities";

@Entity("schedules")
export default class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "date" })
    date: Date | string;

    @Column({ type: "time" })
    hour: string;

    @ManyToOne(() => RealEstate, (r) => r.schedule)
    realEstate: RealEstate;

    @ManyToOne(() => User, (u) => u.schedule)
    user: User;
};