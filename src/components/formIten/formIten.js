import Image from "next/image";

export default function FormIten({
    inputId,
    inputType,
    inputPlaceholder,
    inputValue,
    inputChange,
    labelText,
    validationMessage,
    textarea =false,
}) {
    return (
        <div className="FormItenDiv">
                    <label for= {inputId}>{labelText}</label>  
                        {textarea ?
                        <textarea
                        rows={5}
                        placeholder={inputPlaceholder}
                        id={inputId}
                        name={inputId}
                        value={inputValue}
                        onChange={inputChange}
                    /> : <input
                    type={inputType}
                    placeholder={inputPlaceholder}
                    id={inputId}
                    name={inputId}
                    value={inputValue}
                    onChange={inputChange}
                />
                    }
            {validationMessage && <p className="ValidationMessage">{validationMessage}</p>}
        </div>
    )
}