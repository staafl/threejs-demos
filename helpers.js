var t = THREE;

function addStats() {
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	$("#container").appendChild( stats.domElement );
}