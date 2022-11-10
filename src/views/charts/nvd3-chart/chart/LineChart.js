import React from 'react';
import NVD3Chart from 'react-nvd3';

function getDatum() {
    var sin = [],
        sin2 = [],
        sin3 = [],
        sin4 = [],
        sin5 = [],
        sin6 = [],
        sin7 = [],
        cos = [];
    for (var i = 0; i < 100; i++) {
        sin.push({
            x: i,
            y: Math.sin(i / 10)
        });
        sin2.push({
            x: i,
            y: Math.sin(i / 10) * 0.25 + 0.5
        });
        sin3.push({
            x: i,
            y: Math.sin(i / 10) * 0.25 + 0.2
        });
        sin4.push({
            x: i,
            y: Math.sin(i / 10) * 0.2 + 0.5
        });
        sin5.push({
            x: i,
            y: Math.sin(i / 10) * 0.1 + 0.5
        });
        sin6.push({
            x: i,
            y: Math.sin(i / 10) * 0.25 + 0.1
        });
        sin7.push({
            x: i,
            y: Math.sin(i / 10) * 0.1 + 0.1
        });
        cos.push({
            x: i,
            y: 0.5 * Math.cos(i / 10)
        });
    }
    return [
        {
            values: sin,
            key: '2022-10-02',
            color: '#A389D4'
        },
        {
            values: cos,
            key: '2022-10-09',
            color: '#04a9f5'
        },
        {
            values: sin2,
            key: '2022-10-19',
            color: '#1de9b6',
            area: true
        },
        {
            values: sin3,
            key: '2022-11-09',
            color: '#f4c22b',
            area: true
        },
        {
            values: sin4,
            key: '2022-10-25',
            color: '#ff8a65',
            area: true
        },
        {
            values: sin5,
            key: '2022-10-28',
            color: '#ff1a65',
            area: true
        },
        {
            values: sin6,
            key: 'thuận tiện',
            color: '#231665',
            area: true
        },
        {
            values: sin7,
            key: '2022-10-29',
            color: '#231665',
            area: true
        }
    ];
}

const LineChart = () => {
    const data = getDatum();
    return (
        <React.Fragment>
            {React.createElement(NVD3Chart, {
                xAxis: {
                    tickFormat: function (d) {
                        return d;
                    },
                    axisLabel: ''
                },
                yAxis: {
                    axisLabel: '',
                    tickFormat: function (d) {
                        return parseFloat(d).toFixed(2);
                    }
                },
                type: 'lineChart',
                datum: data,
                x: 'x',
                y: 'y',
                height: 300,
                renderEnd: function () {
                    console.log('renderEnd');
                }
            })}
        </React.Fragment>
    );
};

export default LineChart;
