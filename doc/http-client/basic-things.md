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