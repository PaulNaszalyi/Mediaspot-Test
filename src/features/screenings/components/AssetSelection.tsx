import { 
  Box, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Checkbox, 
  Button, 
  Grid,
  Chip,
  Alert,
  CircularProgress
} from "@mui/material"
import { PlayArrow, VolumeUp } from "@mui/icons-material"
import { useGetAssetsQuery } from "../../../services/api"
import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectAsset, deselectAsset, selectSelectedAssets, nextStep } from "../screeningSlice"
import type { Asset } from "../../../types"

// Fallback data in case MSW fails
const fallbackAssets: Asset[] = [
  {
    id: "1",
    title: "Demo Reel 2023",
    duration: 180,
    thumbnailUrl: "https://dummyimage.com/300x200?text=Demo+Reel",
    type: "video",
  },
  {
    id: "2",
    title: "Product Teaser",
    duration: 45,
    thumbnailUrl: "https://dummyimage.com/300x200?text=Product+Teaser",
    type: "video",
  },
  {
    id: "3",
    title: "Interview with Director",
    duration: 720,
    thumbnailUrl: "https://dummyimage.com/300x200?text=Interview",
    type: "video",
  },
  {
    id: "4",
    title: "Behind the Scenes",
    duration: 360,
    thumbnailUrl: "https://dummyimage.com/300x200?text=BTS",
    type: "video",
  },
  {
    id: "5",
    title: "Soundtrack Preview",
    duration: 120,
    thumbnailUrl: "https://dummyimage.com/300x200?text=Soundtrack",
    type: "audio",
  },
  {
    id: "6",
    title: "Visual Effects Breakdown",
    duration: 240,
    thumbnailUrl: "https://dummyimage.com/300x200?text=VFX",
    type: "video",
  },
]

export default function AssetSelection() {
  const dispatch = useAppDispatch()
  const selectedAssets = useAppSelector(selectSelectedAssets)
  const { data: assets = [], isLoading, error } = useGetAssetsQuery()
  const [useFallback, setUseFallback] = useState(false)
  
  console.log('Asset query state:', { assets, isLoading, error })

  // Use fallback data if API fails after 3 seconds
  useEffect(() => {
    if (error) {
      console.warn('MSW failed, using fallback data')
      setUseFallback(true)
    }
  }, [error])

  const finalAssets = useFallback ? fallbackAssets : assets

  const handleAssetToggle = (asset: Asset) => {
    const isSelected = selectedAssets.some(a => a.id === asset.id)
    if (isSelected) {
      dispatch(deselectAsset(asset.id))
    } else {
      dispatch(selectAsset(asset))
    }
  }

  const handleNext = () => {
    dispatch(nextStep())
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  if (isLoading && !useFallback) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    )
  }

  if (error && !useFallback) {
    console.error('Asset loading error:', error)
    return (
      <Alert severity="warning" sx={{ mb: 2 }}>
        API connection failed. Using demo data for now.
        <Button 
          variant="outlined" 
          size="small" 
          sx={{ ml: 2 }}
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </Alert>
    )
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Select Assets for Screening
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Choose one or more assets to include in your screening request.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {finalAssets.map((asset) => {
          const isSelected = selectedAssets.some(a => a.id === asset.id)
          
          return (
            <Grid item xs={12} sm={6} md={4} key={asset.id}>
              <Card 
                sx={{ 
                  cursor: "pointer",
                  border: isSelected ? 2 : 1,
                  borderColor: isSelected ? "primary.main" : "divider",
                  position: "relative"
                }}
                onClick={() => handleAssetToggle(asset)}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={asset.thumbnailUrl}
                    alt={asset.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <Chip
                      icon={asset.type === "video" ? <PlayArrow /> : <VolumeUp />}
                      label={asset.type}
                      size="small"
                      color={asset.type === "video" ? "primary" : "secondary"}
                      sx={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "white",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      typography: "caption"
                    }}
                  >
                    {formatDuration(asset.duration)}
                  </Box>
                  <Checkbox
                    checked={isSelected}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(255,255,255,0.9)",
                      "&.Mui-checked": {
                        backgroundColor: "rgba(255,255,255,0.9)"
                      }
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" component="h3" noWrap>
                    {asset.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="body2" color="text.secondary">
          {selectedAssets.length} asset{selectedAssets.length !== 1 ? 's' : ''} selected
        </Typography>
        <Button 
          variant="contained" 
          onClick={handleNext}
          disabled={selectedAssets.length === 0}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}