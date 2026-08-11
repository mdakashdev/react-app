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

## 4. Emit


## 5. v-model - Two way binding

- passing: value + onChange ; instead of v-model="username"
- Vue-তে যেমন ref() + v-model, React-এ তেমন useState() + value/onChange।
- useState use korte hobe, ei majhe tumi tomar moto kore name degine korte parbe as like ref value in vue

## 6. Routing
- router er jonno react-router-dom install korte hobe
- then pages folder create kore page korte hobe
- then router er vitor router confige and object create korte hobe
- then router main.tsx a register korte hobe

## state management
- follow: @doc/state-management/basic-global-store.md

## Tools

- chrome extension - react dev tools theke dekha jai - component & profile theke


## Confusion

- .tsx extension keno use kortechi ? eita actually ki?
