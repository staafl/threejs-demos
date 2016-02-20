
$(function () {
    var scene = new T.Scene();
    var camera = new T.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new T.WebGLRenderer();
    renderer.setClearColor(0x333333);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var axes = new T.AxisHelper(20);
    scene.add(axes);

    var plane = new T.Mesh(new T.PlaneGeometry(60, 20, 1, 1),
                           new T.MeshBasicMaterial({ color: 0xCCCCCC }));
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    scene.add(plane);
    
    var cube = new T.Mesh(new T.CubeGeometry(4, 4, 4),
                          new T.MeshBasicMaterial({ color: 0xFF0000, wireframe: false }));
    cube.position.x = - 4;
    cube.position.y = 3;
    cube.position.z = 0;
    
    scene.add(cube);
    
    var sphere = new T.Mesh(new T.SphereGeometry(4, 20, 20),
                            new T.MeshBasicMaterial({ color: 0x7777ff, wireframe: false }));
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;

    scene.add(sphere);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    $("#container").append(renderer.domElement);
    renderer.render(scene, camera);
});