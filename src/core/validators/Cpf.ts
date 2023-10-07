const checkSumOfCpfNumbers = (cpf: number): boolean => {
    if(!cpf) return false
    return true;
};

const findCpfOrigin = (cpf: number): string => {
    return "Sao Paulo";
};

export default class Cpf {
    constructor(
        readonly cpf: number,
    ) {
        if(!cpf) throw new Error("");
        if(checkSumOfCpfNumbers(cpf)) throw new Error("CPF not valid");
    }
    
    get origin(): string {
        return findCpfOrigin(this.cpf);
    };
};
