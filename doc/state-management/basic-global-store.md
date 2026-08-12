# making basic global store

## install zustand

- global store use korar jonno zustand install kora lagbe
- https://zustand.docs.pmnd.rs/learn/getting-started/introduction
- install zustand -  `pnpm install zustand`

## Create Store

- Create a `store` folder.
- Create store files inside it, for example, `useState.ts`.
- Import `create` from Zustand and using `create function` each store separately.

## Registration & create state
- Import the store into the component where you want to use it.
- Destructure the required states and use the template.
- Example: `create-state.md`

## Create Actions / Method
- Follow create-action.md

## Create Computed method
- Getter and Selector Approach
- Follow create-getter-and-selector.md

# Basic Tasks

1. Create global store --> `done`
2. Create state with initial value -> `done`
3. Export store in any component or pages --> `done`
4. Use store / read state in multiple component --> `done`
5. Update state using Actions / Methods - so define method in store; like - `increment and decrement` --> `done`
6. Using computed / getter / selector --> `done`

