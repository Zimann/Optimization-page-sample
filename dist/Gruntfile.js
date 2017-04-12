
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        build: {
            src: 'views/js/main.js',
            dest: 'views/js/main.min.js'
        }
    },
      cssmin: {
          target: {
              files: [{
                  expand: true,
                  cwd: 'views/css/',
                  src: ['*.css', '!*.min.css'],
                  dest: 'views/css',
                  ext: '.min.css'
    }]
  }
}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['cssmin']);
};