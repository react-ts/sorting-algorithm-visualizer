import { Paragraph } from '@components';
import { withBaseWrapper } from '@hoc';
import { DrawerHeader } from '@hoc/withBaseWrapper/withBaseWrapper.styles';
import { useVisualizerConfigs } from '@hooks';
import { Box, Grid } from '@mui/material';
import { useMemo } from 'react';
import { Main } from './Home.styles';
import { Visualizer } from './components';

const HomePage = () => {
  const [{ 
    array,
    isPlaying,
    delayTime,
    showNumbers,
    selectedAlgorithms
  }] = useVisualizerConfigs();

  const { xs, md, lg } = useMemo(() => ({
    xs: 12,
    md: selectedAlgorithms.length > 1 ? 6 : 12,
    lg: selectedAlgorithms.length > 2 ? 4 : selectedAlgorithms.length > 1 ? 6 : 12,
  }), [selectedAlgorithms]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Main>
        <DrawerHeader />
        <Paragraph
          visible={selectedAlgorithms.length === 0}
          capitalized={false}
          size='lg'
          as={'h1'}
          alignment='center'
        >
          Please select which algorithms you want to visualize by clicking on the left menu.
        </Paragraph>
        <Grid
        className='parent'
          wrap='wrap'
          container
          spacing={3}
        >
          {
            selectedAlgorithms.map(({ name, executor }) => (
              <Grid
                key={name}
                item
                xs={xs}
                md={md}
                lg={lg}
              >
                <Visualizer
                  array={array}
                  algorithm={executor}
                  algorithmName={name}
                  playAnimation={isPlaying}
                  delayTime={delayTime}
                  showNumbers={showNumbers}
                />
              </Grid>
            ))
          }
        </Grid>
      </Main>
    </Box>
  );
}

export const Home = withBaseWrapper(HomePage);
