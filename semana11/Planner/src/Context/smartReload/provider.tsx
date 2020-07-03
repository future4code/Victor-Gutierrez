import React, { useState } from 'react';
import { smartReloadContext } from './smartReload';
import { ProviderProps } from '../../Types/index';

export default function SmartReloadProvider({ children }: ProviderProps) {
  const [reloadSwitch, setReloadSwitch] = useState<number>(0);

  const Load = () => {
    setReloadSwitch((prev) => prev + 1);
  };

  return (
    <smartReloadContext.Provider value={{ reloadSwitch, Load }}>
      {children}
    </smartReloadContext.Provider>
  );
}
