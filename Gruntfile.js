/**
 * Created by tinoll on 2017. 2. 11..
 */

module.exports = function(grunt){
    //프로젝트 구성
    grunt.initConfig({
        //작업설정
        concat : {
            release : {
                src : ['js/values.js','js/prompt.js'],
                dest : 'release/main.js'
            }
        },
        copy : {
            release : {
                src : 'manifest.json',
                dest : 'release/manifest.json'
            }
        },
        jshint : {
            files : ['js/values.js', 'js/prompt.js']
        },
        watch : {
            files : ['<%= jshint.files %>','manifest.json'],
            tasks : ['default']
        }

    });

    //그런트 플러그인을 로드한다
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch'); //파일이 변경될때마다 패키징하도록 설정하는 부분 

    //작업을 등록한다
    grunt.registerTask('default',['jshint','concat','copy']);
};