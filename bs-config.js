// "IMPORTANT: THIS FILE IS GENERATED, CHANGES SHOULD BE MADE WITHIN '@okta/generator'"

module.exports = {
  port: process.env.PORT || 5173,
  logLevel: 'silent',
  files: ['./dist/**/*.{html,htm,css,js}'],
  server: { 
    baseDir: './dist',
    middleware: {
      0: null
    }
  },
  open: false
};
