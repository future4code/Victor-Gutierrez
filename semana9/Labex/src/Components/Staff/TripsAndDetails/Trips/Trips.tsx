import React, { useState } from 'react';
import Candidates from '../Candidates/Candidates';
import { useLabeX_getTrip } from '../../../../Hooks/useLabeX';
import { Listing, ListRoll, ListItem } from './Trips_styles';
import { TiDelete } from 'react-icons/ti';
import { deleteTripFromDashboard } from './Trips_services';

export default function Trips() {
    const [trips] = useLabeX_getTrip();
    const [idForRequest, setIdForRequest] = useState<string>('');

    const chooseTrip = (id: string) => {
        setIdForRequest(id);
    };

    const deleteTrip = (id: string) => {
        const sure = window.confirm(
            'Tem certeza que quer excluir? A ação é irreversível',
        );

        if (sure) {
            deleteTripFromDashboard(id);
        }
    };

    return (
        <>
            <Listing>
                <ListRoll>
                    {trips.map((item) => {
                        return (
                            <ListItem
                                title={`Duração de ${item.durationInDays} dias a partir de ${item.date}`}
                                onClick={() => chooseTrip(item.id)}
                                key={item.id}
                            >
                                <h3>{item.name}</h3>
                                <p>{item.planet}</p>
                                <TiDelete
                                    size={20}
                                    title="Excluir esta viagem"
                                    onClick={() => deleteTrip(item.id)}
                                />
                            </ListItem>
                        );
                    })}
                </ListRoll>
            </Listing>
            <Candidates id={idForRequest} />
        </>
    );
}
