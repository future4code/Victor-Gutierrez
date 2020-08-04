const validateCPF = async (cpf: string): Promise<boolean> => {
    if (cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
        return true;
    } else {
        throw new Error(`Invalid CPF: ${cpf}`);
    }
};

export { validateCPF };
