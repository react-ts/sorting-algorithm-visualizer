import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)(() => ({
  '&.MuiPaper-elevation': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '25px',
    padding: '25px',
    '> div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
}));

