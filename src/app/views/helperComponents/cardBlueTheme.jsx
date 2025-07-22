import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
const StyledCard = styled(Card)(({ theme, bgColor }) => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '2px !important',
  background: bgColor,
  borderRadius: '2px',
  textAlign: 'center',
  boxShadow:
    '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%) !important',
}));

// const bg12 = 'linear-gradient(to right, #0099ff 0%, #99ccff 96%)'; //'#3b76ef'; //
// const bg4 = 'linear-gradient(to right, #ff6600 0%, #ff9933 96%)';
// const bg8 = 'linear-gradient(230deg, #759bff, #843cf6)';
// const bg1 = 'radial-gradient(circle 248px at center,#16d9e3 0%,#30c7ec 47%,#46aef7 100%)';
// const bg2 = 'linear-gradient(to bottom,#00b09b,#96c93d)!important';
// const bg3 = '#a66dd4'; //'linear-gradient(to top,#a18cd1 0%,#fbc2eb 100%)!important';
// const bg5 = 'linear-gradient(to right,#0ac282,#0df3a3)';
// const bg6 = 'linear-gradient(to right,#fe5d70,#fe909d)';
// const bg7 = 'linear-gradient(to right,#01a9ac,#01dbdf)';
// const bg9 = 'linear-gradient(to right, #0066cc 0%, #33ccff 96%)';

const bg12 = 'linear-gradient(to right, #50c1de 0%, #50c1de 96%)'; //'#3b76ef'; //
const bg4 = 'linear-gradient(to right, #dbc044 0%, #dbc044 96%)';
const bg8 = 'linear-gradient(230deg, #6498cc, #6498cc)';
const bg1 = 'radial-gradient(circle 248px at center,#90f091 0%,#90f091 47%,#90f091 100%)';
const bg2 = 'linear-gradient(to bottom,#faa5ad,#faa5ad)!important';
const bg3 = '#909af0'; //'linear-gradient(to top,#a18cd1 0%,#fbc2eb 100%)!important';
const bg5 = 'linear-gradient(to right,#0ac282,#0df3a3)';
const bg6 = 'linear-gradient(to right,#fe5d70,#fe909d)';
const bg7 = 'linear-gradient(to right,#01a9ac,#01dbdf)';
const bg9 = 'linear-gradient(to right, #66b1e3 0%, #66b1e3 96%)';

