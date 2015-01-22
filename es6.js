'use strict';

var exec = require('child_process').exec;
var program = require('commander');

var curDir = process.cwd();

program
    .option('-o, --output [output folder]', 'output folder to store the generated AMD module. Default: current directory', String, curDir)
    .option('-d, --directory [working directory]', 'specifies the working directory. Default: current directory', String, curDir)
    .allowUnknownOption()
    .version('0.0.1')
    .parse(process.argv);


// Example:
// node-debug es6.js --modules amd -a -o ~/Desktop/output -d /Users/iliyan/projects/es6-module-amd/examples /Users/iliyan/projects/es6-module-amd/examples
// -d to 6to5 means that this will be the output directory, in our program it is specified via -o option and this is ~/Desktop/output
// -d for us means the working directory - in the example above: /Users/iliyan/projects/es6-module-amd/examples
// finally, we pass program.output as list of files and folders to be processed there
    var options = [
    '--modules',
    'amd',
    '-a',
    '-d',
    program.output,
    program.args.join(' ')
];

exec('6to5 ' + options.join(' '), {
    cwd: program.directory
}, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);

    if (error !== null) {
        console.log('exec error: ' + error);
    }
});