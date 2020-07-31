import moment from "moment";

const validateAge = (birthdate: string) => {
    const delta = moment(new Date(birthdate)).diff(moment(), "years");

    if (delta * -1 > 17) {
        return true;
    } else {
        throw new Error("Você deve ser maior de idade para criar uma conta");
    }
};

export { validateAge };

console.log(validateAge("11/21/2027"));
