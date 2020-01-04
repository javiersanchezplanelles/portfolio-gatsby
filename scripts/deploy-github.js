const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/javisp91/javisp91.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)