import { Card } from '@mui/material';
import { Box, styled } from '@mui/system';

const CardRoot = styled(Card)(() => ({
  // height: '100%',
  padding: '2px 10px 5px 10px',
  background: '#ffffff',
  borderRadius: '5px',
  marginBottom: '10px',
  boxShadow:
    '0px 3px 5px -1px rgb(0 0 0 / 5%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%) !important',
}));
const CardTitle = styled('div')(({ subtitle }) => ({
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  marginBottom: '3px',
  color: '#000080',
  fontFamily: 'inherit',
}));

const SimpleCardNew = ({ children, title, subtitle, icon }) => {
  return (
    <CardRoot elevation={6}>
      <CardTitle subtitle={subtitle}>
        <span>{title}</span>
      </CardTitle>
      {/* {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>} */}
      {children}
    </CardRoot>
  );
};

export default SimpleCardNew;
