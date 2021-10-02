import { useEffect, useState } from "react";
import $ from "jquery";


const Slots = (props) => {
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        if (props.isButtonClicked) {
            if(!props.debug) props.setSlotValue(Math.floor(Math.random() * 10));
            else props.setSlotValue(4);
            props.setIsButtonClicked(!props.isButtonClicked);
            setAnimation(true);
            setTimeout(() => {
                setAnimation(false);
            }, 3000);
        }
    }, [props, props.isButtonClicked]);

    useEffect(() => {
        $(".slot").each(function () {
            var $panes = $(".slotvalue_number", this),
            paneSize = $panes.first().height(),
            zDepth = paneSize / (2 * Math.tan(Math.PI / $panes.length));

            $panes.each(function (index) {
                var xAngle = (360 / $panes.length) * index;
                $(this).attr(
                    "style",
                    "-webkit-transform: rotateX(" + 
                    xAngle + "deg) translateZ(" + 
                    zDepth + "px); transform: rotateX(" +
                    xAngle + "deg) translateZ(" +
                    zDepth + "px);"
                );
            });
        });
    }, [animation]);

    return (
        <div className="space">
          <div className="slot">
            <div className="slot__value" id="ring">
              {!animation && props.slotValue}
              {animation &&
                [1, 2, 3, 4].map((elem, index) => {
                  return (
                    <div className="slot__value__number" id="slot" key={index}>
                      {elem}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      );
};

export default Slots;