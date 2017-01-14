module.exports = function(grunt){

	// Project configuration.
	grunt.initConfig({
		concat: {
			js: {
				src: ['js/app.js',],
				dest: 'build/js/script.js',
			},
			css: {
				src: ['css/main.css',],
				dest: 'build/css/styles.css',
			},
			},


			watch: {
			js: {
				files: ['js/**/*.js'],
				tasks: ['concat:js'],
			},
			css: {
				files: ['css/**/*.css'],
				tasks: ['concat:css'],
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','watch']);

};