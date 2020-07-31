const validateAge = (age: number) => {
    if (age > 17) {
        return true;
    } else {
        throw new Error("Você deve ser maior que 18 para criar uma conta");
    }
};

export { validateAge };
