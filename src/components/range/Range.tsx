import React, { useState, useRef, useEffect } from 'react';
import styles from "./Range.module.css"
import { coordsRange, rangeProps } from 'utility/types';

const Range = ({minValue, maxValue, minValueInput, maxValueInput, updateMinValue, updateMaxValue, fixedValue = false, stepRange}: rangeProps) => {
    const firstMarker:any = useRef();
    const secondMarker:any = useRef();
    const rangeBar:any = useRef();
    const markerSize = 14;
    const barLength = 300;
    const maxRightPos = barLength-markerSize;
    const [coords, setCoords] = useState<coordsRange>();
    const [marker1Pos, setMarker1Pos] = useState(0);
    const [marker2Pos, setMarker2Pos] = useState(0);

    useEffect(() => {
        if(coords){
            //UPDATING RANGE BAR COORDS
            let minPos = getPositionFromValue(minValueInput);
            let maxPos = getPositionFromValue(maxValueInput);
            setMarker1Pos(minPos);
            setMarker2Pos(maxPos);
        }
    }, [minValueInput,maxValueInput]);

    useEffect(() => {
        //SETTING RANGE BAR COORDS FOR THE FIRST TIME
        let bar = rangeBar!.current!.getBoundingClientRect();
        setCoords({barLeft:bar.left,barRight:bar.right});
        let minPos = getPositionFromValue(minValue);
        let maxPos = getPositionFromValue(maxValue);
        setMarker1Pos(minPos);
        setMarker2Pos(maxPos);

    }, [minValue,maxValue]);


    const dragEnd = (event: React.DragEvent<HTMLDivElement>,markerId:number) => {
        let newPos = event.clientX - coords!.barLeft;
        if(newPos >= maxRightPos)
            newPos = maxRightPos; 
        if(newPos < 0)
            newPos = 0;             

        if(markerId == 1){
            if(newPos >= marker2Pos)
                newPos = marker2Pos-markerSize; 
            let percentage = getRangeValue(newPos);
            updateMinValue(percentage);
           // setMarker1Pos(newPos);
        }  
        else{
            if(newPos <= marker1Pos)
                newPos = marker1Pos+markerSize; 
            let percentage = getRangeValue(newPos);
            updateMaxValue(percentage);
            //setMarker2Pos(newPos);
        }  
    };

    const getRangeValue = (pos:number) => {
        //CALCULATE RANGE VALUE FROM MARKER POSITION
        let percentage = maxRightPos/100;
        percentage = pos / percentage;

        if(fixedValue){
            let newVal = (((maxValue - minValue) / 100) * percentage) + minValue;
            percentage = stepRange!.reduce(function(prev, curr) {
                return (Math.abs(curr - newVal) < Math.abs(prev - newVal) ? curr : prev);
            });
        }
        return percentage;
    };

    const getPositionFromValue = (val:number) => {
        //CALCULATE MARKER POSITION FROM RANGE VALUE
        let percentage = (maxValue-minValue) / 100;
        percentage = (val - minValue) / percentage;
        let pos = (maxRightPos / 100) * percentage; 
        return pos;
    };

    return (
        <div className={styles.container}
            // onDragEnter={(e) => dragEnter(e)}
            ref={rangeBar}
        >
            <div 
                draggable="true"
                ref={firstMarker}
                onDragEnd={(e) => dragEnd(e,1)} 
                className={styles.firstMarker}
                style={{ left: marker1Pos + 'px' }}
            > </div>
            <div 
                draggable="true"
                ref={secondMarker}
                onDragEnd={(e) => dragEnd(e,2)} 
                className={styles.secondMarker}
                style={{ left: marker2Pos + 'px' }}
            > </div>
        </div>
    );
};

export default Range;