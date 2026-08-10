// make store folder
// make useState.ts file

import { create } from 'zustand';

interface IState {
    count: number,
    component: string
}

export const useStoreState = create<IState>(() => ({
    count: 0,
    component: 'checkbox'
}));