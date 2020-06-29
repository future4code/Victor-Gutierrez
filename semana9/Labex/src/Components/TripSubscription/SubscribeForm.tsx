import React, { useState } from 'react';
import { TripSubscription, SubscribeFormProps } from '../../Types/interfaces';
import { useLabeX_getTrip } from '../../Hooks/useLabeX';
import { SendSubmission } from './SubscribeForm_services';
import { useLoading } from '../../Hooks/useLoading';
import { useHistory } from 'react-router-dom';
import { useCountries } from '../../Hooks/useCountries';
import {
    FormContainer,
    FormInput,
    FormLabel,
    FormButton,
    FormSelect,
} from '../SharedStyles/SharedStyles';

export default function SubscribeForm({
    Tripid: tripIdFromDetailsPage,
}: SubscribeFormProps) {
    const [formData, setFormData] = useState<TripSubscription>(
        {} as TripSubscription,
    );
    const [countriesStorage] = useCountries();
    const [trips] = useLabeX_getTrip();
    const { loading, ToggleLoading, LoadingGif } = useLoading();
    const history = useHistory();

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

        const decideWhichIdtoSend =
            tripIdFromDetailsPage === undefined
                ? formData.tripId
                : tripIdFromDetailsPage;

        SendSubmission(decideWhichIdtoSend, formData).then((value) => {
            ToggleLoading();
            history.push('/trips');
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
                            <FormLabel htmlFor="name">Seu Nome</FormLabel>

                            <FormInput
                                id="age"
                                onChange={handleInput}
                                type="number"
                                min={18}
                                required
                            />
                            <FormLabel htmlFor="age">Sua idade</FormLabel>

                            <FormInput
                                id="applicationText"
                                onChange={handleInput}
                                type="text"
                                minLength={4}
                                required
                            />
                            <FormLabel htmlFor="applicationText">
                                Diga-nos por quê você deveria ir
                            </FormLabel>
                            <FormInput
                                id="profession"
                                onChange={handleInput}
                                type="text"
                                minLength={30}
                                required
                            />
                            <FormLabel htmlFor="profession">
                                Sua profissão
                            </FormLabel>

                            <FormSelect
                                required
                                id="country"
                                onChange={handleInput}
                            >
                                <option value=""></option>
                                {countriesStorage.map((item) => {
                                    return (
                                        <option
                                            key={item.nome_pais}
                                            value={item.nome_pais}
                                        >
                                            {item.nome_pais}
                                        </option>
                                    );
                                })}
                            </FormSelect>
                            <FormLabel htmlFor="country">Seu País</FormLabel>
                            {tripIdFromDetailsPage === undefined ? (
                                <>
                                    <FormSelect
                                        required
                                        id="tripId"
                                        onChange={handleInput}
                                    >
                                        <option value=""></option>
                                        {trips.map((item) => {
                                            return (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.planet} - {item.name}
                                                </option>
                                            );
                                        })}
                                    </FormSelect>
                                    <FormLabel htmlFor="tripId">
                                        De qual excursão você deseja participar?
                                    </FormLabel>
                                </>
                            ) : (
                                <></>
                            )}
                            <FormButton type="submit">
                                QUERO EMBARCAR !
                            </FormButton>
                        </form>
                    </>
                )}
            </FormContainer>
        </>
    );
}
