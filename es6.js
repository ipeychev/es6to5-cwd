'use strict';

var exec = require('child_process').exec;
var program = require('commander');

// 6to5 --modules amd -a ~/projects/es6-module-amd/examples/test.js

function list(value) {
    return value.split(',').map(String);
}

var curDir = process.cwd();

program
    .option('-o, --output [output folder]', 'output folder to store the generated AMD module. Default: current directory', String, curDir)
    .option('-d, --directory [working directory]', 'specifies the working directory. Default: current directory', String, curDir)
    .allowUnknownOption()
    .version('0.0.1')
    .parse(process.argv);

    var options = [
    '--modules',
    'amd',
    '-a',
    '-d',
    program.output,
    program.args.join(' ')
];

debugger;
exec('6to5 ' + options.join(' '), {
    cwd: program.directory
}, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);

    if (error !== null) {
        console.log('exec error: ' + error);
    }
});