import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    { key: 'Ha Noi', y: 69, color: '#ff8a65' },
    { key: 'Ho Chi Minh', y: 90, color: '#f4c22b' },
    { key: 'Da Nang', y: 32, color: '#04a9f5' },
    { key: 'Dong Nai', y: 36, color: '#3ebfea' },
    { key: 'Binh Duong', y: 23, color: '#4F5467' },
    { key: 'Others', y: 44, color: '#1de9b6' },
];

const PieLocationChart = () => {
    return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" />;
};

export default PieLocationChart;
