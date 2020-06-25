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

export interface TripDetail extends Trip {
    candidates: Candidate[];
}

export interface Candidate {
    id: string;
    applicationText: string;
    profession: string;
    age: number;
    name: string;
    country: string;
}

export interface RouteParams {
    id: string;
}

export interface Trip {
    id: string;
    name: string;
    planet: string;
}

export interface DashBoardCardProps {
    title: string;
    toWhere: string;
}
