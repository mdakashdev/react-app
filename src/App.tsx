import BaseInput from "./components/BaseInput";
import UiInput from "./components/UiInput";
import { useUserStore } from '../src/store/useStore.ts';
import Preview from "./components/Preview.tsx";
import { useStoreState } from '../src/store/useState.ts';

function App() {
    const { name } = useUserStore();
    const { count, component, increment, decrement } = useStoreState();
  return (
      <div>
          {/*<h2>{ name }</h2>*/}
          <input
              type="text"
              name="first_name"
              placeholder="John Doe"
          />
          <BaseInput
            label="Name"
            type="text"
            name="first_name"
            placeholder="John Doe"
          />
          <UiInput/>
          <Preview/>
            <p>count: { count }</p>
            <p>component: { component }</p>
            <div onClick={() => increment(1) }>+1</div>
            <div onClick={() => decrement(1) }>-1</div>
      </div>
  );
}

export default App
