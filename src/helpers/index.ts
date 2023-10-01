export const stringToBinary = (str: string): number => {
    let binaryResult = ""
    for (let i = 0; i < str.length; i++) {
        binaryResult += str[i].charCodeAt(0).toString(2) + " ";
    }

    return parseInt(binaryResult.trim(), 2);
};

const formatNumberWithSpaces = (inputNumber: number): string => {
    const inputString = inputNumber.toString();

    if (inputString.length % 8 !== 0) throw new Error(`Invalid binary ID`);

    const chunks = [];
    for (let i = 0; i < inputString.length; i += 4) {
        const chunk = inputString.slice(i, i + 4);
        chunks.push(chunk);
    }

    return chunks.join(' ');
}

export const binaryToString = (binaryNumericId: number): string => {
    const binaryString = formatNumberWithSpaces(binaryNumericId);
    const octets: string[] = binaryString.split(" ");
    const charsArray: string[] = [];

    for (const octet of octets) {
        const decimal: number = parseInt(octet, 2);
        const char: string = String.fromCharCode(decimal);
        charsArray.push(char);
    }

    const str: string = charsArray.join("");

    return str;
}

