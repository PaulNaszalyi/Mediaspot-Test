import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Alert,
  CircularProgress
} from "@mui/material"
import { PlayArrow, VolumeUp, Email, CalendarToday, Message } from "@mui/icons-material"
import { format } from "date-fns"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { 
  prevStep, 
  resetForm,
  setSubmitting,
  setSuccess,
  setError,
  selectSelectedAssets,
  selectRecipients,
  selectValidUntil,
  selectMessage,
  selectIsSubmitting,
  selectIsSuccess,
  selectError
} from "../screeningSlice"
import { useCreateScreeningRequestMutation } from "../../../services/api"

export default function Summary() {
  const dispatch = useAppDispatch()
  const selectedAssets = useAppSelector(selectSelectedAssets)
  const recipients = useAppSelector(selectRecipients)
  const validUntil = useAppSelector(selectValidUntil)
  const message = useAppSelector(selectMessage)
  const isSubmitting = useAppSelector(selectIsSubmitting)
  const isSuccess = useAppSelector(selectIsSuccess)
  const error = useAppSelector(selectError)

  const [createScreeningRequest] = useCreateScreeningRequestMutation()

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleSubmit = async () => {
    try {
      dispatch(setSubmitting(true))
      dispatch(setError(null))

      await createScreeningRequest({
        assets: selectedAssets,
        recipients,
        validUntil,
        message
      }).unwrap()

      dispatch(setSuccess(true))
    } catch (err) {
      dispatch(setError('Failed to create screening request. Please try again.'))
    } finally {
      dispatch(setSubmitting(false))
    }
  }

  const handleBack = () => {
    dispatch(prevStep())
  }

  const handleCreateAnother = () => {
    dispatch(resetForm())
  }

  if (isSuccess) {
    return (
      <Box textAlign="center">
        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Screening Request Created Successfully!
          </Typography>
          <Typography>
            The screening links have been sent to all recipients.
          </Typography>
        </Alert>
        <Button variant="contained" onClick={handleCreateAnother}>
          Create Another Screening
        </Button>
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Review & Confirm
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Please review your screening request details before submitting.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Selected Assets ({selectedAssets.length})
        </Typography>
        <List>
          {selectedAssets.map((asset, index) => (
            <ListItem key={asset.id} divider={index < selectedAssets.length - 1}>
              <ListItemAvatar>
                <Avatar src={asset.thumbnailUrl} variant="rounded" sx={{ width: 60, height: 40 }} />
              </ListItemAvatar>
              <ListItemText
                primary={asset.title}
                secondary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                    <Chip
                      icon={asset.type === "video" ? <PlayArrow /> : <VolumeUp />}
                      label={asset.type}
                      size="small"
                      color={asset.type === "video" ? "primary" : "secondary"}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {formatDuration(asset.duration)}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recipients & Settings
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Email fontSize="small" color="action" />
            <Typography variant="subtitle2">Recipients ({recipients.length})</Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {recipients.map((email) => (
              <Chip key={email} label={email} size="small" variant="outlined" />
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <CalendarToday fontSize="small" color="action" />
            <Typography variant="subtitle2">Valid Until</Typography>
          </Box>
          <Typography variant="body2">
            {format(new Date(validUntil), "PPP 'at' p")}
          </Typography>
        </Box>

        {message && (
          <>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Message fontSize="small" color="action" />
                <Typography variant="subtitle2">Message</Typography>
              </Box>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                "{message}"
              </Typography>
            </Box>
          </>
        )}
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={handleBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button 
          variant="contained" 
          onClick={handleSubmit}
          disabled={isSubmitting}
          startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
        >
          {isSubmitting ? "Creating..." : "Create Screening Request"}
        </Button>
      </Box>
    </Box>
  )
}