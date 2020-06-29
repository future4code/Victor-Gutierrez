import React, { createContext, useState } from 'react';

export const profileChangeListener = createContext<any>(null);

export function Provider({ children }) {
    const [contextState, setContextState] = useState<number>();

    return (
        <profileChangeListener.Provider
            value={{ contextState, setContextState }}
        >
            {children}
        </profileChangeListener.Provider>
    );
}
