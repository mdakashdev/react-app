import { useProfileStore } from "../store/useProfile.ts"

function Preview() {
    const { name, address } = useProfileStore();
    return (
        <div>
            <p>{ name } - { address }</p>
        </div>
    )
}

export default Preview;
