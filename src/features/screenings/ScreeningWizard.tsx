import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { selectScreeningStep } from "./screeningSlice"
import AssetSelection from "./components/AssetSelection"
import RecipientDetails from "./components/RecipientDetails"
import Summary from "./components/Summary"

const steps = [
  "Select Assets",
  "Recipient Details", 
  "Summary"
]

export default function ScreeningWizard() {
  const currentStep = useAppSelector(selectScreeningStep)

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <AssetSelection />
      case 2:
        return <RecipientDetails />
      case 3:
        return <Summary />
      default:
        return <AssetSelection />
    }
  }

  return (
    <Box sx={{ width: "100%", py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Create Screening Request
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={currentStep - 1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box sx={{ mt: 4 }}>
        {renderStepContent()}
      </Box>
    </Box>
  )
}