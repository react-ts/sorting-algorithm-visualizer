import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { bubbleSort, insertionSort, mergeSort, quickSort } from '../../algorithms';
import { Icon, Paragraph, useVisualizerConfigs } from '../../components';
import { StepperMenu } from '../Stepper/StepperMenu';
import { Visualizer } from '../Visualizer';
import { AppBar, DrawerHeader, Main } from './Home.styles';
const drawerWidth = 240;

export const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [{ 
    array,
    isPlaying,
    delayTime, 
    showNumbers
  }] = useVisualizerConfigs();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Icon icon='menu' iconColor={{ color: 'white' }} onClick={() => setOpen(!open)} />
          <Paragraph capitalized={true} size='md' textColor={{ color: 'white' }} >Algorithm Visualizer</Paragraph>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {theme.direction === 'ltr' ? <Icon icon='chevron_left' onClick={() => setOpen(!open)} /> : <Icon icon='chevron_right' />}
        </DrawerHeader>
        <Divider />
        <StepperMenu />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* The code below will be autogenerated later */}
        <Grid 
          wrap='wrap'
          container
          spacing={3}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Visualizer array={array} algorithm={mergeSort} algorithmName="mergeSort" playAnimation={isPlaying} delayTime={delayTime} showNumbers={showNumbers}/>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Visualizer array={array} algorithm={insertionSort} algorithmName="insertionSort" playAnimation={isPlaying} delayTime={delayTime} showNumbers={showNumbers} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Visualizer array={array} algorithm={bubbleSort} algorithmName="bubbleSort" playAnimation={isPlaying} delayTime={delayTime} showNumbers={showNumbers} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Visualizer array={array} algorithm={quickSort} algorithmName="quickSort" playAnimation={isPlaying} delayTime={delayTime} showNumbers={showNumbers} />
          </Grid>
        </Grid>

      </Main>
    </Box>
  );
}
