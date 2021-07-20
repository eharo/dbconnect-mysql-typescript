import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";
import { Raiting } from "./Enums";

@Entity()
export class Film {

    @PrimaryGeneratedColumn({type: 'smallint', unsigned: true })
    film_id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    release_year: number;

    @Column()
    language_id: number;

    @Column()
    original_language_id: number;

    @Column()
    rental_duration: number;

    @Column()
    length: number;

    @Column()
    replacement_cost: number;

    @Column()
    rating: Raiting;

    @Column()
    special_features: string

    @Column()
    last_update: Date;

}


