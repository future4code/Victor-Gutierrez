export interface FormDataForLoginAndSignUp {
    email: string;
    password: string;
}
export interface HeaderProps {
    location?: string;
}

export interface TripDetailsProps {
    match: {
        params: { id: string };
    };
}

export interface RouteParams {
    id: string;
}

export interface UserFromLabenusers {
    emailAdress: string;
    passcode: string;
}
