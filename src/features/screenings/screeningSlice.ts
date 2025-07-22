import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import type { Asset } from "../../types"

interface ScreeningState {
  step: number
  selectedAssets: Asset[]
  recipients: string[]
  validUntil: string
  message: string
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

const initialState: ScreeningState = {
  step: 1,
  selectedAssets: [],
  recipients: [],
  validUntil: "",
  message: "",
  isSubmitting: false,
  isSuccess: false,
  error: null,
}

export const screeningSlice = createSlice({
  name: "screening",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1
    },
    prevStep: (state) => {
      state.step -= 1
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    selectAsset: (state, action: PayloadAction<Asset>) => {
      const assetExists = state.selectedAssets.some((asset) => asset.id === action.payload.id)
      if (!assetExists) {
        state.selectedAssets.push(action.payload)
      }
    },
    deselectAsset: (state, action: PayloadAction<string>) => {
      state.selectedAssets = state.selectedAssets.filter((asset) => asset.id !== action.payload)
    },
    setRecipients: (state, action: PayloadAction<string[]>) => {
      state.recipients = action.payload
    },
    setValidUntil: (state, action: PayloadAction<string>) => {
      state.validUntil = action.payload
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    resetForm: () => {
      return initialState
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const {
  nextStep,
  prevStep,
  setStep,
  selectAsset,
  deselectAsset,
  setRecipients,
  setValidUntil,
  setMessage,
  resetForm,
  setSubmitting,
  setSuccess,
  setError,
} = screeningSlice.actions

// Selectors
export const selectScreeningStep = (state: RootState) => state.screening.step
export const selectSelectedAssets = (state: RootState) => state.screening.selectedAssets
export const selectRecipients = (state: RootState) => state.screening.recipients
export const selectValidUntil = (state: RootState) => state.screening.validUntil
export const selectMessage = (state: RootState) => state.screening.message
export const selectIsSubmitting = (state: RootState) => state.screening.isSubmitting
export const selectIsSuccess = (state: RootState) => state.screening.isSuccess
export const selectError = (state: RootState) => state.screening.error

export default screeningSlice.reducer
