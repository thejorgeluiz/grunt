module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css' :   'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css' : 'main.less'
                }
            }
        },
        //configuração unglify
        uglify: {
            options: {
                mangle: true,
            } ,
            my_target: {
                files: {
                    'main.min.js':['main.js']
                },
            },
        }
    });
    grunt.registerTask('Olagrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Olá Grunt');
            done()
        },3000);
        
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ["less", "uglify", "Olagrunt"]);
}