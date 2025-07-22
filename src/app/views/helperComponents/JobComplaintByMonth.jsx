import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import SimpleCardNew from './SampleCardNew';
import { RandomColorPicker } from '../helperComponents/helperFunctions';
import LinearIndeterminate from '../helperComponents/ProgressBar';
import NoDataAvailable from '../helperComponents/NoDataAvailable';

export const options = {
  title: '',
  is3D: true,
  chartArea: { left: 0, top: 0, bottom: 30, width: '100%', height: '100%' },
  legend: { position: 'right', alignment: 'end' },
};

const ComplaintByMonthComponent = ({ dataList, isMgrJCMLoading }) => {
  const [data, setData] = useState([]);
  console.log('isMgrJCMLoading', isMgrJCMLoading);
  useEffect(() => {
    if (dataList && dataList.length > 0) {
      let data1 = dataList.map((v, i) => {
        // return [v.Month, v.CountOfComp, RandomColorPicker()];
        return [v.Month, v.CountOfComp, v.CountOfComp,RandomColorPicker()];
      });
      // data1.unshift(['Element', 'Job Complaints', { role: 'style' }]);
      data1.unshift(['Element', 'Job Complaints', { role: 'annotation' },{ role: 'Style' }]);
      setData(data1);
      console.log('data1', data1);
    }
  }, [dataList]);
  return (
    <>
      <SimpleCardNew title="Job Complaint - Y to D">
        {isMgrJCMLoading ? (
          <LinearIndeterminate />
        ) : (
          <>
            {!isMgrJCMLoading && data.length === 0 ? (
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
export default ComplaintByMonthComponent;
