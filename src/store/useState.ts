import { create } from 'zustand';

interface IState {
    count: number,
    component: string,
    increment: (num: number) => void,
    decrement: (num: number) => void,
    getDoubleCount: () => number
}

export const useStateStore = create<IState>((set, get) => {

    console.log('set', set);

    return {
        count: 0,
        component: 'checkbox',

        increment: (num: number) => {
            console.log('number', num);
            set((state) => {
                console.log('state', state.count);
                return {
                    count: state.count + 1
                }
            })
        },

        decrement: (num: number) => {
            set((state) => ({
                count: state.count - 1
            }))
        },

        getDoubleCount: () => {
            return get().count * 2;
        }
    }

});
