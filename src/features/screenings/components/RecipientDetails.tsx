import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  Chip,
  Paper,
  Alert
} from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { Add, Email } from "@mui/icons-material"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { 
  setRecipients, 
  setValidUntil, 
  setMessage, 
  nextStep, 
  prevStep,
  selectRecipients,
  selectValidUntil,
  selectMessage
} from "../screeningSlice"

export default function RecipientDetails() {
  const dispatch = useAppDispatch()
  const recipients = useAppSelector(selectRecipients)
  const validUntil = useAppSelector(selectValidUntil)
  const message = useAppSelector(selectMessage)
  
  const [newEmail, setNewEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [dateError, setDateError] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const addEmail = () => {
    const email = newEmail.trim()
    
    if (!email) {
      setEmailError("Email is required")
      return
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }
    
    if (recipients.includes(email)) {
      setEmailError("Email already added")
      return
    }

    dispatch(setRecipients([...recipients, email]))
    setNewEmail("")
    setEmailError("")
  }

  const removeEmail = (emailToRemove: string) => {
    dispatch(setRecipients(recipients.filter(email => email !== emailToRemove)))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addEmail()
    }
  }

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (date < today) {
        setDateError("Valid until date must be in the future")
        return
      }
      
      setDateError("")
      dispatch(setValidUntil(date.toISOString()))
    } else {
      dispatch(setValidUntil(""))
    }
  }

  const handleNext = () => {
    let hasErrors = false

    if (recipients.length === 0) {
      setEmailError("At least one recipient is required")
      hasErrors = true
    }

    if (!validUntil) {
      setDateError("Valid until date is required")
      hasErrors = true
    }

    if (!hasErrors) {
      dispatch(nextStep())
    }
  }

  const handleBack = () => {
    dispatch(prevStep())
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Recipient Details
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Add recipient email addresses, set the screening validity period, and include an optional message.
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Recipients
          </Typography>
          
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField
              fullWidth
              label="Email address"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value)
                setEmailError("")
              }}
              onKeyPress={handleKeyPress}
              error={!!emailError}
              helperText={emailError}
              placeholder="Enter recipient email"
            />
            <Button
              variant="outlined"
              onClick={addEmail}
              startIcon={<Add />}
              sx={{ minWidth: "100px" }}
            >
              Add
            </Button>
          </Box>

          {recipients.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {recipients.map((email) => (
                <Chip
                  key={email}
                  icon={<Email />}
                  label={email}
                  onDelete={() => removeEmail(email)}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          )}

          {recipients.length === 0 && emailError === "At least one recipient is required" && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {emailError}
            </Alert>
          )}
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Screening Settings
          </Typography>
          
          <DatePicker
            label="Valid Until"
            value={validUntil ? new Date(validUntil) : null}
            onChange={handleDateChange}
            sx={{ mb: 3, width: "100%" }}
            slotProps={{
              textField: {
                error: !!dateError,
                helperText: dateError || "Select when this screening link should expire"
              }
            }}
          />

          <TextField
            fullWidth
            label="Message (Optional)"
            multiline
            rows={4}
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
            placeholder="Add a personal message for the recipients..."
            helperText="This message will be included in the screening invitation"
          />
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  )
}