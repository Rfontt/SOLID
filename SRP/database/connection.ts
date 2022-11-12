export default class Connection {
    #connection: boolean;

    constructor() {
        this.#connection = true;
    }

    async getConnection() {
        return this.#connection;
    }
}