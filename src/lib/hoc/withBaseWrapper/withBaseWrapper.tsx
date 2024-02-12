import { AppBar, Box, CssBaseline, Divider, Toolbar, useTheme } from "@mui/material";
import { ComponentType, useMemo } from "react";
import { Icon, Paragraph } from "../../components";
import { useColorConfig, useVisualizerConfigs } from "../../hooks";
import { Drawer, DrawerHeader } from "./withBaseWrapper.styles";

export const withBaseWrapper = <T, > 
  (WrappedComponent: ComponentType<any>) => 
  (props: T) => {
    const [{ menuIsOpen }, dispatch] = useVisualizerConfigs();
    const [{ mode }, changeMode ] = useColorConfig();
    const { direction } = useTheme();
    const { iconName } = useMemo(() => ({
      'ltr': { iconName: 'chevron_left' },
      'rtl': { iconName: 'chevron_right' }
    })[direction], [direction]);

    return (
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        color="primary"
        position="fixed"
      >
        <Toolbar>
          <Icon 
            icon='menu'
            iconColor={{ color: 'white' }}
            onClick={() => dispatch({menuIsOpen: !menuIsOpen})}
          />
          <Paragraph
            style={{ marginLeft: '10px', flexGrow: 1 }}
            capitalized={true}
            size='md'
            textColor={{ color: 'white' }}
          >
            Algorithm Visualizer
          </Paragraph>
          <Icon 
            icon={mode === 'light' ? 'dark_mode' : 'light_mode' }
            iconColor={{ color: 'white' }}
            onClick={() => changeMode({mode: mode === 'light' ? 'dark' : 'light' })}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={menuIsOpen}
      >
        <DrawerHeader>
          <Icon 
            icon={iconName}
            onClick={() => dispatch({ menuIsOpen: !menuIsOpen })}
          />
        </DrawerHeader>
        <Divider />
      </Drawer>
      <WrappedComponent {...props} />
    </Box>
  )
}
