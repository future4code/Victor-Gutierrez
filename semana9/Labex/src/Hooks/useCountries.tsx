import { useState, useEffect } from 'react';
import { countries } from '../Assets/json/countries';
import { Country } from '../Types/interfaces';

export const useCountries = () => {
    const [countriesStorage, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        setCountries(() => countries());
    }, []);

    return [countriesStorage];
};
