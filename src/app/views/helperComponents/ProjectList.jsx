import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import SimpleCardNew from './SampleCardNew';
import CardsBlueTheme from './cardBlueTheme';

const ProjectListComponent = ({ data }) => {
  return (
    <>
      {data.map((val, i) => (
        <SimpleCardNew title={'Project Name: ' + val.jobnumber}>
          <CardsBlueTheme
            startDate={val.startdate}
            endDate={val.enddate}
            poStatus={val.POStatus}
            poHrs={val.POHours}
            assignHrs={val.AssignedHrs}
            penddingHrs={val.PendingHrs}
            daysDelay={val.DaysDelay}
            layout={val.Layout}
            // SI={val.SI}
            // PI={val.PI}
            Depdntproc={val.Depdntproc}
            ECO={val.ECO}
            flag={val.FlagRaisedOn}
            issuesPendding={val.IssuesPending}
            currentStatus={val.CurrStatus}
            processMissed={val.ProcessMissed}
            NonbilHrs={val.NonbilHrs}
          />
        </SimpleCardNew>
      ))}
    </>
  );
};
export default ProjectListComponent;
