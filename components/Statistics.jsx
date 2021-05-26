 import React from "react";
 import {Chart} from "react-google-charts";

export default function Statistics(){

  const ourdata = [
    ['Ward', 'Active Cases'],
    ['1', 11],
    ['2', 2],
    ['3', 2],
    ['4', 2],
    ['5', 7],
    ['6', 1],
    ['7', 5],
    ['8', 7],
    ['9', 7],
    ['10', 8],
    ['11', 3],
    ['12', 7],
    ['13', 7],
    ['14', 7],
    ['15', 1],
    ['16', 7],
    ['17', 4],
  ];

    return (
      <>
      <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={ourdata}
      options={{
        title: 'Active Cases',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={ourdata}
      options={{
        title: 'Active Cases',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    </>
    
  );
}
