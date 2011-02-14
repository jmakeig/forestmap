Number.prototype.pad = function(length, char) {
	var str = '' + this;
	while (str.length < length) {
		str = char + str;
	}
	return str;
}

var flare = {};
flare.hosts = {};
for(var i = 1; i < 6; i++) {
	var forests = {}
	var max = Math.floor(Math.random()*11) + 1;
	for(var j = 0; j < max; j++) {
		forests["forest" + j.pad(3, "0")] = Math.floor(Math.random()*800) + 1;
	}
	flare.hosts["host" + i.pad(3, "0")] = forests;
}

console.dir(flare);
