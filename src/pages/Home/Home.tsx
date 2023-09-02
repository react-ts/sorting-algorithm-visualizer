import { Grid, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Icon, Paragraph, useVisualizerConfigs } from '../../components';
import { Visualizer } from '../Visualizer';
import { AppBar, DrawerHeader, Main } from './Home.styles';
import { StepperMenu } from './components';
const drawerWidth = 340;

export const Home = () => {
  const theme = useTheme()
  const [{
    array,
    isPlaying,
    delayTime,
    showNumbers,
    menuIsOpen,
    algorithms
  }, dispatch] = useVisualizerConfigs();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Icon
            icon='menu'
            iconColor={{ color: 'white' }}
            onClick={() => dispatch({ menuIsOpen: !menuIsOpen })}
          />
          <Paragraph
            capitalized={true}
            size='md'
            textColor={{ color: 'white' }}
          >
            Algorithm Visualizer
          </Paragraph>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          display: {},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        variant="temporary"
        open={menuIsOpen}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerHeader>
          {theme.direction === 'ltr' ? <Icon icon='chevron_left' onClick={() => dispatch({ menuIsOpen: !menuIsOpen })} /> : <Icon icon='chevron_right' />}
        </DrawerHeader>
        <Divider />
        <StepperMenu />
      </Drawer>
      <Main>
        <DrawerHeader />
        <Paragraph
          visible={algorithms.length === 0}
          capitalized={false}
          size='lg'
          textColor={{ color: 'black' }}
          as={'h1'}
          alignment='center'
        >
          Please select which algorithms you want to visualize by clicking on the left menu.
        </Paragraph>
        <Grid
          wrap='wrap'
          container
          spacing={3}
        >
          {
            algorithms.map(({name, algorithm}) => (
              <Grid
                key={name}
                item
                xs={12}
                md={6}
                lg={4}
              >
                <Visualizer
                  array={array}
                  algorithm={algorithm}
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
