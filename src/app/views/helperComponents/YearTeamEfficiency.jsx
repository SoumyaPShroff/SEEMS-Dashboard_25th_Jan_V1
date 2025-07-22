import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import SimpleCardNew from './SampleCardNew';
import { RandomColorPicker } from './helperFunctions';
import LinearIndeterminate from './ProgressBar';
import NoDataAvailable from './NoDataAvailable';

export const options = {
  title: '',
  is3D: true,
  chartArea: { left: 0, top: 0, bottom: 30, width: '100%', height: '100%' },
  // bar: { groupWidth: '40%' },
  colors: ['green'],
  is3D: true,
  tooltip: {
    text: 'value',
  },
};

const YearEfficiencyComponent = ({ dataList, isLoading }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataList && dataList.length > 0) {
      let data1 = dataList.map((v, i) => {
       // return [v.month.slice(0, 3), parseFloat(v.TimeHrs), RandomColorPicker()];
        return [v.month.slice(0, 3), parseFloat(v.TimeHrs), parseFloat(v.TimeHrs), RandomColorPicker()];
      });
    //  data1.unshift(['Element', 'Year Team Efficiency', { role: 'style' }]);
    data1.unshift(['Element', 'Year Team Efficiency', { role: 'annotation' },{ role: 'Style' }]);
   
      setData(data1);
    }
  }, [dataList]);

  return (
    <>
      <SimpleCardNew title="Team Efficiency - Y to D">
        {isLoading ? (
          <LinearIndeterminate />
        ) : (
          <>
            {!isLoading && data.length === 0 ? (
              <NoDataAvailable />
            ) : (
              <Chart
                // chartType="ColumnChart"
                chartType="LineChart"
                data={data}
                options={options}
                width={'100%'}
                height={'150px'}
              />
            )}
          </>
        )}
      </SimpleCardNew>
    </>
  );
};
export default YearEfficiencyComponent;
