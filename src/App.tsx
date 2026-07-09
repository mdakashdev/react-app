import BaseInput from "./components/BaseInput";

function App() {
  return (
      <div>
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
      </div>
  );
}

export default App
