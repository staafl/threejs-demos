var t = THREE;
var stats;
var statsEnabled = false;
function addStats() {
    stats = new Stats();
    if (statsEnabled) {
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        $("#container").get(0).appendChild( stats.domElement );
    }
}