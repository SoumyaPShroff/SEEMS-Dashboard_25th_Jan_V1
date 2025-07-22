import { Box, styled } from '@mui/material';
import { MatxLogo } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { Span } from './Typography';

const BrandRoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 18px 20px 29px',
  borderBottom:'2px solid #fff',
  marginBottom:'20px'
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginLeft: '.5rem',
  display: mode === 'compact' ? 'none' : 'block',
}));

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center" >
        {/* <MatxLogo /> */}
        <StyledSpan mode={mode} className="sidenavHoverShow">
        <div
              style={{
                fontSize: '25px',
                letterSpacing: 'normal',
                textAlign: 'center',
              }}>
              <span style={{ color: 'red', fontWeight: 'bold' }}>SIENNA </span>
              <span style={{ color: '#b3c6ff', fontWeight: 'bold' }}>
                {' '}
                ECAD
              </span>
            </div>
            <div style={{ fontSize: '12px', textAlign: 'center' }}>
              <span>Design . Enhance . Verify</span>
            </div>
        </StyledSpan>
      </Box>

      {/* <Box className="sidenavHoverShow" sx={{ display: mode === 'compact' ? 'none' : 'block' }}>
        {children || null}
      </Box> */}
    </BrandRoot>
  );
};

export default Brand;
