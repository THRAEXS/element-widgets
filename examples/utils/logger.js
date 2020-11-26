const types = ['log', 'info', 'debug', 'warn', 'error']

const logger = {}

types.forEach(it => {
  logger[it] = function() {
    console[it](...arguments)
  }
})

export default logger
