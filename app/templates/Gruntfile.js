// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
/*jshint camelcase: false */
'use strict';

var _ = require('lodash');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    // require('load-grunt-tasks')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        // configurable paths
        yeoman: {
            dev: 'dev',
            server: 'dev/.server',
            dist: 'dist'
        },
        dashboardData: {},
        watch: {
            options: {
                spawn: true,
                livereload: false
            },
            jade: {
                files: ['<%%= yeoman.dev %>/markup/{,*/}{,*/}*.jade', '<%%= yeoman.dev %>/dashboard/markup/{,*/}{,*/}*.jade'],
                tasks: ['newer:copy:server', 'build-dashboard', 'jade:server', 'jade:serverDashboard', 'clean:temp']
            }<% if (cssOption === 'SASS') { %>,
            sass: {
                files: ['<%%= yeoman.dev %>/styles/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['sass:server']
            },
            sassDash: {
                files: ['<%%= yeoman.dev %>/dashboard/styles/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['sass:serverDashboard']
            }<% } %><% if (cssOption === 'LESS') { %>,
            less: {
                files: ['<%%= yeoman.dev %>/styles/{,*/}{,*/}*.less'],
                tasks: ['less:server']
            },
            lessDash: {
                files: ['<%%= yeoman.dev %>/dashboard/styles/{,*/}{,*/}*.less'],
                tasks: ['less:serverDashboard']
            }<% } %>,
            js: {
                files: ['<%%= yeoman.dev %>/scripts/{,*/}{,*/}*.js', '<%%= yeoman.dev %>/bower_components/{,*/}{,*/}*.js', '<%%= yeoman.dev %>/dashboard/{,*/}{,*/}*.js'],
                tasks: [<% if (jshint) { %>'newer:jshint', <% } %>'newer:copy:server']
            },
            images: {
                files: ['<%%= yeoman.dev %>/images/{,*/}{,*/}*.{png,jpg,gif}'],
                tasks: ['newer:copy:server']
            },
            root: {
                files: [
                    '<%%= yeoman.dev %>/*.{ico,png,txt,html}',
                    <% if (extras.indexOf(htaccess) !== -1) { %>'<%%= yeoman.dev %>/.htaccess',<% } %>
                    '<%%= yeoman.dev %>/images/{,*/}*.{webp}',
                    '<%%= yeoman.dev %>/styles/fonts/{,*/}*.*'
                ],
                tasks: ['newer:copy:server']
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= yeoman.dev %>/*.{ico,png,txt,html}',
                    <% if (extras.indexOf(htaccess) !== -1) { %>'<%%= yeoman.dev %>/.htaccess',<% } %>
                    '<%%= yeoman.server %>/styles/fonts/{,*/}*.*',
                    '<%%= yeoman.server %>/markup/{,*/}*.html',
                    '<%%= yeoman.server %>/dashboard/markup/{,*/}*.html',
                    '<%%= yeoman.server %>/dashboard/styles/{,*/}*.css',
                    '<%%= yeoman.server %>/dashboard/scripts/{,*/}*.js'<% if (cssOption === 'SASS') { %>,
                    '<%%= yeoman.dev %>/styles/{,*/}{,*/}*.{sass,scss}'<% } %><% if (cssOption === 'LESS') { %>,
                    '<%%= yeoman.dev %>/styles/{,*/}{,*/}*.less'<% } %>,
                    '<%%= yeoman.server %>/scripts/{,*/}{,*/}*.js',
                    '<%%= yeoman.server %>/images/{,*/}{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: '<%%= yeoman.dev %>'
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        'test',
                        '<%= yeoman.dev %>'
                    ]
                }
            },
        },
        clean: {
            server: ['<%%= yeoman.server %>/', '<%%= yeoman.dev %>/.server/tmp'],
            dist: ['<%%= yeoman.dist %>/', '<%%= yeoman.dev %>/.server/tmp'],
            temp: ['<%%= yeoman.dev %>/.server/tmp/**', '<%%= yeoman.server %>/.server/tmp/**', '<%%= yeoman.dist %>/.server/tmp/**']
        },
        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%%= connect.options.hostname %>:<%%= connect.test.options.port %>/index.html']
                }
            }
        },
        // Put files not handled in other tasks here
        copy: {
            server: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'scripts/**'<% if (jsOption ==='Browserify') { %>,
                        '!scripts/app.js',
                        '!scripts/main.js'<% } %>
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'images/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'bower_components/{,*/}{,*/}*.js',
                        'bower_components/{,*/}{,*/}*.{woff,otf,ttf,eot,svg}',
                        'bower_components/jquery/*.map'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'dashboard/scripts/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'dashboard/images/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dev %>/.server/tmp',
                    src: [
                        'markup/**', '!**markup/pages/**'
                    ]
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        'bower_components/requirejs/require.js',
                        'bower_components/modernizr/modernizr.js',
                        'bower_components/{,*/}{,*/}*.{woff,otf,ttf,eot,svg}',
                        'bower_components/jquery/jquery.min.{js,map}',
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/scripts',
                    dest: '<%%= yeoman.dist %>/scripts',
                    src: [
                        '{,*/}{,*/}*.js', '!*.js'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        '*.{ico,png,txt,html}',
                        '.htaccess',
                        'images/{,*/}*.{webp}',
                        'styles/fonts/{,*/}*.*',
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/styles',
                    dest: '<%%= yeoman.dist %>/styles',
                    src: [
                        '{,*/}{,*/}*.{scss,less}'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        'dashboard/scripts/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        'dashboard/images/{,*/}*.{webp}'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dev %>/.server/tmp',
                    src: [
                        'markup/**', '!**markup/pages/**'
                    ]
                }]
            }
        },
        jade: {
            server: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: true
                    }
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['markup/pages/*.jade',
                    '.server/tmp/markup/templates/*.jade',
                    '!.server/tmp/markup/templates/base.jade',
                    '.server/tmp/markup/components/*-*.jade',
                    '!.server/tmp/markup/components/all-components.jade',
                    '.server/tmp/markup/modules/*-*.jade',
                    '!.server/tmp/markup/modules/all-modules.jade'],
                ext: '.html',
                rename: function (dest, matchedSrcPath) {
                    matchedSrcPath = matchedSrcPath.replace('.server/tmp/', '');
                    return dest + matchedSrcPath;
                }
            },
            serverDashboard: {
                options: {
                    pretty: true,
                    client: false,
                    data: '<%%= dashboardData %>'
                },
                files: {
                    '<%%= yeoman.server %>/dashboard/index.html': ['<%%= yeoman.dev %>/dashboard/markup/index.jade']
                }
            },
            dist: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: false
                    }
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['markup/pages/*.jade',
                    '.server/tmp/markup/templates/*.jade',
                    '!.server/tmp/markup/templates/base.jade',
                    '.server/tmp/markup/components/*-*.jade',
                    '!.server/tmp/markup/components/all-components.jade',
                    '!.server/tmp/markup/components/head.jade',
                    '.server/tmp/markup/modules/*-*.jade',
                    '!.server/tmp/markup/modules/all-modules.jade'],
                ext: '.html',
                rename: function (dest, matchedSrcPath) {
                    matchedSrcPath = matchedSrcPath.replace('.server/tmp/', '');
                    return dest + matchedSrcPath;
                }
            },
            distDashboard: {
                options: {
                    pretty: true,
                    client: false,
                    data: '<%%= dashboardData %>'
                },
                files: {
                    '<%%= yeoman.dist %>/dashboard/index.html': ['<%%= yeoman.dev %>/dashboard/markup/index.jade']
                }
            }
        }<% if (jshint) { %>,
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            test: [
                'Gruntfile.js',
                '<%%= yeoman.dev %>/scripts/{,*/}{,*/}*.js',
                '<%%= yeoman.dev %>/dashboard/scripts/{,*/}{,*/}*.js',
                '!<%%= yeoman.dev %>/scripts/vendor/{,*/}*'
            ]
        }<% } %>,
        'string-replace': {
            sassMapFixDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: /..\/..\/dev\/styles\//g,
                            replacement: ''
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/styles/main.css.map' : '<%%= yeoman.dist %>/styles/main.css.map'
                }
            },<% if (jsOption ==='RequireJS') { %>
            requireDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: 'data-main="../../scripts/main"',
                            replacement: 'data-main="../../scripts/main.min"'
                        },
                        {
                            pattern: 'require.js',
                            replacement: 'require.min.js'
                        },
                        {
                            pattern: 'modernizr.js',
                            replacement: 'modernizr.min.js'
                        },
                        {
                            pattern: '.js\'])',
                            replacement: '.min.js\'])'
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/../' : ['<%%= yeoman.dist %>/markup/{,*/}{,*/}*.html', '<%%= yeoman.dist %>/*.html']
                }
            },<% } %>
            indexLinkFix: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: '.server/',
                            replacement: ''
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/index.html' : ['<%%= yeoman.dist %>/*.html']
                }
            }
        },
        // gzip assets 1-to-1 for production
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    pretty: true,
                    archive: '<%%= yeoman.dist %>/build.zip'
                },
                expand: true,
                cwd: '<%%= yeoman.dist %>/',
                src: ['*/**', '!**/*.zip', '!**/*.psd', '!**/.git', '!**/.svn']
            }
        },<% if (useFTP) { %>
        ftpush: {
            build: {
                simple: true,
                auth: {
                    host: '<%%= secret.host %>',
                    port: 21,
                    authKey: 'key1'
                },
                src: '<%%= yeoman.dist %>',
                dest: '<%%= secret.serverPath %>',
                exclusions: ['*.svn', '.svn/', '.svn', '*.git', '.git/', '.git'],
                server_sep: '/'
            }
        },<% } %>
        uglify: {
            dist: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                    sourceMap: function (path) {
                        return path.replace('.js', '.js.map');
                    },
                    sourceMapPrefix: 3,
                    sourceMappingURL: function (path) {
                        var pathArray = path.split('/'),
                        pathLength = pathArray.length;
                        return pathArray[(pathLength - 1)].replace('.js', '.js.map');
                    }
                },
                expand: true,
                cwd: '<%%= yeoman.dist %>/bower_components/',
                dest: '<%%= yeoman.dist %>/bower_components/',
                src: [
                    'requirejs/require.js',
                    'modernizr/modernizr.js'
                ],
                ext: '.min.js'
            },
            distJS: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                    sourceMap: function (path) {
                        return path.replace('.js', '.js.map');
                    },
                    sourceMapPrefix: 3,
                    sourceMappingURL: function (path) {
                        var pathArray = path.split('/'),
                        pathLength = pathArray.length;
                        return pathArray[(pathLength - 1)].replace('.js', '.js.map');
                    }
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/scripts/',
                dest: '<%%= yeoman.dist %>/scripts/',
                src: ['{,*/}{,*/}*.js', '!*.js'],
                ext: '.min.js'
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/images',
                    src: '{,*/}{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            },
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/dashboard/images',
                    src: '{,*/}{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%%= yeoman.dist %>/dashboard/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/images',
                    src: '{,*/}{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            },
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/dashboard/images',
                    src: '{,*/}{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/dashboard/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeEmptyAttributes: true
                },
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dist %>',
                    src: ['*.html', 'markup/{,*/}{,*/}*.html', 'dashboard/markup/{,*/}{,*/}*.html'],
                    dest: '<%%= yeoman.dist %>'
                }]
            }
        },<% if (jsOption ==='Browserify') { %>
        browserify: {
            server: {
                options: {
                    debug: true,
                    aliasMappings: {
                        cwd: '<%%= yeoman.dev %>/scripts',
                        src: ['app.js', 'vendor/**/*.js'],
                        dest: 'lib'
                    }
                },
                files: {
                    '<%%= yeoman.server %>/scripts/main.js': ['<%%= yeoman.dev %>/scripts/main.js']
                }
            },
            dist: {
                options: {
                    debug: true
                },
                files: {
                    '<%%= yeoman.dist %>/scripts/main.js': ['<%%= yeoman.dev %>/scripts/main.js']
                }
            }
        },<% } %><% if (jsOption ==='RequireJS') { %>
        requirejs: {
            dist: {
                options: {
                    name: 'main',
                    baseUrl: '<%%= yeoman.dev %>/scripts/',
                    mainConfigFile: '<%%= yeoman.dev %>/scripts/main.js',
                    out: '<%%= yeoman.dist %>/scripts/main.min.js',
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                }
            }
        },<% } %><% if (cssOption === 'SASS') { %>
        sass: {
            server: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeoman.server %>/styles/main.css.map',
                    includePaths: [
                        '<%%= yeoman.dev %>/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeoman.server %>/styles/main.css': '<%%= yeoman.dev %>/styles/main.scss'
                }
            },
            serverDashboard: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeoman.server %>/dashboard/styles/main.css.map',
                    includePaths: [
                        '<%%= yeoman.dev %>/dashboard/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeoman.server %>/dashboard/styles/main.css': '<%%= yeoman.dev %>/dashboard/styles/main.scss'
                }
            },
            dist: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeoman.dist %>/styles/main.css.map',
                    includePaths: [
                        '<%%= yeoman.dev %>/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/styles/main.css': '<%%= yeoman.dev %>/styles/main.scss'
                }
            },
            distDashboard: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeoman.dist %>/dashboard/styles/main.css.map',
                    includePaths: [
                        '<%%= yeoman.dev %>/dashboard/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/dashboard/styles/main.css': '<%%= yeoman.dev %>/dashboard/styles/main.scss'
                }
            },
        },<% } %><% if (cssOption === 'LESS') { %>
        less: {
            server: {
                options: {
                    paths: ['<%%= yeoman.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeoman.server %>/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeoman.server %>/styles/',
                    sourceMapRootpath: '',
                    dumpLineNumbers: 'comments',
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['styles/*.less'],
                ext: '.css'
            },
            serverDashboard: {
                options: {
                    paths: ['<%%= yeoman.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeoman.server %>/dashboard/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeoman.server %>/dashboard/styles/',
                    sourceMapRootpath: '',
                    dumpLineNumbers: 'comments',
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['dashboard/styles/*.less'],
                ext: '.css'
            },
            dist: {
                options: {
                    paths: ['<%%= yeoman.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeoman.dist %>/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeoman.dist %>/styles/',
                    sourceMapRootpath: './',
                    compress: true,
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['styles/*.less'],
                ext: '.css'
            },
            distDashboard: {
                options: {
                    paths: ['<%%= yeoman.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeoman.dist %>/dashboard/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeoman.dist %>/dashboard/styles/',
                    sourceMapRootpath: './',
                    compress: true,
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['dashboard/styles/*.less'],
                ext: '.css'
            }
        }<% } %>
    });<% if (useFTP) { %>

    grunt.registerTask('ftpinfo', 'Grab FTP info for deployment; If valid, then deploy to FTP server', function () {
        var ftpJSON = grunt.file.readJSON('.ftppass');
        if (ftpJSON.host === '') {
            grunt.log.error('ERROR: Deploy will not work until you fill out FTP server info in the ".ftppass" file!');
        }
        else {
            grunt.config.set('secret', ftpJSON);
            grunt.task.run(['ftpush']);
        }
    });<% } %>
    grunt.registerTask('build-dashboard', 'Runs through project Jade files and gathers needed data to build the dashboard', function () {
        var done = this.async(),
        itemsArray = [],
        dashData = {},
        pageData,
        templateData,
        componentData,
        moduleData;
        var updatePath = function (path, strToRemove) {
            return path.replace(strToRemove, '..');
        };
        var toTitleCase = function (str)
        {
            return str.replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        };
        var convertDashes = function (str)
        {
            return str.replace('-', ' ');
        };
        var removeSymbols = function (str) {
            var tempStr = str.replace('!##', '');
            return tempStr.replace('##!', '');
        };
        var getJSON = function (data) {
            if (data) {
                var dataStr = data.trim().replace(/ /g, '');
                return JSON.parse(dataStr);
            }
        };
        var recursiveParse = function(path, type, namePath) {
            var extraData = [],
            nameData;
            itemsArray = []; // reset items array
            grunt.file.recurse(path, function (abspath) {
                var data = parseFiles(abspath, type);
                if (data) {
                    extraData.push(data);
                }
                nameData = findJadeNames(abspath, type, namePath, extraData);
            });
            return nameData;
        };
        var findJadeNames = function (path, type, strToRemove, data) {
            var titleArray = path.split('/'),
            title = titleArray[(titleArray.length - 1)],
            newPath,
            dataObj;
            if (type === 'module' || type === 'component') {
                newPath = updatePath(path.replace('.jade', '-' + type + '.html'), strToRemove);
            }
            else {
                newPath = updatePath(path.replace('jade', 'html'), strToRemove);
            }
            if (title !== 'base.jade' && title !== 'all-components.jade' && title !== 'all-modules.jade' && title !== 'head.jade') {
                dataObj = {path: newPath, title: toTitleCase(convertDashes(title.replace('.jade', '')))};
                itemsArray.push(_.extend(dataObj, data[itemsArray.length]));
            }
            return {links: itemsArray};
        };
        var parseFiles = function (path, type) {
            var file = grunt.file.read(path),
            regex = /!##([^;]*?)##!/g,
            markupRegex = /"markup": "([^;]*?)"/g,
            markupRegexAfter = /,"markup":"([^;]*?)"/g,
            fileMarkupMatch = file.match(regex),
            fileData;
            if (fileMarkupMatch) {
                // Grab only first instance of data and remove !## ##! symbols
                fileMarkupMatch = removeSymbols(fileMarkupMatch[0]);
                // Find markup property, remove "markup" key as well as any double quotes (") so we have a clean set of markup
                var markup = fileMarkupMatch.match(markupRegex);
                // Check to see if markup exists
                if (markup) {
                    markup = markup[0].replace('"markup": ', '').replace(/\"/g, '');
                }
                else {
                    markup = 'p. No Markup Found';
                }
                // Remove all newline statements (\n), any extra space, and the entire "markup" key
                fileData = fileMarkupMatch.replace(/\n/g, '').replace(/ /g, '').replace(markupRegexAfter, '');
                if (type === 'module' || type === 'component') {
                    grunt.file.write(path.replace('.jade', '-' + type + '.jade'), 'extend ../templates/base\nblock template\n' + markup);
                }
                else if (type === 'template') {
                    var JSONData = getJSON(fileMarkupMatch),
                    fileTemp = file;
                    JSONData.blocks.forEach(function (element) {
                        var pattern = new RegExp('block ' + (element.blockName ? element.blockName : 'Block name not configured') + '\\s'),
                        fpoReplacement = '| <div class="fpo-container" style="width:' + (element.width ? element.width : '100px') + '; height:' + (element.height ? element.height : '100px') + ';"> <div class="fpo-background" style="width:100%;height:100%;background-color:' + (element.bgcolor ? element.bgcolor : '#f7f7f7') + '"><span class="fpo-name" style="line-height:' + (element.height ? element.height : '100px') + ';color:' + (element.textColor ? element.textColor : '#fff') + ';font-size:' + (element.fontSize ? element.fontSize : '10px') + ';text-align:center;display:inline-block;width:100%;">block ' + (element.blockName ? element.blockName : 'Block name not configured') + '</span></div></div>\n';
                        fileTemp = fileTemp.replace(pattern, fpoReplacement);
                    });
                    grunt.file.write(path, fileTemp);
                }
                else if (type !== 'page') {
                    grunt.log.error('Something went wrong when parsing jade files');
                }
                return getJSON(fileData);
            }
            else {
                grunt.log.writeln(['Skipping/No data found for: ' + path]);
            }
        };
        // Go through jade pages
        pageData = recursiveParse('dev/markup/pages', 'page', 'dev');
        // Go through jade templates
        templateData = recursiveParse('dev/.server/tmp/markup/templates', 'template', 'dev/.server/tmp');
        // Go through jade components
        componentData = recursiveParse('dev/.server/tmp/markup/components', 'component', 'dev/.server/tmp');
        // Go through jade modules
        moduleData = recursiveParse('dev/.server/tmp/markup/modules', 'module', 'dev/.server/tmp');
        // Setup all parsed data to be passed to jade templates
        dashData = {
            pages: pageData,
            templates: templateData,
            components: componentData,
            modules: moduleData
        };
        // Set dashboard data variable to be used by Jade task
        grunt.config(['dashboardData'], dashData);
        // Finish task
        done();
    });

    grunt.registerTask('server', 'Open a developement server within your browser', [
        'clean:server',
        'copy:server',
        'build-dashboard'<% if (jshint) { %>,
        'jshint:test'<% } %><% if (jsOption ==='Browserify') { %>,
        'browserify:server'<% } %>,
        'jade:server',
        'jade:serverDashboard',<% if (cssOption === 'LESS') { %>
        'less:server',
        'less:serverDashboard',<% } %><% if (cssOption === 'SASS') { %>
        'sass:server',
        'sass:serverDashboard',<% } %>
        'clean:temp',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',
        'build-dashboard',<% if (jshint) { %>
        'jshint:test',<% } %><% if (jsOption ==='Browserify') { %>
        'browserify:dist',<% } %>
        'imagemin',
        'svgmin',
        'jade:dist',
        'jade:distDashboard',<% if (cssOption === 'LESS') { %>
        'less:dist',
        'less:distDashboard',<% } %><% if (cssOption === 'SASS') { %>
        'sass:dist',
        'sass:distDashboard',
        'string-replace:sassMapFixDist',<% } %><% if (jsOption ==='RequireJS') { %>
        'requirejs',
        'string-replace:requireDist', /* change require main path to 'main.min'*/<% } %>
        'string-replace:indexLinkFix',
        'htmlmin:dist',
        'uglify',
        'clean:temp',
    ]);<% if (jshint) { %>

    grunt.registerTask('test', 'Peform tests on JavaScript', [
        'jshint:test',
        'connect:test',
        'mocha'
    ]);<% } %>

    grunt.registerTask('zip', 'Build a production ready version of your site and zip it up', [
        'build',
        'compress',
    ]);<% if (useFTP) { %>

    grunt.registerTask('deploy', 'Build a production ready version of your site and deploy it to a desired FTP server.', [
        'zip',
        'ftpinfo'
    ]);<% } %>

};