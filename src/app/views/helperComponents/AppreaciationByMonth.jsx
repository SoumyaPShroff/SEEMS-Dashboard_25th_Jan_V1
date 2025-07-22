import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import SimpleCardNew from '../helperComponents/SampleCardNew';
import { RandomColorPicker } from '../helperComponents/helperFunctions';
import LinearIndeterminate from '../helperComponents/ProgressBar';
import NoDataAvailable from '../helperComponents/NoDataAvailable';
// import 'chartjs-plugin-datalabels';

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

const AppriciationByMonthComponent = ({ dataList, isLoading }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataList && dataList.length > 0) {
      let data1 = dataList.map((v, i) => {
        // return [v.Month.slice(0, 3), v.ApprCount, RandomColorPicker()];
        return [v.Month.slice(0, 3), v.ApprCount, v.ApprCount,RandomColorPicker()];
      });
      //  data1.unshift(['Element', 'Job Appreciation',{ role: 'Style' }]);
      data1.unshift(['Element', 'Job Appreciation', { role: 'annotation' },{ role: 'Style' }]);
      setData(data1);
    }
  }, [dataList]);
  //   const options = {
  //   plugins: {
  //     datalabels: {
  //       display: true,
  //       color: "Orange",
  //       align: "top",
  //       anchor: "end",
  //       offset: 30,
  //     }
  //   },
  //   legend: {
  //     display: false
  //   }
  // };
  return (
    <>
      <SimpleCardNew title="Job Appreciation - Y to D">
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
export default AppriciationByMonthComponent;
