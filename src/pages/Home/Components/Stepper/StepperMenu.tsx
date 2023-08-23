import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useState } from 'react';
import { Paragraph, useVisualizerConfigs } from '../../../../components';
import { LengthSelector } from '../LengthSelector/LengthSelector';

export const StepperMenu = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [{array}, dispatch] = useVisualizerConfigs();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePlay = () => {
    dispatch({ isPlaying: true, menuIsOpen: false });
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        <Step key="LengthSelector" >
          <StepLabel>
            {'Select the lenght of the array'}
          </StepLabel>
          <StepContent>
            <Paragraph>{`Each of the selected algorithms will have the same array size so we can compare 
              how they exactly behaves.`}</Paragraph>
            <Box sx={{ mb: 2 }}>
              <div>
                <LengthSelector/>
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
        <Step key='AlgorithmsSelector' >
          <StepLabel>
            {'Select which algorithms you want to visualize'}
          </StepLabel>
          <StepContent>
            <Paragraph>{'We have different algorithms yo show, please select at lease one.'}</Paragraph>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
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
        <Step key="Play" >
          <StepLabel>
            {'Run'}
          </StepLabel>
          <StepContent>
            <Paragraph>{`Plese click on the run button to start the animation.`}</Paragraph>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handlePlay}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {'Run'}
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
      </Stepper>      
    </Box>
  );
}
