'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var config = {
    app: 'app',
    dist: 'dist',
    temp: '.tmp'
  };

  grunt.initConfig({
    config: config,
    // 监控文件变化并执行任务
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      js: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          // livereload 端口指定
          livereload: '<%= connect.options.livereload %>'
        },
        // 监视的文件？
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.temp %>/styles/{,*/}*.css',
          '<%= config.app %>/images/{,*/}*'
        ]
      }
    },

    // 本地静态服务器
    connect: {
      options: {
        // connect 启动的本地服务器地址
        hostname: 'localhost',
        // connect 启动的本地服务器端口号
        port: 9000,
        // livereload 功能所使用的端口号
        livereload: 35729
      },
      livereload: {
        options: {
          middleware: function (connect, options) {
            // 监控这两个目录
            return [
              connect.static(config.temp),
              connect.static(config.app)
            ];
          }
        }
      },
      dist: {
        optons: {
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },
    // 清理工程目录
    clean: {
      server: '<%= config.temp %>',
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.temp %>',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    }
  });

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'connect:livereload',
      'watch'
    ]);
  });
};
