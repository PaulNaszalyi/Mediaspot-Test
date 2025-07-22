export interface Asset {
  id: string
  title: string
  duration: number
  thumbnailUrl: string
  type: "video" | "audio"
}

export interface ScreeningRequest {
  assets: Asset[]
  recipients: string[]
  validUntil: string
  message: string
}

export interface ScreeningResponse {
  id: string
  url: string
  createdAt: string
}
