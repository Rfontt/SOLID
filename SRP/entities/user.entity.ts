export default class UserEntity {
    #name: string
    #email: string
    #password: string

    getName(): string {
        return this.#name;
    }


    getEmail(): string {
        return this.#email;
    }


    getPassword(): string {
        return this.#password;
    }
}