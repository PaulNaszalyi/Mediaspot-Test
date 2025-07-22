import { rest } from "msw"
import type { Asset, ScreeningRequest, ScreeningResponse } from "../types"

// Sample assets data
const assets: Asset[] = [
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

export const handlers = [
  // GET /api/assets
  rest.get("/api/assets", (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(assets))
  }),

  // POST /api/screenings
  rest.post<ScreeningRequest>("/api/screenings", (req, res, ctx) => {
    const screeningResponse: ScreeningResponse = {
      id: Math.random().toString(36).substring(2, 9),
      url: `https://screening.example.com/${Math.random().toString(36).substring(2, 9)}`,
      createdAt: new Date().toISOString(),
    }

    return res(ctx.delay(1000), ctx.status(201), ctx.json(screeningResponse))
  }),
]
