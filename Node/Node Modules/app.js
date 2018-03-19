var my_module = require('./my_module')();     //notice the extra invocation parentheses!
console.log(my_module);
my_module.greet();
my_module.add(5,6);

/** You'll notice that we require() the string "./my_module". Two things to note:

1. There is no .js at the end of the file. The require method automatically looks for JavaScript files,
so we don't need to include a file extension.
2. The files app.js and my_module.js are in the same directory. 
3. Normally, the require() method looks for node modules that aren't in the same directory as the file that is running; 
by default, the require() method looks for the modules located in a folder called node_modules. 
To tell require() to look in the current directory (i.e. the folder that the file is located in) we have to include "./" in front of the file path. 
"./" (dot-slash) is the file path for the current director

*/