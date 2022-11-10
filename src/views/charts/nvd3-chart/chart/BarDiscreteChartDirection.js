import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: 'Cumulative Return',
        values: [
            {
                label: 'South',
                value: 9,
                color: '#3ebfea'
            },
            {
                label: 'West-North',
                value: 9,
                color: '#04a9f5'
            },
            {
                label: 'East-South',
                value: 18,
                color: '#ff8a65'
            },
            {
                label: 'North',
                value: 8,
                color: '#1de9b6'
            },
            {
                label: 'East',
                value: 20,
                color: '#4C5667'
            },
            {
                label: 'West-South',
                value: 12,
                color: '#69CEC6'
            },
            {
                label: 'East-North',
                value: 17,
                color: '#a389d4'
            },
            {
                label: 'West',
                value: 7,
                color: '#FE8A7D'
            }
        ]
    }
];

const BarDiscreteChartDirection = () => {
    return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} width={550} showValues />;
};

export default BarDiscreteChartDirection;
