module.exports = function ( grunt ) {
    // =======================
    // LOAD GRUNT PLUGINS ====
    // =======================
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    
    
    // =======================
    // CONFIGURE GRUNT =======
    // =======================
    grunt.initConfig({
        jshint: {
            scripts: ['src/**/*.js', '!src/**/socket.io.min.js'],
            gruntfile: ['Gruntfile.js'],
            options: {
                reporter: require('jshint-stylish'),
                curly:  true,
                immed:  true,
                newcap: true,
                noarg:  true,
                sub:    true,
                boss:   true,
                eqnull: true,
                node:   true,
                undef:  true,
                globals: {
                    _:       false,
                    jQuery:  false,
                    angular: false,
                    moment:  false,
                    console: false,
                    $:       false,
                    io:      false
                }
            },
        },
        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'dist/app.js'
            }
        },
        uglify: {
            build: {
                    files: {
                        'dist/app.min.js': ['dist/app.js']
                    }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });
    
    // =======================
    // GRUNT TASKS ===========
    // =======================
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('setup', ['jshint', 'concat', 'uglify']);
};