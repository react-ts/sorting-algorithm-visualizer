import { Paragraph } from '@components';
import { withBaseWrapper } from '@hoc';
import { DrawerHeader } from '@hoc/withBaseWrapper/withBaseWrapper.styles';
import { Box, Grid } from '@mui/material';
import { Main } from './Home.styles';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Main>
        <DrawerHeader />
        <Paragraph
          capitalized={false}
          size='lg'
          as={'h1'}
          alignment='center'
        >
          Please select which algorithms you want to visualize by clicking on the left menu.
        </Paragraph>
        <Grid
          container
          spacing={3}
        >
        </Grid>
      </Main>
    </Box>
  );
}

export const Home = withBaseWrapper(HomePage);
