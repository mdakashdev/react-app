# after render - 1 time rune
useEffect(() => {
// 1 time run
}, []);


# useEffect কী?
> useEffect হলো React-এর একটি Hook
> যেটা দিয়ে component render হওয়ার পর কোনো side effect চালানো যায়।

যেমন:

1. API call করা
2. document.title পরিবর্তন করা
3. কোনো event listener যোগ করা
4. timer চালানো
5. কোনো state পরিবর্তনের পর কিছু করা

Basic syntax:

```react
import { useEffect } from "react";

useEffect(() => {
// এখানে effect-এর কাজ
}, []);
```

সবচেয়ে গুরুত্বপূর্ণ বিষয়: Dependency Array

1. [] দিলে — শুধু একবার

```react
useEffect(() => {
console.log("Component loaded");
}, []);
```

Component প্রথমবার render হওয়ার পর এটি একবার চলবে।
সাধারণত API call-এর মতো কাজে ব্যবহার করা হয়:

```react
useEffect(() => {
fetch("/api/users")
.then(res => res.json())
.then(data => console.log(data));
}, []);
```

2. Dependency দিলে — সেই value পরিবর্তন হলে

```react
const [count, setCount] = useState(0);

useEffect(() => {
console.log("Count changed:", count);
}, [count]);
```

এখানে count পরিবর্তন হলেই useEffect আবার চলবে।
যেমন:

count = 0 → effect চলবে
count = 1 → effect চলবে
count = 2 → effect চলবে

3. Dependency array না দিলে — প্রতি render-এর পর

```react
useEffect(() => {
console.log("Rendered");
});
```

এটা component প্রতিবার render হওয়ার পর চলবে।

একটা সহজ example

```react
import { useEffect, useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

useEffect(() => {
document.title = `Count: ${count}`;
}, [count]);

return (
<button onClick={() => setCount(count + 1)}>
Count: {count}
</button>
);
}
```
