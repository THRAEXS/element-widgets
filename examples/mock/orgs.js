import orgs from './orgs.tmp/org-all.json'
import enables from './orgs.tmp/org-enable.json'

import logger from '../utils/logger'
const debug = false

function all() {
  return orgs.data
}

function enabled(options) {
  debug && logger.debug('Org enabled:', options)
  const [lev] = options.url.split('/').reverse()
  const level = Number.parseInt(lev)
  debug && logger.debug('Org enabled params:', level)

  // console.debug(enables.data)
  return enables.data
}

export default {
  all,
  enabled
}
