import { Entity, PrimaryGeneratedColumn, Column } from "../../../../../src";

@Entity({
    name: "VIEWS"
})
export class View {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({transformer: []})
    title: string;
}