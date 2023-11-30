import React, { useState, useEffect } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepIcon from '@mui/material/StepIcon';
// import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

const CustomStepLabel = styled(({ isActiveStep, ...other }) => <StepLabel {...other} />)(({ theme, isActiveStep }) => ({
    '& .MuiStepLabel-labelContainer': {
        flexDirection: 'row',
    },
    '& .MuiStepLabel-label': {
        textTransform: 'capitalize',
        color: '#002d6b !important' ,
        fontWeight: isActiveStep ? 'bold' : 'normal',
        fontSize: '16px',
    },
    '& .MuiStepLabel-iconContainer': {
        paddingRight: theme.spacing(1),
    },
}));

const CustomStepIcon = styled(StepIcon)(({ theme }) => ({
    '&.MuiStepIcon-root': {
        color: '#a47fc9',
        backgroundColor: '#a47fc9',
        borderRadius: '50%',
        border: '1px solid #FFF',
        zIndex: 1,
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '&.MuiStepIcon-text': {
        fill: '#FFF',
    },
    '&.Mui-active': {
        border: '1px solid #002d6b',
        color: '#002d6b',
        '& $text': {
            fill: '#002d6b',
        },
    },
    '&.Mui-completed': {
        color: '#FFF',
        '& svg': {
            color: '#FFF',
        },
    },
}));

function Navbar(props) {
    const { currentForm, steps} = props;
    // const { currentForm, steps, formSubmitted } = props;
    const activeStepIndex = steps.indexOf(currentForm);

    const [highestStepReached, setHighestStepReached] = useState(activeStepIndex);

    useEffect(() => {
        if (activeStepIndex > highestStepReached) {
            setHighestStepReached(activeStepIndex);
        }
    }, [activeStepIndex, highestStepReached]);

    const adjustStepLabel = (label) => {
        if (label.toLowerCase() === 'person') {
            return 'Personal Details';
        }
        return label;
    };

    return (
        <Stepper activeStep={activeStepIndex} orientation="vertical">
        {/*// <Stepper activeStep={formSubmitted ? steps.length : activeStepIndex} orientation="vertical">*/}
            {steps.map((step, index) => {
                // const isLastStep = index === steps.length - 1;
                // const stepCompleted = formSubmitted || (index < activeStepIndex && index <= highestStepReached);

                const isActiveStep = index === activeStepIndex;

                const adjustedStepLabel = adjustStepLabel(step);

                return (
                    <Step
                        key={step}
                        completed={index < activeStepIndex && index <= highestStepReached}
                        //  completed={stepCompleted}
                        // {...(isLastStep && formSubmitted ? { icon: <CheckIcon /> } : {})}
                    >
                        <CustomStepLabel
                            isActiveStep={isActiveStep}
                            StepIconComponent={CustomStepIcon}
                            StepIconProps={{
                                // completed: stepCompleted,
                                completed: index !== activeStepIndex && index <= highestStepReached,
                            }}
                        >
                            {adjustedStepLabel}
                        </CustomStepLabel>
                    </Step>
                );
            })}
        </Stepper>
    );
}

export default Navbar;
