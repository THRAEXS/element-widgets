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

  // const [{ childOrgList: colleges, ...root }] = enables.data

  // console.debug(root, colleges)

  // enables.data[0].childOrgList[0].childOrgList[0].childOrgList = [{ id: '1', name: "2"}]
  // console.debug(enables.data[0].childOrgList[0].childOrgList[0].name)
  // console.debug(enables.data[0].childOrgList[0].childOrgList[0].id)
  // console.debug(enables.data[0].childOrgList[0].childOrgList[0].childOrgList)
  
  return enables.data
  // return enables.data[0].childOrgList
}

export default {
  all,
  enabled
}
