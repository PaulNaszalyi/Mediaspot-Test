import {Step, StepConnector, StepLabel, Stepper, Typography} from "@mui/material";
import {useAppSelector} from "../../app/hooks.ts";
import {selectScreeningStep} from "../../features/screenings/screeningSlice.ts";

const Header = () => {
    const currentStep = useAppSelector(selectScreeningStep);

    return (
        <header style={{marginBottom: "56px"}}>
            <Typography component="h1" variant="h2" sx={{mb: 4}}>
                Create a screening request
            </Typography>
            <Stepper
                activeStep={currentStep - 1}
                connector={
                    <StepConnector
                        sx={{
                            [`& .MuiStepConnector-line`]: {
                                borderColor: '#1e1e20'
                            }
                        }}
                    />
                }
            >
                <Step sx={{pl: 0}} completed={currentStep > 1}>
                    <StepLabel sx={{'& .MuiStepIcon-root': {width: 40, height: 40, fontSize: 18,}}}>
                        <span style={{fontSize: "24px", fontWeight: 500}}>
                            Select assets
                        </span>
                    </StepLabel>
                </Step>
                <Step completed={currentStep > 2}>
                    <StepLabel sx={{'& .MuiStepIcon-root': {width: 40, height: 40, fontSize: 18,}}}>
                        <span style={{fontSize: "24px", fontWeight: 500}}>
                            Select recipients
                        </span>
                    </StepLabel>
                </Step>
                <Step sx={{pr: 0}} completed={currentStep > 3}>
                    <StepLabel sx={{'& .MuiStepIcon-root': {width: 40, height: 40, fontSize: 18,}}}>
                        <span style={{fontSize: "24px", fontWeight: 500}}>
                            Review & Submit
                        </span>
                    </StepLabel>
                </Step>
            </Stepper>
        </header>
    );
}

export default Header;
