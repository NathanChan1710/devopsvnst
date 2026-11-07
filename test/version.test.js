/**
 * DEVOPS-9 — Integration tests for GET /version.
 * Acceptance criteria: HTTP 200, JSON body { "version": "x.x.x" }
 * matching the version declared in package.json.
 */
import request from 'supertest'
import { describe, it, expect } from 'vitest'
import { createRequire } from 'node:module'
import app from '../src/app.js'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

describe('GET /version', () => {
  it('returns HTTP 200 with a JSON body', async () => {
    const res = await request(app).get('/version')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/application\/json/)
  })

  it('returns package version as a non-empty string', async () => {
    const res = await request(app).get('/version')
    expect(typeof res.body.version).toBe('string')
    expect(res.body.version.length).toBeGreaterThan(0)
  })

  it('returns a semantic version x.x.x equal to package.json', async () => {
    const res = await request(app).get('/version')
    expect(res.body).toEqual({ version: pkg.version })
    expect(res.body.version).toMatch(/^\d+\.\d+\.\d+$/)
  })
})
