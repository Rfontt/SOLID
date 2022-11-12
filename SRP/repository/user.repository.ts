import Connection from "../database/connection";

export default class UserEntity {
    #connection: Connection
    #user: UserEntity

    constructor(
        connection: Connection,
        user: UserEntity
    ) {
        this.#connection = connection;
        this.#user = user;
    }

    async getAllUsers() {
        return [];
    }
}