import { useState, useEffect, useCallback } from 'react';
import { Trip, TripDetail } from '../Types/interfaces';
import LabeXAdmin from './../Services/LabeXAdmin';
import LabeX from '../Services/LabeX';

export function useLabeX_getTrip() {
    const [trips, setTrips] = useState<Trip[]>([] as Trip[]);

    useEffect(() => {
        getTrips();
    }, []);

    const getTrips = async () => {
        try {
            const response = await LabeX.get('/trips');
            setTrips(response.data);
        } catch (error) {
            console.error(error);
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
