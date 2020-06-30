import { useState, useEffect, useCallback } from 'react';
import { Trip, TripDetail } from '../Types/interfaces';
import LabeXAdmin from './../Services/LabeXAdmin';
import LabeX from '../Services/LabeX';
import { toast } from 'react-toastify';

export function useLabeX_getTrip() {
    const [trips, setTrips] = useState<Trip[]>([] as Trip[]);

    useEffect(() => {
        getTrips();
    }, []);

    const getTrips = async () => {
        try {
            const response = await LabeX.get('/trips');
            setTrips(response.data.trips);
        } catch (error) {
            toast.error('Houve um erro recuperando as viagens');
        }
    };

    return [trips];
}

export function useLabeX_getTripDetail(id: string) {
    const [tripDetails, setTripDetails] = useState<TripDetail>(
        {} as TripDetail,
    );

    const getTripDetail = useCallback(async () => {
        try {
            const response = await LabeXAdmin.get(`/trip/${id}`);
            setTripDetails(response.data.trip);
        } catch (error) {
            console.error(error);
        }
    }, [id]);

    useEffect(() => {
        getTripDetail();
    }, [getTripDetail]);

    return [tripDetails];
}

export async function LabeX_decideCandidate(
    requestRaw: boolean,
    tripID: string,
    candidateID: string,
) {
    try {
        await LabeXAdmin.put(
            `/trips/${tripID}/candidates/${candidateID}/decide`,
            {
                approve: requestRaw,
            },
        );

        if (requestRaw) {
            toast.dark(`O candidato ${candidateID} foi aprovado`);
        } else {
            toast.dark(`O candidato ${candidateID} foi rejeitado`);
        }
    } catch (error) {
        console.error(error);
    }
}
