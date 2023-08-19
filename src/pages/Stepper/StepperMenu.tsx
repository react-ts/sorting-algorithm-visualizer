import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Paragraph } from '../../components';

const steps = [
  {
    label: 'Select the lenght of the array',
    description: `Each of the selected algorithms will have the same array size so we can compare
      how they exactly behaves.`,
  },
  {
    label: 'Select which algorithms you want to visualize',
    description:
      'We have different algorithms yo show, please select at lease one.',
  },
  {
    label: 'Run',
    description: `Plese click on the run button to start the animation.`,
  },
];

interface StepperParams {
  playAnimation: React.Dispatch<React.SetStateAction<boolean>>
}

export const StepperMenu = ({ playAnimation }: StepperParams) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label} >
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Paragraph>{step.description}</Paragraph>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={index === steps.length - 1 ? () => playAnimation(true) : handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Run' : 'Next'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Paragraph>Please click on the button below if you want to stop the animation and reset it.</Paragraph>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Stop and Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
