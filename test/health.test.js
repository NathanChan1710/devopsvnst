/**
 * Integration test for GET /health & GET /.
 */
import request from 'supertest'
import app from '../src/app.js'
import { describe, it, expect } from 'vitest'

describe('Base routes', () => {
  it('returns 200 on /health', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.text).toBe('OK')
  })

  it('returns 200 on /', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
  })
})
