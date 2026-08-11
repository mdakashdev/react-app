## Create State

- Create a `store` folder.
- Create store files inside it, for example, `useState.ts`.
- Import `create` from Zustand and create each store separately. Example:

```text
import { create } from 'zustand';

interface IState {
    // STATE
    count: number,
    component: string
}

export const useStoreState = create<IState>(() => ({
    // STATE-এর initial value
    count: 0,
    component: 'checkbox'
}));
```
- Import the store into the component where you want to use it.
- Destructure the required states and use the template. Example:

```text
import { useStoreState } from '../src/store/useState.ts';

const { count, component } = useStoreState();

<p>count: { count }</p>
<p>component: { component }</p>
```