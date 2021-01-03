import {PrimaryColumn} from "../../../../../src/decorator/columns/PrimaryColumn";
import {Entity} from "../../../../../src/decorator/entity/Entity";
import {Column} from "../../../../../src/decorator/columns/Column";
import {Counters} from "./Counters";

@Entity({
    name: "POSTS"
})
export class Post {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column(() => Counters)
    counters: Counters;

}
