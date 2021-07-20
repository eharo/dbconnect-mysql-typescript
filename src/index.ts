import "reflect-metadata";
import {createConnection} from "typeorm";
import { Film } from "./entity/Fiml";

class DBHelper {

    private connection;

    constructor() {
        this.connection = createConnection();
    }


    public getAllFilms() : Film[] {
        return this.connection.then(async connection => {
            const films = await connection.manager.getRepository(Film).find();
            console.log(films);
        }).catch(error => {
            console.log(error);
        });
    }
}

new DBHelper().getAllFilms()

