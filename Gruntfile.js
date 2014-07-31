module.exports = function(grunt) {
        'use strict'

  var gruntConfig = {
     pkg: grunt.file.readJSON('package.json'),
     uglify: {
        'css/input.min.css': 'css/input.css'
    },
     watch: {
      files: ['css/*.css','input.css/*.html'],
      tasks: ['uglify']
    },
  };
  grunt.initConfig(gruntConfig);
  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch', 'uglify']);
};
