export default class Password {
    constructor(
        readonly password: string,
        readonly min: number = 8,
        readonly max: number = 120
    ) {
        if(min > max) throw new Error("");
        if(!password) throw new Error("");
        if(password.length < min) throw new Error("");
        if(password.length > max) throw new Error("");
        if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) throw new Error("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
    }
};
