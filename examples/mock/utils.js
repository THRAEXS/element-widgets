import qs from 'qs'

function param2Obj(url) {
  const [, query] = url.split('?')
  query && console.log('Query params:', decodeURIComponent(query))

  return query ? qs.parse(query) : {}
}

export { param2Obj }
