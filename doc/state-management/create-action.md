
```code
import { create } from 'zustand';

interface IState {
count: number,
component: string,
// ACTION-এর TYPE
increment: (num: number) => void,
decrement: (num: number) => void
}

export const useStoreState = create<IState>((set) => {

    console.log('set', set);

    return {
        count: 0,
        component: 'checkbox',

       // ACTION-এর implementation
        increment: (num: number) => {
            console.log('number', num);
            // Zustand-এর state update function
            set((state) => {
                console.log('state', state.count);
                return {
                    count: state.count + 1
                }
            })
        },
        // ACTION-এর implementation
        decrement: (num: string) => {
           // Zustand-এর state update function
            set((state) => ({
                count: state.count - 1
            }))
        }
    }

});
```

- এখানে তুমি Zustand-কে বলছো: আমার store-এর মধ্যে count, component থাকবে এবং increment(), decrement() নামে action থাকবে।
- মানে: increment()-কে যখন নতুন num দেওয়া হবে, তখন Zustand-এর set() ব্যবহার করে store-এর count update করো।
- এখানে Zustand তোমাকে একটা **function** দেয়, যার নাম তুমি `set` রেখেছো। তুমি চাইলে নাম `set` না দিয়ে `update`-ও রাখতে পারতে:
- set → state change/update করার জন্য
- get → বর্তমান state পড়ার জন্য

# use in any component 

```code
import { useStoreState } from '../src/store/useState.ts';

const { count, component, increment, decrement } = useStoreState();

<div onClick={() => increment(1) }>+1</div>
<div onClick={() => decrement(1) }>-1</div>
```

- function কোনো argument না চাইলে; call - onClick={increment}
- function-কে argument দিতে হলে: call - onClick={() => increment(5)}
