import React, { useState } from 'react';
import { Trip } from '../../../Types/interfaces';

import { useLoading } from '../../../Hooks/useLoading';
import { usePlanets } from '../../../Hooks/usePlanets';
import { SendCreationData } from './CreateTripForm_services';

import {
    FormContainer,
    FormInput,
    FormLabel,
    FormSelect,
    FormButton,
} from '../../SharedStyles/SharedStyles';

export default function CreateTripForm() {
    const [formData, setFormData] = useState<Trip>({} as Trip);
    const { loading, ToggleLoading, LoadingGif } = useLoading();
    const [planetsStorage] = usePlanets();

    const handleInput = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        ToggleLoading();
        SendCreationData(formData).then((value) => {
            ToggleLoading();
        });
    };

    return (
        <>
            <FormContainer style={{ height: 700, padding: 40 }}>
                {loading ? (
                    LoadingGif
                ) : (
                    <>
                        <form onSubmit={handleSubmit}>
                            <FormInput
                                id="name"
                                onChange={handleInput}
                                type="text"
                                required
                                minLength={5}
                            />
                            <FormLabel htmlFor="name">Nome da viagem</FormLabel>

                            <FormSelect
                                required
                                id="planet"
                                onChange={handleInput}
                            >
                                <option value=""></option>
                                {planetsStorage.map((item) => {
                                    return <option key={item}>{item}</option>;
                                })}
                            </FormSelect>
                            <FormLabel htmlFor="planet">Destino</FormLabel>

                            <FormInput
                                id="date"
                                onChange={handleInput}
                                type="date"
                                min={18}
                                required
                            />
                            <FormLabel
                                style={{ marginLeft: 100 }}
                                htmlFor="date"
                            >
                                Data de ínicio
                            </FormLabel>

                            <FormInput
                                id="description"
                                onChange={handleInput}
                                type="text"
                                minLength={4}
                                required
                            />
                            <FormLabel htmlFor="description">
                                Descreva características da viagem
                            </FormLabel>
                            <FormInput
                                id="durationInDays"
                                onChange={handleInput}
                                type="number"
                                min={30}
                                required
                            />
                            <FormLabel htmlFor="durationInDays">
                                Duração em dias
                            </FormLabel>

                            <FormButton type="submit">
                                CRIAR NOVA VIAGEM
                            </FormButton>
                        </form>
                    </>
                )}
            </FormContainer>
        </>
    );
}
