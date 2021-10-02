import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import Slots from "./Slots";

const PopUp = (props) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [slotOneValue, setSlotOneValue] = useState("Slot 1");
    const [slotTwoValue, setSlotTwoValue] = useState("Slot 2");
    const [slotThreeValue, setSlotThreeValue] = useState("Slot 3");
    const [debug, setDebug] = useState(false);

    useEffect(() => {
        if (
            typeof slotOneValue == "number" &&
            typeof slotTwoValue == "number" &&
            typeof slotThreeValue == "number"
        ) {
            if (slotOneValue == slotTwoValue && slotTwoValue === setSlotThreeValue) {
                if (slotOneValue === 4) props.setBalance(props.balance + 10);
                else props.setBalance(props.balance + 5);
            } else if (
                slotOneValue === slotTwoValue ||
                slotTwoValue === slotThreeValue ||
                slotThreeValue === slotOneValue
            ) {
                props.setBalance(props.balance + 0.5);
            } else {
                props.setBalance(props.balance - 1);
            }

            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            props.setResults([
                ...props.results,
                {
                    id: parseInt(props.results.length),
                    time: time,
                    slotOne: slotOneValue,
                    slotTwo: slotTwoValue,
                    slotThree: slotThreeValue,
                },
            ]);
        }
    }, [slotOneValue, slotTwoValue, slotThreeValue]);

    const startGame = () => {
        setSlotOneValue("Slot 1");
        setSlotTwoValue("Slot 2");
        setSlotThreeValue("Slot 3");
        setIsButtonClicked(!isButtonClicked);
        var x = document.querySelectorAll('#ring');
        for (var i = 0; i < x.length; i++) {
            x[i].style.animation = "spin-panels 1s linear infinite";
        }
        setTimeout(() => {
            var x = document.querySelectorAll("#ring");
            for (var i = 0; i < x.length; i++) {
                x[i].style.animation = "";
            }
        }, 3000);
        setDebug(false);
    };

    const debugFours = () => {
        setSlotOneValue("Slot 1");
        setSlotTwoValue("Slot 2");
        setSlotThreeValue("Slot 3");
        setIsButtonClicked(!isButtonClicked);
        var x = document.querySelectorAll("#ring");
        for (var i = 0; i < x.length; i++) {
            x[i].style.animation = "spin-panels 1s linear infinte";
        }
        setTimeout(() => {
            var x = document.querySelectorAll("#ring");
            for (var i = 0; i < x.length; i++) {
                x[i].style.animation = "";
            }
        }, 3000);
        setDebug(true);
    };
    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <div className="popup-container-header"> Spin the Machine!</div>
                <div className = "popup-container-body">
                    <div className="slots-machine">
                        <Slots
                            slotValue={slotOneValue}
                            setSlotValue={setSlotOneValue}
                            isButtonClicked={isButtonClicked}
                            debug={debug}
                        />
                        <Slots
                            slotValue={slotTwoValue}
                            setSlotValue={setSlotTwoValue}
                            isButtonClicked={isButtonClicked}
                            debug={debug}
                        />
                        <Slots
                            slotValue={slotOneValue}
                            setSlotValue={setSlotThreeValue}
                            isButtonClicked={isButtonClicked}
                            debug={debug}
                        />
                    </div>
                </div>
                <div className="popup-container-footer">
                    <Button
                        variant = "outlined"
                        color="primary"
                        onClick={() => startGame()}
                        disabled={props.balance < 1}>
                        Start
                    </Button>
                    <Button
                        variant = "outlined"
                        color="primary"
                        onClick={() => debugFours()}>
                        Debug
                    </Button>
                    <Button
                        variant = "outlined"
                        color="secondary"
                        onClick={() => props.setOpenPopup(false)}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PopUp;