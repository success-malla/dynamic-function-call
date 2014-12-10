function circle(d1,d2){
console.log("Circle draw with params: "+d2);
}

function rectangle(d1,d2){
console.log("Rectangle : "+d1);
}

function l(param){
console.log(param);
}

function handle(param,callback){
console.log("Data : "+param+ " , Callback: "+callback);
}

var shape = function(data){
	return function(handler) {
		try{
			var dyFunc = eval(handler);
			if(typeof dyFunc=="function"){
				
				return dyFunc.apply(null,data);
			}
		}catch(e){
			throw "Function does not exist";
		}
	}
};

var plot = shape([1,2]);
plot('circle');

plot("rectangle");
plot("sakku");
