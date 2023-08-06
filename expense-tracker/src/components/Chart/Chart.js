import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ dataPoints }) {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximumValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {dataPoints.map(({ value, label }) => (
                <ChartBar
                    key={label}
                    value={value}
                    maxValue={totalMaximumValue}
                    label={label}
                />
            ))}
        </div>
    );
}

export default Chart;
