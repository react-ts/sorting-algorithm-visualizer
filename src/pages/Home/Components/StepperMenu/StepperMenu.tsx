import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useMemo, useState } from 'react';
import { Icon, Paragraph, useVisualizerConfigs } from '../../../../components';
import { LengthSelector } from '../LengthSelector/LengthSelector';
import { AlgorithmSelector } from '../AlgorithmSelector/AlgorithmSelector';

export const StepperMenu = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [{ array, isPlaying, algorithms }, dispatch] = useVisualizerConfigs();

  const icon = useMemo(
    () =>
      !isPlaying ? { icon: "play_arrow", color: "success" } : { icon: "pause", color: "warning" }, [isPlaying]
  )
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePlay = () => {
    dispatch({ isPlaying: !isPlaying, menuIsOpen: false });
  }

  const reset = () => {
    dispatch({ algorithms: [], isPlaying: false, array: [] })
    setActiveStep(0)
  }

  return (
    <Box
      sx={{ maxWidth: 400, padding: '10px' }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
      >
        <Step
          key="LengthSelector"
        >
          <StepLabel>
            {'Select the lenght of the array'}
          </StepLabel>
          <StepContent>
            <Paragraph>{`Each of the selected algorithms will have the same array size so we can compare 
              how they exactly behaves.`}</Paragraph>
            <Box
              sx={{ mb: 2 }}
            >
              <div>
                <LengthSelector />
                <Button
                  disabled={array.length === 0}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {'Next'}
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step
          key='AlgorithmsSelector'
        >
          <StepLabel>
            {'Select which algorithms you want to visualize'}
          </StepLabel>
          <StepContent>
            <Paragraph>{'We have different algorithms yo show, please select at lease one.'}</Paragraph>
            <Box
              sx={{ mb: 2 }}
            >
              <div>
                <AlgorithmSelector />
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={algorithms.length === 0}
                >
                  {'Next'}
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step
          key="Play"
        >
          <StepLabel>
            {'Run'}
          </StepLabel>
          <StepContent>
            <Paragraph>{`Plese click on the play button to start the animation.`}</Paragraph>
            <Box
              sx={{ mb: 2 }}
            >
              <div
                style={{ display: 'inline-flex', columnGap: '4px' }}
              >
                <Button
                  onClick={handlePlay}
                  sx={{ mt: 1, mr: 1 }}
                  color='secondary'
                >
                  <Icon
                    icon={icon.icon}
                    fill={1}
                    iconColor={{ color: icon.color, grade: 900 }}
                  />
                </Button>
                <Button
                  onClick={reset}
                  sx={{ mt: 1, mr: 1 }}
                >
                  <Icon
                    icon='refresh'
                    fill={1}
                    iconColor={{ color: 'error', grade: 900 }}
                  />
                </Button>
              </div>

            </Box>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}
