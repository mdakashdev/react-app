> Implicit return বনাম Explicit return

### 1. প্রথমটা — explicit `return`

```ts
export const useStoreState = create((set) => {
    console.log("set", set);

    return {
        count: 0,
        component: "checkbox",

        increment: (num: number) => {
            console.log("number", num);
        }
    };
});
```

এখানে `{}` function body হিসেবে কাজ করছে, তাই object return করতে হলে **`return` লিখতে হচ্ছে**।

---

### 2. দ্বিতীয়টা — implicit return

```ts
export const useStoreState = create((set) => ({
    count: 0,
    component: "checkbox",

    increment: (num: number) => {
        console.log("number", num);
    }
}));
```

### কেন `({})`?

এখানে খুব important:

```ts
(set) => {
    
}
```

এটা **object return করবে না**। এটা function-এর body।

কিন্তু:

```ts
(set) => ({})
```

এখানে `()` দিয়ে `{}`-কে wrap করা হয়েছে, তাই এটাকে **object হিসেবে return** করা হচ্ছে।

তাই এই দুইটা equivalent:

```ts
(set) => ({
    count: 0
})
```

এবং

```ts
(set) => {
    return {
        count: 0
    };
}
```