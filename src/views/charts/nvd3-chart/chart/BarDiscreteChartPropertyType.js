import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: 'Cumulative Return',
        values: [
            {
                label: 'Căn hộ chung cư',
                value: 45,
                color: '#3ebfea'
            },
            {
                label: 'Nhà ở xã hội',
                value: 23,
                color: '#04a9f5'
            },
            {
                label: 'Shophouse',
                value: 12,
                color: '#ff8a65'
            },
            {
                label: 'Khu đô thị mới',
                value: 9,
                color: '#1de9b6'
            },
            {
                label: 'Dự án khác',
                value: 6,
                color: '#4C5667'
            },
            {
                label: 'Nhà mặt phố',
                value: 5,
                color: '#69CEC6'
            },
        ]
    }
];

const BarDiscreteChartPropertyType = () => {
    return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />;
};

export default BarDiscreteChartPropertyType;
