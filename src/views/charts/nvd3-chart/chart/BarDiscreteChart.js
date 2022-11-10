import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: 'Cumulative Return',
        values: [
            {
                label: '< 2',
                value: 15,
                color: '#3ebfea'
            },
            {
                label: '2 - 2.5',
                value: 2,
                color: '#04a9f5'
            },
            {
                label: '2.5 - 3',
                value: 25,
                color: '#ff8a65'
            },
            {
                label: '3 - 3.5',
                value: 19,
                color: '#1de9b6'
            },
            {
                label: '3.5 - 4',
                value: 12,
                color: '#4C5667'
            },
            {
                label: '4 - 4.5',
                value: 4,
                color: '#69CEC6'
            },
            {
                label: '4.5 - 5',
                value: 3,
                color: '#a389d4'
            },
            {
                label: '> 5',
                value: 2,
                color: '#FE8A7D'
            }
        ]
    }
];

const BarDiscreteChart = () => {
    return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} width={400} showValues />;
};

export default BarDiscreteChart;
