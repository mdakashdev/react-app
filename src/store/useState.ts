import { create } from 'zustand';

interface IState {
    count: number,
    component: string,
    increment: (num: number) => void,
    decrement: (num: number) => void
}

export const useStoreState = create<IState>((set) => {

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

        decrement: (num: string) => {
            set((state) => ({
                count: state.count - 1
            }))
        }
    }

});
