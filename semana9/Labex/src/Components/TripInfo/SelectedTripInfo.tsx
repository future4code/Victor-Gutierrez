import React from 'react';
import { useLabeX_getTrip } from '../../Hooks/useLabeX';
import { SimpleIdProp } from '../../Types/interfaces';
import { Background, Wrapper } from './SelectedTripInfo._styles';
import { useLoading } from '../../Hooks/useLoading';

export function SelectedTripInfo({ id }: SimpleIdProp) {
    const [trips] = useLabeX_getTrip();
    const { LoadingGif } = useLoading();

    const FilterToGetOnlyThisOne = trips.filter((item) => item.id === id) || [];

    const Details = FilterToGetOnlyThisOne.map((item) => {
        return (
            <Wrapper key={item.id}>
                <Background planet={item.planet} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>
                    {item.durationInDays} dias de duração a partir de{' '}
                    {item.date}
                </p>
            </Wrapper>
        );
    });

    return (
        <>{trips.length === 0 ? <Wrapper>{LoadingGif}</Wrapper> : Details}</>
    );
}
