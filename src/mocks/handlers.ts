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
  // GET /api/assets - try multiple URL patterns
  rest.get("*/api/assets", (req, res, ctx) => {
    console.log('MSW: GET /api/assets called', { url: req.url.toString() })
    try {
      return res(
        ctx.delay(500), 
        ctx.status(200),
        ctx.set('Content-Type', 'application/json'),
        ctx.json(assets)
      )
    } catch (error) {
      console.error('MSW: Error in assets handler:', error)
      return res(ctx.status(500), ctx.json({ error: 'Internal server error' }))
    }
  }),

  // POST /api/screenings
  rest.post<ScreeningRequest>("*/api/screenings", (req, res, ctx) => {
    console.log('MSW: POST /api/screenings called', { url: req.url.toString() })
    try {
      const screeningResponse: ScreeningResponse = {
        id: Math.random().toString(36).substring(2, 9),
        url: `https://screening.example.com/${Math.random().toString(36).substring(2, 9)}`,
        createdAt: new Date().toISOString(),
      }

      return res(
        ctx.delay(1000), 
        ctx.status(201),
        ctx.set('Content-Type', 'application/json'),
        ctx.json(screeningResponse)
      )
    } catch (error) {
      console.error('MSW: Error in screenings handler:', error)
      return res(ctx.status(500), ctx.json({ error: 'Internal server error' }))
    }
  }),

  // Catch-all handler for unmatched requests
  rest.all(/.*/, (req, res, ctx) => {
    console.log('MSW: Unhandled request:', { method: req.method, url: req.url.toString() })
    return req.passthrough()
  }),
]
