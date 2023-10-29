import Image from "next/image";

export default function ToggleButton({ 
    toggleClick, 
    LeftText, 
    RightText,
    LeftIcon, 
    LeftIconAlt,
    RightIcon,
    RightIconAlt,
    ButtonChecked
}) {

    return (
        <div className="ToggleButtonDiv ">
            <label className="Switch">
                <input type='checkbox' className="InputToggle" checked={ButtonChecked}/>
                <div className="Slider" onClick={toggleClick}>
                    {LeftIcon ?
                    (<div className="On Icon">
                        <Image 
                        src={LeftIcon}
                        alt={LeftIconAlt}
                    />
                    </div>
                    ) : (
                    <span className="On" >
                        {LeftText}
                    </span>
                    )
                }
                {RightIcon ?
                (<div className="Off Icon">
                <Image 
                src={RightIcon}
                alt={RightIconAlt}
            />
            </div>
            ) : (
            <span className="Off" >
                        {RightText}
                    </span>
                    )
                }
                    
                </div>
            </label>
        </div>
    )
}
