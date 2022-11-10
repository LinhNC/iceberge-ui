import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: 'Cumulative Return',
        values: [
            {
                label: '1',
                value: 3,
                color: '#3ebfea'
            },
            {
                label: '2',
                value: 55,
                color: '#04a9f5'
            },
            {
                label: '3',
                value: 13,
                color: '#ff8a65'
            },
            {
                label: '4',
                value: 2,
                color: '#1de9b6'
            }
        ]
    }
];

const BarDiscreteChartBedroom = () => {
    return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} width={300} showValues />;
};

export default BarDiscreteChartBedroom;
