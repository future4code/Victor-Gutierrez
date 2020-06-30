import React, { useState } from 'react';
import { CircleLoader } from 'react-spinners';

export const useLoading = () => {
    const [loading, setLoading] = useState<any>(false);

    const LoadingGif = (
        <CircleLoader size={150} color={'white'} loading={loading} />
    );

    const ToggleLoading = () => {
        setLoading((prev: boolean) => !prev);
    };

    return { loading, ToggleLoading, LoadingGif };
};
