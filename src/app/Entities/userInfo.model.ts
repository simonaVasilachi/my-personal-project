export interface UserInfo {
    id: number;
    userName: string;
    password: string;
}

export class UserInfo {
    id: number;
    userName: string;
    password: string;

    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
        this.id = Math.floor(Math.random() * 100);
    }
}