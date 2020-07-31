const validateCPF = (cpf: string) => {
    if (cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
        return true;
    } else {
        throw new Error(`Invalid CPF: ${cpf}`);
    }
};
