const path = require('path')

module.exports = {
  apps: [
    {
      name: 'kun-visual-patch',
      port: 8888,
      cwd: path.join(__dirname),
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      script: './.output/server/index.mjs'
    }
  ]
}
