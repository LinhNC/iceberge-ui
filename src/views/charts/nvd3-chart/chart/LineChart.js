import React from 'react';
import NVD3Chart from 'react-nvd3';
import { timeFormat } from 'd3-time-format';

function getDatum() {
    var cos = [];

    for (var i = 0; i < 12; i++) {
        cos.push({
          x: new Date().setMonth(i),
          y: 0.5 * Math.cos(i / 10)
        })
      }

    cos[0].y = 37.8;
    cos[1].y = 35.9;
    cos[2].y = 35.4;
    cos[3].y = 31.7;
    cos[4].y = 27.6;
    cos[5].y = 26.4;
    cos[6].y = 25.2;
    cos[7].y = 26.9;
    cos[8].y = 27.7;
    cos[9].y = 30.4;
    cos[10].y = 32.8;
    cos[11].y = 33.2;

    return [
        {
            values: cos,
            key: 'home-owner',
            color: '#04a9f5'
        },
    ];
}

const LineChart = () => {
    const data = getDatum();
    return (
        <React.Fragment>
            {React.createElement(NVD3Chart, {
                xAxis: {
                    ticks: 12,
                    tickFormat: function (d) {
                        return timeFormat('%b')(new Date(d));
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
