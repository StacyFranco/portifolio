export default function BtnColor1({
    text,
    btnClass,
    click,
    type = 'button',
    value
}){
    return(
        <button
        className= {`btn ${btnClass}`}
        onClick={click}
        type={type}
        value={value}
        >
            {text}
        </button>
    )
}