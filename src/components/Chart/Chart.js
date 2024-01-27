import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css';

function Chart (props){
    // finding out maxValue
    let dataPointValueArr = props.dataPoints.map((dataPoint)=>dataPoint.value);
    let maximumValue = Math.max(...dataPointValueArr)

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint)=> (
            <ChartBar 
            key={dataPoint.label} 
            value = {dataPoint.value} 
            maxValue={maximumValue} 
            label={dataPoint.label}
            />))}
        </div>
    )
}

export default Chart;
