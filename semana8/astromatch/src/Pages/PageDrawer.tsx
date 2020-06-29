import React, { useEffect, useState } from 'react';

import ClientPage from './ClientPage/ClientPage';
import Welcome from './Welcome/Welcome';

export default function PageDrawer() {
    const [virtualLoading, setVLoading] = useState<boolean>(true);
    const [animationTrigger, setTrigger] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setTrigger(false), 4000);
        setTimeout(() => setVLoading(false), 5000);
        // Preciso de intervalos distintos pois o React-Animated-CSS não gera um retorno visual
        //  sem essa diferença de tempo.
    }, []);

    return (
        <>
            {virtualLoading ? (
                <Welcome virtualLoading={animationTrigger} />
            ) : (
                <ClientPage />
            )}
        </>
    );
}
