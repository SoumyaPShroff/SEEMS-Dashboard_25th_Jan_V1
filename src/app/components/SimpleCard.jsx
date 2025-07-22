import { Card } from '@mui/material';
import { Box, styled } from '@mui/system';

const CardRoot = styled(Card)(() => ({
  height: '100%',
  padding: '20px 24px',
  background: '#cccccc',
}));

const CardTitle = styled('div')(({ subtitle }) => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  marginBottom: !subtitle && '16px',
  color: '#0033cc',
}));

const SimpleCard = ({ children, title, subtitle, icon }) => {
  return (
    <CardRoot elevation={6}>
      <CardTitle subtitle={subtitle}>{title}</CardTitle>
      {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
