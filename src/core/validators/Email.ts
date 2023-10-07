const emailIsValid = (email: string): boolean => {
    const tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!email) {
        return false
    }
    if (email.length > 256) {
        return false
    }
    if (!tester.test(email)) {
        return false
    }
    let [account, address] = email.split('@')
    if (account.length > 64) {
        return false
    }
    let domainParts = address.split('.')
    if (domainParts.some(function (part) {
        return part.length > 63
    })) {
        return false
    }
    return true
};

const emailIsString = (email: string): boolean => {
    if (email == null || email.length === 0) {
        return false
    }
    return typeof email === "string";
};

export default class Email {
    private readonly email: string;

    private constructor(email: string) {
        this.email = email;
        Object.freeze(this);
    };

    static create(email: string): Email | Error {
        if (!emailIsValid(email) || !emailIsString(email)) {
            throw new Error('Invalid email address');
        }
        return new Email(email);
    };

    get value(): string {
        return this.email;
    };
};

