import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Marquee from 'react-css-marquee';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SimpleCardNew from './SampleCardNew';
import './index.css';
import Img from './Images/a1.png';
const TeamBirthDays = ({ data }) => {
  const [state, setState] = useState(['']);

  const ordinal_suffix_of = (i) => {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + 'st';
    }
    if (j == 2 && k != 12) {
      return i + 'nd';
    }
    if (j == 3 && k != 13) {
      return i + 'rd';
    }
    return i + 'th';
  };
  useEffect(() => {
    if (data && data.length > 0) {
      const d = data.sort((a, b) => {
        return a.Day - b.Day;
      });
      let n =
        d &&
        d.map((v, i) => {
          return (
            '                ' +
            v.Name +
            '  ' +
            v.Month.substring(0, 3) +
            '-' +
            ordinal_suffix_of(v.Day)
          );
        });
      setState(n);
    }
  }, [data]);

  return (
    <>
      <SimpleCardNew title={data && data.length > 0 ? 'Birthday - ' + data[0].Month : 'Birthday'}>
        <Marquee
          cssNamespace="hover-stop"
          text={data && data.length > 0 ? state : 'No data available'}
          hoverStop
          spacing={30}
        />
      </SimpleCardNew>
    </>
  );
};
export default TeamBirthDays;

{
  /* <Marquee
            style={{ color: 'red', fontSize: '3em' }}
            text={datatest}
            namespace="horizontal-marquee-disable-default"
            speed={4}
            direction="left"
            orientation="horizontal"
            disableDefaultStyles
          /> */
}
{
  /* <Carousel autoPlay={true}>
            <div>
              <p style={{ color: 'orange', fontWeight: 'normal', height: '20px' }}>Legend 1</p>
            </div>
            <div>
              <p style={{ color: 'orange', fontWeight: 'normal', height: '20px' }}>Legend 2</p>
            </div>
            <div>
              <p style={{ color: 'orange', fontWeight: 'normal', height: '20px' }}>Legend 3</p>
            </div>
          </Carousel> */
}

// {data.map((v, i) => (
//   <div key={v.Name}>
//     {/* <img src={Img} style={{ height: '110px' }} /> */}
//     <p style={{ color: 'orange', fontWeight: 'normal', height: '20px' }}>
//       {/* {v.Name + ' , ' + v.Day + ' -' + v.Month} */}
//       {v.Name + ' ( ' + v.Day + ' ) '}
//     </p>
//   </div>
// ))}

{
  /* <Marquee
          text="Avinash Patel, Muthu Kumar"
          namespace="horizontal-marquee-disable-default"
          speed={4}
          direction="left"
          orientation="horizontal"
          disableDefaultStyles
        /> */
}

{
  /* <div>
            <img src="https://via.placeholder.com/640x480" />
            <p>Legend 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/640x480" />
            <p>Legend 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/640x480" />
            <p>Legend 3</p>
          </div> */
}
