import BaseInput from "./components/BaseInput";
import UiInput from "./components/UiInput";
import { useUserStore } from "../src/store/useStore.ts"
import Preview from "./components/Preview.tsx";

function App() {
    const { name } = useUserStore();
  return (
      <div>
          <h2>{ name }</h2>
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
      </div>
  );
}

export default App
