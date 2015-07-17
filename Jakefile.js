var uglifyJS=require('uglify-js');
var sys=require('sys');

task('default',[],function(params){
	console.log(sys.inspect(arguments));
});

var result=uglifyJS.minify("./node_modules/YY.js");

console.log(result.code);

jake.exec("browserify index.js -o YY-src.js");