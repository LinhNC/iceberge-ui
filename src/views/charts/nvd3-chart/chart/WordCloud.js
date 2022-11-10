import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
    {
      text: 'nhà mới',
      value: 64,
    },
    {
      text: 'sang trọng',
      value: 23,
    },
    {
      text: 'view đẹp',
      value: 37,
    },
    {
      text: 'tiện nghi',
      value: 28,
    },
    {
        text: 'chính chủ',
        value: 90,
    },
    {
        text: 'thuận tiện',
        value: 37,
    },
    {
        text: 'nội thất',
        value: 60,
    },
    {
        text: 'sổ đỏ',
        value: 70,
    },
    {
        text: 'cao cấp',
        value: 17,
    },
    {
        text: 'giá rẽ',
        value: 50,
    },
    {
        text: 'văn minh',
        value: 25,
    },
    {
        text: 'trẻ em',
        value: 37,
    },
  ]

const WordCloud = () => {
    return <ReactWordcloud words={words} />
};

export default WordCloud;
