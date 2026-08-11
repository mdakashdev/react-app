# `set` আসলে কী?

এটাই সবচেয়ে important অংশ।

```ts
create<UserStore>((set) => ({
```

এখানে Zustand তোমাকে একটা **function** দেয়, যার নাম তুমি `set` রেখেছো।

তুমি চাইলে নাম `set` না দিয়ে `update`-ও রাখতে পারতে:

```ts
create<UserStore>((update) => ({
    name: "",

    setName: (name: string) => update({ name }),
}));
```

এটাও কাজ করবে।

অর্থাৎ `set` কোনো magic keyword না। এটা Zustand থেকে পাওয়া একটা function।

---

## `set()` কী করে?

ধরো initial state:

```ts
{
    name: ""
}
```

যখন তুমি:

```ts
setName("Rahim");
```

call করবে, তখন:

```ts
set({ name: "Rahim" });
```

হবে।

তার ফলে Zustand store-এর state হয়ে যাবে:

```ts
{
    name: "Rahim"
}
```

---

# `set`-এর ভিতরে console.log করা যাবে?


```ts
export const useUserStore = create<UserStore>((set) => ({
    name: "",

    setName: (name: string) => {
        console.log("New name:", name);

        set({ name });
    },
}));
```

---

## কিন্তু `set`-এর ভিতরে কী আছে সেটা দেখতে চাইলে?

এভাবে:

```ts
export const useUserStore = create<UserStore>((set) => {

    console.log(set);

    return {
        name: "",

        setName: (name: string) => {
            set({ name });
        },
    };
});
```

এখানে:

```ts
console.log(set);
```

করলে তুমি একটা **function** দেখতে পাবে।

কারণ `set` নিজেই একটা function।

---

# আরেকটা useful ব্যাপার: `set` previous state-ও পেতে পারে

ধরো:

```ts
interface CounterStore {
    count: number;
    increment: () => void;
}
```

Implementation:

```ts
const useCounterStore = create<CounterStore>((set) => ({
    count: 0,

    increment: () => {
        set((state) => ({
            count: state.count + 1,
        }));
    },
}));
```

এখানে:

```ts
set((state) => ({
    count: state.count + 1,
}));
```

`state` হলো **বর্তমান store state**।

---

### পুরো জিনিসটা এভাবে মনে রাখো

```ts
interface UserStore {
    // STATE
    name: string;

    // ACTION-এর TYPE
    setName: (name: string) => void;
}
```

তারপর:

```ts
create<UserStore>((set) => ({
    // STATE-এর initial value
    name: "",

    // ACTION-এর implementation
    setName: (name: string) => {
        // Zustand-এর state update function
        set({ name });
    },
}));
```
