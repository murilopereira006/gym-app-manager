export default class Name {
    constructor(
        readonly fullName: string,
        readonly min: number = 3,
        readonly max: number = 120
    ) {
        if(min > max) throw new Error("");
        if(!fullName) throw new Error("");
        if(fullName.length < min) throw new Error("");
        if(fullName.length > max) throw new Error("");
        if(!fullName.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/)) throw new Error("");
    }
};
