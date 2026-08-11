> React-এ **computed / getter / selector** মানে হলো—store-এর existing state থেকে **নতুন একটা value বের করা**

> State-এ data রাখি, আর Selector/Getter দিয়ে সেই data থেকে দরকারি result বের করি।

> computed er 2 ta approach - getter and selector

### 3. তোমার store-এর ভিতর getter-like function

তুমি চাইলে store-এর মধ্যে method রাখতে পারো:

```ts
interface IState {
  count: number;
  component: string;

  increment: () => void;
  decrement: () => void;

  getDoubleCount: () => number;
}
```

তারপর:

```ts
export const useStoreState = create<IState>((set, get) => ({
  count: 0,
  component: 'checkbox',

  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },

  decrement: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },

  getDoubleCount: () => {
    return get().count * 2;
  },
}));
```

তারপর:

```tsx
const doubleCount = useStoreState((state) => state.getDoubleCount());
```

তবে **Zustand-এ সাধারণ computed value-এর জন্য selector approach-টাই বেশি natural**:

```tsx
const doubleCount = useStoreState((state) => state.count * 2);
```

---

### Hands on

তুমি যেহেতু basic তিনটা library শিখছো, এই একটা example দিয়ে practice করো:

```ts
count: 0
```

তারপর এগুলো বানানোর চেষ্টা করো:

```text
count
isEven
isPositive
doubleCount
isZero
```

অর্থাৎ:

```tsx
const count = useStoreState((state) => state.count);

const isEven = useStoreState(
  (state) => state.count % 2 === 0
);

const isPositive = useStoreState(
  (state) => state.count > 0
);

const doubleCount = useStoreState(
  (state) => state.count * 2
);

const isZero = useStoreState(
  (state) => state.count === 0
);
```