/**
 * DEVOPS-9 (story A, "DEVOPS-1" in the lab) — GET /version
 *
 * Exposes the current application version: { "version": "x.x.x" }
 * The value is read from package.json through getPackageInfo(), so
 * package.json stays the single source of truth (shared with /info).
 */
import { Router } from 'express'
import { getPackageInfo } from '../../utils/appInfo.js'

const router = Router()

router.get('/version', (_req, res) => {
  const { version } = getPackageInfo()
  res.status(200).json({ version })
})

export default router
