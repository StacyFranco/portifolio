import Image from "next/image";

export default function ToggleButton({ 
    toggleClick, 
    LeftText, 
    RightText,
    LeftIcon, 
    LeftIconAlt,
    RightIcon,
    RightIconAlt }) {

    return (
        <div className="ToggleButtonDiv ">
            <label className="Switch">
                <input type='checkbox' className="InputToggle" />
                <div className="Slider" onClick={toggleClick}>
                    {LeftIcon ?
                    (<div className="on icon">
                        <Image 
                        src={LeftIcon}
                        alt={LeftIconAlt}
                    />
                    </div>
                    ) : (
                    <span className="on" >
                        {LeftText}
                    </span>
                    )
                }
                {RightIcon ?
                (<div className="off icon">
                <Image 
                src={RightIcon}
                alt={RightIconAlt}
            />
            </div>
            ) : (
            <span className="off" >
                        {RightText}
                    </span>
                    )
                }
                    
                </div>
            </label>
        </div>
    )
}
