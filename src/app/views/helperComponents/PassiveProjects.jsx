import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import SimpleCardNew from './SampleCardNew';

const StyledCard = styled(Card)(({ theme, bgColor }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px !important',
  background: bgColor,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { fontSize: '30px', color: '#fff' },
}));
// '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '12px',
  fontWeight: '500',
  color: '#fff',
}));

const PassiveProjectComponent = ({
  JobsBackupPendingData,
  JobsBackupToApproveData,
  CountOfPreclosedjobsData,
  NPIJobsData,
  ECOJobsData,
}) => {
  const cardList = [
    { name: 'Backup Pending', amount: JobsBackupPendingData, icon: 'replay', bgColor: '#63c7ff' },
  
    {
      name: 'Pre closed Jobs',
      amount: CountOfPreclosedjobsData,
      icon: 'border_all',
      bgColor: '#a66dd4',
    },
    { name: 'NPI Projects', amount: NPIJobsData, icon: 'assignment', bgColor: '#6dd4b1' },
    { name: 'ECO Pending', amount: ECOJobsData, icon: 'dvr', bgColor: '#ffb64d' },
    {
      name: 'BackupApprvPend',
      amount: JobsBackupToApproveData,
      icon: 'check',
      bgColor: '#3b76ef',
    },
  ];

  return (
    <SimpleCardNew title="Passive Projects">
      <Grid container spacing={1} sx={{ mb: '24px' }}>
        {cardList.map((item, index) => (
          <Grid item xs={8} md={4} lg={2} sm={4} key={index}>
            <StyledCard elevation={6} bgColor={item.bgColor}>
              <ContentBox>
                {/* <Icon className="icon">{item.icon}</Icon> */}
                <Box ml="12px">
                  <Heading>
                    <b>{item.name}</b>
                  </Heading>
                  <div>
                    <b>{item.amount}</b>
                  </div>
                </Box>
              </ContentBox>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </SimpleCardNew>
  );
};

export default PassiveProjectComponent;
