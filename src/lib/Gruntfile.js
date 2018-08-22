module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["../index.html", "../scripts/**/*.js", "../styles/**/*.css", "!node_modules/**/*.js"],
                tasks: ["eslint", "browserify", "uglify", "copy"],
                options: {
                    spawn: false,
                },
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true,
                    paths: ["../scripts", ".node_modules"],
                }
            },
            dist: {
                files: {
                    "../../dist/bundle.js": ["../scripts/main.js"]
                }
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: "../../dist",
                    src: "bundle.js",
                    dest: "../../dist",
                    ext: ".min.js"
                }]
            }
        },
        eslint: {
            src: ["../scripts/**/*.js", "!node_modules/**/*.js"]
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: "..",
                    src: "./styles/*",
                    dest: "../../dist/"
                }, {
                    expand: true,
                    cwd: "..",
                    src: "./index.html",
                    dest: "../../dist/"
                }]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify-es");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.registerTask("default", ["eslint", "browserify", "uglify", "copy", "watch"]);
};
