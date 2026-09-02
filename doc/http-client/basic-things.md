1. axios install 
2. central configure inside - src/api/axios.ts
3. feature wise get data - src/api/userApi
4. component create - 


- onMounted as like - useEffect; ekoi na but both aar hook.
- https://react.dev/reference/react/useEffect


```
Component render
      ↓
useEffect চলে
      ↓
getUsers()
      ↓
API থেকে users আসে
      ↓
setUsers(data)
      ↓
Component আবার render
      ↓
users.map()
      ↓
UI-তে users দেখায়
```


---
# Implement - axios

- vue er moto axios intall korechi then central configure and fearuwise data get.

Setar jonno akta `pages` create korechi - `list page` ans sei page diye ami `route` a show korechi - `/pages/List.tsx`

- list page `<UserList/>` component dekiyechi, ei component ta actually data show korar jonno use korechi 
- <UserList/> component a, useEffect (details- @doc/common/useEffect.md) use kore sobkichu use korechi.
- useState - follow @doc/common/use-state.md 

# Implement - tanstack

install - react tanstack query : `pnpm add @tanstack/react-query`

- তারপর application-এর root-এ `QueryClientProvider দিতে হবে।`

- i am managing manually when use axios - data, loading & error
- but if i use tanStack then - tanStack manage data, loading, error, cache, refetch, retry & etc.


### Step 1 — Install

```bash
pnpm add @tanstack/react-query
```

---

### Step 2 — `main.tsx` / `main.jsx`-এ QueryClient configure

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from './router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
)
```

এখানে:

```text
QueryClient
     ↓
পুরো React application-এর
TanStack Query management
```

---

### Step 3 — তোমার `userApi.ts` একই থাকবে

ধরো:

```ts
// api/userApi.ts

import api from "./axios";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get<User[]>("/users");

    return response.data;
};
```

এখানে `getUsers()` শুধু **API call** করবে।

---

### Step 4 — এখন `UserList.tsx`-এ TanStack Query

তোমার বর্তমান:

```tsx
useState()
useEffect()
```

দুটো remove করো।

তারপর:

```tsx
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userApi";

const UserList = () => {

    const {
        data: users,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (isError) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            <h2>Users</h2>

            {users?.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default UserList;
```

---

## এখন তোমার আগের code বনাম নতুন code

### আগে

```text
UserList
   │
   ├── useState → users
   ├── useState → loading
   ├── useState → error
   │
   └── useEffect
          ↓
       getUsers()
          ↓
        Axios
```

তুমি manually manage করছিলে:

```text
data
loading
error
```

### এখন

```text
UserList
   ↓
useQuery()
   ↓
getUsers()
   ↓
Axios
   ↓
Backend
```

TanStack Query manage করছে:

```text
data
loading
error
cache
refetch
retry
```

---

## `queryKey` এবং `queryFn` বুঝে রাখো

এটা TanStack Query-এর সবচেয়ে important অংশ:

```tsx
useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
});
```

### `queryFn`

```tsx
queryFn: getUsers
```

মানে:

> **Data কোথা থেকে আনব?**

Answer:

```text
getUsers()
   ↓
Axios
   ↓
/users
```

### `queryKey`

```tsx
queryKey: ["users"]
```

মানে:

> **এই data-টার identity কী?**

TanStack Query এই key ব্যবহার করে data **cache** করে।

যেমন পরে একই query অন্য component থেকেও করলে:

```tsx
useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
});
```

TanStack Query জানে:

> `"users"` data আগে থেকেই আমার cache-এ আছে।

---
