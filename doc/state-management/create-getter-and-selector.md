# Getter

## Implement 
```code
interface IState {
    getDoubleCount: () => number
}

export const useStoreState = create<IState>((set, get) => {
        getDoubleCount: () => {
            return get().count * 2;
        }
    }

});
```
> get use kore state er exiting data paowa jai, as like set  diye jemon update kora jai

## using in component

```javascript 
function App() {
    const { getDoubleCount } = useStoreState();
  return (
      <div>
          <p>double count: { getDoubleCount() }</p>
      </div>
  );
}

```


# Selector Approach

**Zustand-এ সাধারণ computed value-এর জন্য selector approach-টাই বেশি natural**:


## Implement and use in component

```javascript 
function App() {
    const tripleCount = useStoreState(
        (state) => state.count * 3
    );
  return (
      <div>
          <p>Triple count: { tripleCount}</p>
      </div>
  );
}
```