const cardBlueTheme = ({
  startDate,
  endDate,
  poStatus,
  poHrs,
  assignHrs,
  penddingHrs,
  daysDelay,
  layout,
  // SI,
  // PI,
  Depdntproc,
  ECO,
  flag,
  issuesPendding,
  currentStatus,
  processMissed,
  NonbilHrs,
}) => {
  const dateFormate = (data) => {
    const d = data.split('T')[0];
    const t = d.split('-');
    return t[0] + '-' + t[1] + '-' + t[2];
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <table style={{ marginRight: '3px' }}>
          <StyledCard bgColor={bg12}>
            <tr className="cardHeaderNew">
              {/* <td className="td-class-br-r">
                St <br />
                Date
              </td> */}
              <td style={{ borderBottom: '1px solid black' }}>
                End Date <br />
              </td>
            </tr>
            <tr className="cardContent">
              {/* <td className="td-br-r">{startDate ? dateFormate(startDate) : '-'}</td> */}
              <td>{endDate ? dateFormate(endDate) : '-'}</td>
            </tr>
          </StyledCard>
        </table>
        <table style={{ marginRight: '3px' }}>
          <StyledCard bgColor={bg4}>
            <tr className="cardHeaderNew">
              <td className="td-class-br-r">PO Status</td>
              <td className="td-class-br-r">PO Hrs</td>
              <td className="td-class-br-r">Asignd Hrs</td>
              <td className="td-br-b">Pending Hrs</td>
            </tr>
            <tr className="cardContent">
              <td className="td-br-r">{poStatus ? poStatus : '-'}</td>
              <td className="td-br-r">{poHrs ? poHrs : '-'} </td>
              <td className="td-br-r">{assignHrs ? assignHrs : '-'} </td>
              <td>{penddingHrs ? penddingHrs : '-'} </td>
            </tr>
          </StyledCard>
        </table>
        <table style={{ marginRight: '3px' }}>
          <StyledCard bgColor={bg8}>
            <tr className="cardHeaderNew">
              <td className="td-class-br-r">Non-Billable</td>
              <td className="td-br-b">ECO</td>
            </tr>
            <tr className="cardContent">
              <td className="td-br-r">{NonbilHrs ? NonbilHrs : '-'}</td>
              <td>{ECO ? ECO : '-'}</td>
            </tr>
          </StyledCard>
        </table>
        <table style={{ marginRight: '3px' }}>
          <StyledCard bgColor={bg2}>
            <tr className="cardHeaderNew">
              <td className="td-class-br-r">Issue Pending</td>
              <td className="td-br-b">Days Delay</td>
              {/* <td className="td-br-b">Missed Process </td> */}
            </tr>
            <tr className="cardContent">
              <td className="td-br-r">{issuesPendding ? issuesPendding : '-'}</td>
              <td>{daysDelay ? daysDelay : '-'}</td>
              {/* <td>{processMissed ? processMissed : '-'}</td> */}
            </tr>
          </StyledCard>
        </table>
        <table style={{ marginRight: '3px' }}>
          <StyledCard bgColor={bg1}>
            {/* , fontweight: 2000 */}
            {/* <tr style={{ fontSize: '10px'}}>
              <td></td>
              <td>Dependent</td>
              <td>processs</td>    
            </tr> */}
            {/* <tr className="cardHeaderNew">
              <td className="td-class-br-r">
                SI <br />
              </td>
              <td className="td-class-br-r">
                PI
                <br />
              </td>
              <td className="td-br-b">
                NPI
                <br />-
              </td>
            </tr>
            <tr className="cardContent">
              <td className="td-br-r">{SI ? SI : '-'}</td>
              <td className="td-br-r">{PI ? PI : '-'}</td>
              <td>NO</td>
            </tr> */}
             <tr className="cardHeaderNew">
              <td className="td-br-b">Dependent Process</td>
            </tr>
            <tr className="cardContent">
              <td>{Depdntproc ? Depdntproc : '-'}</td>
            </tr>
          </StyledCard>
        </table>
        <table style={{ marginRight: '3px' }}>
          <StyledCard bgColor={bg9}>
            <tr className="cardHeaderNew">
              <td className="td-br-b">Flag Raised</td>
            </tr>
            <tr className="cardContent">
              <td>{flag ? flag : '-'}</td>
            </tr>
          </StyledCard>
        </table>
        <table style={{ marginRight: '3px' }}>
          <StyledCard bgColor={bg3}>
            <tr className="cardHeaderNew">
              <td className="td-br-b">Current status</td>
            </tr>
            <tr className="cardContent">
              <td>{currentStatus ? currentStatus : '-'}</td>
            </tr>
          </StyledCard>
        </table>
      </div>
      {/* <div className="cardHeaderNew">Start Date | End Date</div>
        <div className="cardContent">
          {startDate && startDate.split('T')[0]} | {endDate && endDate.split('T')[0]}{' '}
        </div> */}
      {/* </StyledCard> */}
      {/* <Grid container spacing={1} sx={{ mb: '24px' }}> */}
      {/* <Grid item lg={2} md={2} sm={2} xs={12}> */}

      {/* </Grid> */}
      {/* <Grid item lg={2} md={2} sm={2} xs={12}>
          <StyledCard bgColor={bg4}>
            <div className="cardHeaderNew">PO Status | PO Hrs</div>
            <div className="cardContent">
              {poStatus} | {poHrs ? poHrs + ' Hrs' : '--'}
            </div>
          </StyledCard>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <StyledCard bgColor={bg8}>
            <div className="cardHeaderNew">Assigned Hrs | Pendding Hrs</div>
            <div className="cardContent">
              {assignHrs + ' Hrs'} | {penddingHrs ? penddingHrs + ' Hrs' : '--'}
            </div>
          </StyledCard>
        </Grid>

        <Grid item lg={2} md={2} sm={2} xs={12}>
          <StyledCard bgColor={bg2}>
            <div className="cardHeaderNew">No. of days delay</div>
            <div className="cardContent">{daysDelay ? daysDelay + ' Days' : '--'}</div>
          </StyledCard>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <StyledCard bgColor={bg1}>
            <div className="cardHeaderNew">
              Dependent processs <b /> (Layout | SI | PI )
            </div>
            <div className="cardContent">
              {layout ? layout : '--' + ' '} | {SI ? SI : '--' + ' '} | {PI ? PI : '--'}
            </div>
          </StyledCard>
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={12}>
          <StyledCard bgColor={bg9}>
            <div className="cardHeaderNew">ECO</div>
            <div className="cardContent">{ECO ? ECO : '--'} </div>
          </StyledCard>
        </Grid>
        <Grid item lg={2} md={2} sm={2} xs={12}>
          <StyledCard bgColor={bg3}>
            <div className="cardHeaderNew">Flag Raised</div>
            <div className="cardContent">{flag ? flag : '--'}</div>
          </StyledCard>
        </Grid>
        <Grid item lg={2} md={2} sm={2} xs={12}>
          <StyledCard bgColor={bg5}>
            <div className="cardHeaderNew">Issues Pending</div>
            <div className="cardContent">{issuesPendding ? issuesPendding : '--'}</div>
          </StyledCard>
        </Grid>

        <Grid item lg={2} md={2} sm={2} xs={12}>
          <StyledCard bgColor={bg7}>
            <div className="cardHeaderNew">Process Missed</div>
            <div className="cardContent">{processMissed ? processMissed : '--'}</div>
          </StyledCard>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <StyledCard bgColor={bg6}>
            <div className="cardHeaderNew">current status</div>
            <div className="cardContent">{currentStatus ? currentStatus : '--'}</div>
          </StyledCard>
        </Grid> */}
      {/* <Grid container spacing={3}>
              <Grid item lg={3} md={3} sm={3} xs={12}>
                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>PO Status</p>
                <p style={{ color: '#001a66', fontWeight: 'bold', fontSize: '14px' }}>
                  {data && data.POStatus}
                </p>
              </Grid>
            </Grid> */}

      {/* <Grid item lg={4} md={4} sm={4} xs={12}>
          <StyledCard elevation={6} bgColor={bg4}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Non Billed</p>
                <p style={{ color: '#001a66', fontWeight: 'bold', fontSize: '14px' }}>50 Hrs</p>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12} style={{ borderLeft: '3px solid #b32400' }}>
                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>ECO</p>
                <p style={{ color: '#001a66', fontWeight: 'bold', fontSize: '14px' }}>50 Hrs</p>
              </Grid>
            </Grid>
          </StyledCard>
        </Grid> */}

      {/* <Grid item lg={8} md={8} sm={12} xs={12}>
          <StyledCard elevation={6} bgColor={bg8}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>
                  {' '}
                  Issues Pendding
                </p>
                <p style={{ color: '#001a66', fontWeight: 'bold', fontSize: '14px' }}>452</p>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12} style={{ borderLeft: '3px solid #002080' }}>
                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Days Delay</p>
                <p style={{ color: '#001a66', fontWeight: 'bold', fontSize: '14px' }}>
                  {data && data.DaysDelay + ' Days'}{' '}
                </p>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12} style={{ borderLeft: '3px solid #002080' }}>
                <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>
                  Process Missed
                </p>
                <p style={{ color: '#001a66', fontWeight: 'bold', fontSize: '14px' }}>TO DO....</p>
              </Grid>
            </Grid>
          </StyledCard>
        </Grid> */}
      {/* </Grid> */}
    </>
  );
};

export default cardBlueTheme;
