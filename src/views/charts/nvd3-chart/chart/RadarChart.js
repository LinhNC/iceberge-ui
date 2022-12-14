import React from 'react';
import { Radar } from "react-chartjs-2";

const RadarData = {
    labels: ["Restaurant", "Market", "School", "Hospital", "Office building"],
    datasets: [
        {
            label: "Facilities",
            backgroundColor: "rgba(34, 202, 236, .2)",
            borderColor: "rgba(34, 202, 236, 1)",
            pointBackgroundColor: "rgba(34, 202, 236, 1)",
            poingBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(34, 202, 236, 1)",
            data: [13, 10, 12, 6, 5]
        }
    ]
};
const RadarOptions = {
    scale: {
        ticks: {
            min: 0,
            max: 16,
            stepSize: 2,
            showLabelBackdrop: false,
            backdropColor: "rgba(203, 197, 11, 1)"
        },
        angleLines: {
            color: "#CCCCCC",
            lineWidth: 1
        },
        gridLines: {
            color: "#CCCCCC",
            circular: true
        }
    }
};

const RadarChart = () => {
    return (
        <Radar data={RadarData} options={RadarOptions} />
    );
};

export default RadarChart;
