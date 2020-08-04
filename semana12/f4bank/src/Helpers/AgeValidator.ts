import moment from "moment";

const validateAge = async (birthdate: string): Promise<boolean> => {
    const delta = moment(moment(birthdate, "DD/MM/YYYY")).diff(
        moment.now(),
        "years"
    );

    if (delta * -1 > 17) {
        return true;
    } else {
        throw new Error("Você deve ser maior de idade para criar uma conta");
    }
};

export { validateAge };
