const orgs = {}
for (let i = 1; i < 5; i++) {
  orgs[`level${i}`] = require(`./orgs.tmp/org-level-${i}.tmp.json`).data
}

function tree(options) {
  const [level] = options.url.split('/').reverse()
  // const level = Number.parseInt(lev)
  // console.log(options, level)
  return orgs[`level${Number(level) + 1}`]
}

export default { tree }
