import React, { useState } from 'react';

import { profileChangeListener } from './context';

export default function Provider({ children }) {
    const [contextState, setContextState] = useState<number>();

    return (
        <profileChangeListener.Provider
            value={{ contextState, setContextState }}
        >
            {children}
        </profileChangeListener.Provider>
    );
}
