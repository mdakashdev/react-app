import { useUserStore } from "../store/useStore.ts";

function UiInput() {

    const { name, setName } = useUserStore();

    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}

export default UiInput;