import { CreateUserOptions } from '../types/User';

export class User {
    constructor(
        public id: string,
        public email: string,
        public firstname: string,
        public lastname: string
    ) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    static create(options: CreateUserOptions) {
        const { id, email, firstname, lastname } = options;
        return new User(id, email, firstname, lastname);
    }
}
