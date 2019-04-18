// GitHub Page
// module.exports = {
//     outputDir: 'docs',
//     assetsDir: './',
//     publicPath: './'
//   }
//web
// module.exports = {
//     baseUrl: process.env.NODE_ENV === 'production'
//       ? './web3/bgvideo-2018/'
//       : '/'
// }

if (process.env.NODE_ENV === 'production') {
  console.log('production-----------');
  // var configfile = 'config.js';
  module.exports ={
    // publicPath: './web3/start-v2'
    publicPath: './'
  }
}else{
  console.log('devlopment------------');
  //configfile = 'config-dev.js';
  module.exports = {
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './'
  }
}