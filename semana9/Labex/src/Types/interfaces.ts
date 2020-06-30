export interface FormDataForLoginAndSignUp {
    email: string;
    password: string;
}
export interface HeaderProps {
    location?: string;
}

export interface TripDetail extends Trip {
    candidates: Candidate[];
    approved: Candidate[];
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
    durationInDays: number;
    date: string;
    description: string;
}

export interface DashBoardCardProps {
    title: string;
    toWhere: string;
}

export interface TripSubscription {
    name: string;
    age: number;
    applicationText: string;
    profession: string;
    country: string;
    tripId: string;
}

export interface Country {
    gentilico: string;
    nome_pais: string;
    nome_pais_int: string;
    sigla: string;
}

export interface SimpleIdProp {
    id: string;
}

export interface BackgroundInTripCardProps {
    planet: string;
}

export interface SubscribeFormProps {
    Tripid?: string;
}
