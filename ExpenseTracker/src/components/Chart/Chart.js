import React from 'react';
import "./Chart.css";
import ChartBar from './ChartBar/ChartBar';

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxvalue = Math.max(...dataPointValue)
    const charts = props.dataPoints.map(dataPoint => <ChartBar
        value={dataPoint.value}
        maxValue={totalMaxvalue}
        label={dataPoint.label}
        key={dataPoint.label} />);
 
    return (
        <div className="chart">
            {charts}
        </div>
    );
};

export default Chart;