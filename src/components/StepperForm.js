import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {
    Stepper, Step as StepperStep,
    StepLabel,
    Grid,
    Card,
    DialogTitle,
    IconButton,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { Timer } from './Timer';

export const steps = [
    "Start Up",
    "Timer",
    "Completion",
];


export default function StepperForm() {
    const [open, setOpen] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState(0);
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentStep(0);
    };

    const handleStepperContent = () => {
        switch (currentStep) {
            case 0:
                return <div>This is popup step 1</div>;
            case 1:
                return <div>
                    <Timer />
                </div>;
            case 2:
                return <div>Completion</div>;
            default:
                return <div>The assignment is complete!</div>;
        }
    };


    return (
        <>

            <Button variant="outlined" onClick={handleClickOpen}>
                Open Stepper Form
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Stepper Form"}
                    {
                        <IconButton
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                            }}
                            onClick={handleClose}
                        >
                            X
                        </IconButton>
                    }
                </DialogTitle>
                <Container>
                    <Grid
                        container
                        height={"50"}
                    >
                        <Box>
                            <Box>
                                <Stepper
                                    activeStep={currentStep}
                                    alternativeLabel

                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        display: "flex",

                                    }}
                                >
                                    {steps.map((label) => (
                                        <StepperStep key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </StepperStep>
                                    ))}
                                </Stepper>
                            </Box>

                            <Box
                                sx={{
                                    mt: 3,
                                }}
                            >
                                <Card
                                    sx={{
                                        borderRadius: 4,
                                        ml: 4,
                                        pl: 4,
                                        pr: 4,
                                        mr: 4,
                                        pt: 2,
                                    }}
                                >
                                    {handleStepperContent()}

                                    <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
                                        <Button
                                            variant="contained"
                                            disabled={isFirstStep}
                                            onClick={() => setCurrentStep((previous) => previous - 1)}
                                        >
                                            Previous
                                        </Button>
                                        {isLastStep ? (
                                            <Button
                                                sx={{ ml: "4px" }}
                                                variant="contained"

                                                color="primary"
                                                onClick={handleClose}
                                            >
                                                Finish
                                            </Button>
                                        ) : (
                                            <Button
                                                sx={{ ml: "4px" }}
                                                variant="contained"
                                                color="primary"
                                                onClick={() => setCurrentStep((previous) => previous + 1)}
                                            >
                                                Next
                                            </Button>
                                        )}
                                    </Box>
                                </Card>
                            </Box>
                        </Box>

                    </Grid >
                </Container >

            </Dialog >

        </>


    );
}