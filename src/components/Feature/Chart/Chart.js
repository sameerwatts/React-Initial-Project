import React from 'react';
import "./Chart.css";
import ChartBar from './ChartBar/ChartBar';

const Chart = (props) => {
    const charts = props.dataPoints.map(dataPoint => <ChartBar
        value={dataPoint.value}
        maxValue={null}
        lable={dataPoint.label}
        key={dataPoint.label} />);

    return (
        <div className="chart">
            {charts}
        </div>
    );
};

export default Chart;