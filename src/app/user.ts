export class User {
    constructor(
        public name: string,
        public avatar_url: string,
        public login: string,
        public bio: string,
        public location: string,
        public followers: number,
        public following: number,
        public created_at: Date,
        public updated_at:Date,
        public public_repos:number,

        )
     {} 
}