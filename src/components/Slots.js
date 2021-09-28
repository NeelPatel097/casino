import { useEffect, useState } from "react";
import $ from "jquery";


const Slots = (props) => {
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        if (props.isButtonClicked) {
            if(!props.debug) props.setSlotValue(Math.floor(Math.random() * 10));
            else props.setSlotValue(7);
            props.setIsButtonClicked(!props.isButtonClicked);
            setAnimation(true);
            setTimeout(() => {
                setAnimation(false);
            }, 3000);
        }
    }, [props, props.isButtonClicked]);

};

export default Slots;