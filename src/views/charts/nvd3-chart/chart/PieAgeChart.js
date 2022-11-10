import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    { key: '18 - 24', y: 29, color: '#ff8a65' },
    { key: '25 - 34', y: 0, color: '#f4c22b' },
    { key: '35 - 44', y: 32, color: '#04a9f5' },
    { key: '45 - 54', y: 196, color: '#3ebfea' },
    { key: '55 - 64', y: 2, color: '#4F5467' },
    { key: '65+', y: 98, color: '#1de9b6' },
];

const PieAgeChart = () => {
    return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" />;
};

export default PieAgeChart;
