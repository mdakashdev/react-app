//props rcv
interface BaseInputProps {
    label?: string
    type: string,
    name: string,
    placeholder?: string
}

function BaseInput({
       label,
       type,
       name,
       placeholder
}: BaseInputProps) {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}

export default BaseInput;