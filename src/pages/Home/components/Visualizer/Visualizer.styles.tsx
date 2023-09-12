import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)(() => ({
  '&.MuiPaper-elevation': {
    padding: '25px',
    '> div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}));

