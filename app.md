## Application ready

## 1. Build React App 

- Using vite
- Framework: React, TypeScript, Eslint
- From Doc: https://react.dev/learn/build-a-react-app-from-scratch
- command: `pnpm create vite@latest`
- note: ready hobar kono kichu dekhar dorkar nai, just dekhbo scafolding paichi and run hocche


## 2. Create Component

- components folder er virote file gulo korbo
- Component Doc: https://react.dev/learn/your-first-component
- basic syntax (using function) component and implement in App.tsx
- React Fragment `<> </>` or `<div></div>`

## 3. Props passing and rcv

- function signature er moddhe, props: {name:string} diye korle hobe.
- pore jeno props.name use na korte hoi, se jonno `destructure` kore nile easy hobe.
- type use kore kora jan abar interface use kore kore jai
- optional props define korte pari

## 4. v-model - Two way binding

- passing: value + onChange ; instead of v-model="username"
- Vue-তে যেমন ref() + v-model, React-এ তেমন useState() + value/onChange।
- useState use korte hobe, ei majhe tumi tomar moto kore name degine korte parbe as like ref value in vue 
- 

## 5. Routing

## Tools

- chrome extension - react dev tools theke dekha jai - component & profile theke



## Router setup

> npm install react-router-dom

Router er jonno - need react-router-dom install kora.

- Page Create
```text
src/pages/Home.tsx
src/pages/About.tsx
```

- Router Config
> src/router/index.tsx

 - Router register

main.tsx a router register korte hobe se jonno, ProviderRouter use korte hobe RouterProvider

## Confusion

- .tsx extension keno use kortechi ? eita actually ki?
- 