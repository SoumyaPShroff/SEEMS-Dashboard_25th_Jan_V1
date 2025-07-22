import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import SimpleCardNew from '../helperComponents/SampleCardNew';
import { RandomColorPicker } from '../helperComponents/helperFunctions';
import LinearIndeterminate from '../helperComponents/ProgressBar';
import NoDataAvailable from '../helperComponents/NoDataAvailable';

export const options = {
  title: '',
  is3D: true,
  chartArea: { left: 0, top: 0, bottom: 30, width: '100%', height: '100%' },
  colors: ['green'],
  is3D: true,
  tooltip: {
    text: 'value',
  },
};

const UserCriticalDefects = ({ dataList, isLoading }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataList && dataList.length > 0) {
      let data1 = dataList.map((v, i) => {
        // return [v.Month.slice(0, 3), v.NoCriticaldefects, RandomColorPicker()];
        return [v.Month.slice(0, 3), v.NoCriticaldefects,v.NoCriticaldefects, RandomColorPicker()];
   
      });
      // data1.unshift(['Element', 'Quality report - Y to D', { role: 'style' }]);
      data1.unshift(['Element', 'Critical Defects - Y to D',  { role: 'annotation' },{ role: 'Style' }]);
    
      setData(data1);
      setData(data1);
    }
  }, [dataList]);
  return (
    <>
      <SimpleCardNew title="Critical Defects - Y to D">
        {isLoading ? (
          <LinearIndeterminate />
        ) : (
          <>
            {!isLoading && data.length === 0 ? (
              <NoDataAvailable />
            ) : (
              <Chart
                chartType="ColumnChart"
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
export default UserCriticalDefects;
