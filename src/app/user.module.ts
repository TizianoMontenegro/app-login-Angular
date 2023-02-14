export class User {
    name: string;
    surname: string;
    email: string;
    avatar: string;
    constructor(
        name: string, 
        surname: string, 
        email: string, 
        avatar: string) {
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.avatar = avatar;
    }
}