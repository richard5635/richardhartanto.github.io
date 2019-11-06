const ghpages = require('gh-pages');

// Replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://richard5635:6deb21229f35e3687a140dca5945dbeca11db333@github.com/richard5635/richard5635.github.io.git'
  },
  () => {
    console.log('Deploy Complete!');
  }
);
