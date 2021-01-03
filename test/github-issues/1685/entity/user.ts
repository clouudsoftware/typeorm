import {PrimaryColumn, Entity, OneToMany} from "../../../../src";
import {UserMonth} from "./user-month";

@Entity({
    name: "USERS"
})
export class User {

    @PrimaryColumn()
    public username: string;

    @OneToMany(type => UserMonth, userMonth => userMonth.user)
    public userMonths: UserMonth[];
}
