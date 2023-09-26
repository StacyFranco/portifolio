export default function ToggleButton({ toggleClick, LeftIten, RightIten }) {

    return (
        <div className="ToggleButtonDiv ">
            <label className="Switch">
                <input type='checkbox' className="InputToggle" />
                <div className="Slider" onClick={toggleClick}>
                    <span className="on" >
                        {LeftIten}
                    </span>
                    <span className="off" >
                        {RightIten}
                    </span>
                </div>
            </label>
        </div>
    )
}
