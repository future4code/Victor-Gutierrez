import { useState, useEffect } from 'react';
import { planets } from './../Assets/json/planets';

export const usePlanets = () => {
    const [planetsStorage, setPlanets] = useState<string[]>([]);

    useEffect(() => {
        setPlanets(() => planets());
    }, []);

    return [planetsStorage];
};
