module.exports = function(grunt) {

    grunt.initConfig ({

        pkg: grunt.file.readJSON('package.json'), // tell grunt where the package.json is read from

        sass: {

            dist: {

                option: {

                    style: 'compressed' // style of produced css-- this arg outputs minified (nightmare) css

                },

                files: {

                    './css/style.css':'./sass/style.scss' // tells grunt where to put compiled css and where the sass to compile from can be found

                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass') // uses the plugin we installed to load up required tasks

    grunt.registerTask('default', ['sass']);

}