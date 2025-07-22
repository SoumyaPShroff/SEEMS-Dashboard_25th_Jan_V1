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

const MonthTeamEfficiencyComponent = ({ dataList, isLoading }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataList && dataList.length > 0) {
      let data1 = dataList.map((v, i) => {
        //return [v.name, parseFloat(v.TimeHrs), RandomColorPicker()];
      //  return [v.name.slice(0, 6), parseFloat(v.TimeHrs),parseFloat(v.TimeHrs), RandomColorPicker()];
        return [v.name.slice(0, 6), parseFloat(v.Efficiency),parseFloat(v.Efficiency), RandomColorPicker()];
      });
     // data1.unshift(['Element', 'Month Team Efficiency', { role: 'style' }]);
     data1.unshift(['Element', 'Month Team Efficiency', { role: 'annotation' },{ role: 'Style' }]);
    
      setData(data1);
    }
  }, [dataList]);

  return (
    <>
      <SimpleCardNew title="Team Efficiency - Current Month">
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
export default MonthTeamEfficiencyComponent;
