# Ready to application

- https://zustand.docs.pmnd.rs/learn/getting-started/introduction
- install zustand -  `pnpm install zustand`
-  

# Zustand কী?

Zustand হলো React-এর একটি **global state management library**।

Local state:

```tsx
const [name, setName] = useState("");
```

Global state:

```tsx
const { name, setName } = useUserStore();
```

---

## Vue (Pinia) vs React (Zustand)

### Pinia

```ts
export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
  }),

  actions: {
    setName(name: string) {
      this.name = name;
    }
  }
});
```

Component:

```ts
const userStore = useUserStore();

userStore.setName("Akash");
```

---

### Zustand

```tsx
import { create } from "zustand";

type UserStore = {
  name: string;
  setName: (name: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: "",

  setName: (name) =>
    set({
      name,
    }),
}));
```

Component:

```tsx
const { name, setName } = useUserStore();

setName("Akash");
```

দেখছো? Concept প্রায় একই।

---

## Folder Structure

```text
src/

components/
store/
    userStore.ts
App.tsx
```

---

## Store

```tsx
import { create } from "zustand";

type UserStore = {
  name: string;
  setName: (name: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: "",

  setName: (name) =>
    set({
      name,
    }),
}));
```

---

### Component 1

```tsx
import { useUserStore } from "./store/userStore";

function Input() {
  const { name, setName } = useUserStore();

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

---

### Component 2

```tsx
import { useUserStore } from "./store/userStore";

function Preview() {
  const { name } = useUserStore();

  return <h2>{name}</h2>;
}
```

---

## App

```tsx
function App() {
  return (
    <>
      <Input />
      <Preview />
    </>
  );
}
```

Flow:

```
Input

↓

Store

↓

Preview
```

কোনো props লাগছে না।

---

## Pinia Mapping

| Pinia            | Zustand          |
| ---------------- | ---------------- |
| `defineStore()`  | `create()`       |
| `state`          | object           |
| `actions`        | function         |
| `useUserStore()` | `useUserStore()` |

---

## Computed?

Pinia

```ts
getters: {
    fullName() {}
}
```

Zustand-এ সাধারণত আলাদা getter লাগে না।

Component-এ derived value করে নেওয়া হয়:

```tsx
const fullName = `${firstName} ${lastName}`;
```

অথবা store-এ function রাখা যায়।

---

## Async Action

Pinia

```ts
actions: {
    async getUsers() {}
}
```

Zustand

```tsx
const useUserStore = create((set) => ({
  users: [],

  fetchUsers: async () => {
    const users = await api.getUsers();

    set({
      users,
    });
  },
}));
```

---

## Vue → React

```
ref()
        ↓
useState()

Pinia
        ↓
Zustand

provide/inject
        ↓
Context API
```

---

## Zustand কেন এত জনপ্রিয়?

* ✅ খুব কম boilerplate
* ✅ TypeScript-friendly
* ✅ ছোট API
* ✅ React Hooks-এর মতো feel
* ✅ Redux Toolkit-এর তুলনায় শেখা অনেক সহজ
* ✅ ছোট ও মাঝারি project-এর জন্য দারুণ

তুমি যেহেতু Vue থেকে React-এ আসছো, তাই Zustand শেখার সময় বারবার Pinia-এর সাথে মিল খুঁজে পাবে। Concept অনেকটাই একই, শুধু syntax React-এর মতো।
