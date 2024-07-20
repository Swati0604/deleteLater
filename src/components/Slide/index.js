import { useState } from "react";
import { ComponentMap } from "../../utils/componentMap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "./styles.css";


const slideDataMapping = (slideComponent, sectionSide) => {
    const {data, attributes} = slideComponent[sectionSide] ?? {}
    return (
        <div style={attributes.styles}>
            {data.map((widget, index)=> {
                const widgetType = widget.type;
                const Component = ComponentMap[widgetType];

                if (!Component) {
                return null;
                }
                const testId = `${widgetType}-${index}`;
                return (
                    <>
                    <Component {...widget} />
                    </>
                );
            })}
        </div>
    )
}

const Slide = (sectionData) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    const getTransformStyle = (index) => ({
        transform: `translateX(${index * -100}vw)`
      });
    return (
        <>
            <div className="slider-arrow left-arrow" onClick={() => handleClick("left")}>
                <ArrowBackIcon />
            </div>
            <div style={{...getTransformStyle(slideIndex), ...sectionData?.attributes.styles}}>
            {sectionData &&
                sectionData.slides.map((slideData) => {
                return (
                    <div style={slideData.attributes.styles}>
                        {slideData.data.map((section)=> {
                        return <>
                            {slideDataMapping(section, 'leftSection')}
                            {slideDataMapping(section, 'rightSection')}
                        </>
                        })}
                    </div>
                )
                }
            )}
            </div>

            <div className="slider-arrow right-arrow" onClick={() => handleClick("right")}>
                <ArrowForwardIcon />
            </div>
        </>
    )
}

export default Slide;