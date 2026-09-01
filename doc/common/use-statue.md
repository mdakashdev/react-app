# useState

- local state বনাম global state

amra jei state component use kori seta local state, like - 

```react
import { useState } from "react";
const [users, setUsers] = useState<User[]>([]);
```

## users, setUsers নাম কি নিজের ইচ্ছামতো দিতে পারি?

হ্যাঁ, অবশ্যই।

- const [users, setUsers] = useState<User[]>([]);
  তুমি চাইলে লিখতে পারো:
- const [users, changeUsers] = useState<User[]>([]);

const [A, B] = useState(...)

এখানে React-এর কাছে A বা B নামের কোনো বিশেষ meaning নেই।
React শুধু দুইটা জিনিস return করে:

useState()
↓
[currentValue, functionToUpdateValue]

তাই:
const [users, setUsers] = useState<User[]>([]);

মানে:
users    → current value
setUsers → value update করার function

## তাহলে setUsers নামটাই সবাই কেন ব্যবহার করে?

এটা একটা convention।

সাধারণ নিয়ম: [value, setValue]

so, const [users, setUsers] = useState<User[]>([]);

তাই অন্য developer code দেখলেই সহজে বুঝতে পারে কোনটা state আর কোনটা setter।

