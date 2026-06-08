/**
 * scene.js — Snake3D Three.js 场景渲染
 *
 * [成员B — 3D 场景渲染]
 * 职责：Three.js 场景搭建、蛇身渲染、食物渲染、
 *       网格地板、相机控制、粒子特效
 *
 * 依赖：Three.js (CDN 全局), GameEngine
 */

var Scene3D = (function () {
    'use strict';

    var scene, camera, renderer;
    var snakeMeshes = [];
    var foodMesh = null;
    var gridGroup = null;
    var floorPlane = null;
    var animationId = null;

    var GRID_SIZE = 18;
    var CENTER_OFFSET = (GRID_SIZE - 1) / 2;
    var SNAKE_Y = 0.25;
    var FOOD_Y = 0.4;

    function init(container) {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a1a);
        scene.fog = new THREE.Fog(0x0a0a1a, 20, 50);

        var aspect = container.clientWidth / container.clientHeight;
        camera = new THREE.PerspectiveCamera(50, aspect, 0.5, 100);
        camera.position.set(14, 18, 14);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        var ambientLight = new THREE.AmbientLight(0x404060, 0.8);
        scene.add(ambientLight);

        var dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
        dirLight.position.set(10, 20, 5);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 60;
        dirLight.shadow.camera.left = -15;
        dirLight.shadow.camera.right = 15;
        dirLight.shadow.camera.top = 15;
        dirLight.shadow.camera.bottom = -15;
        scene.add(dirLight);

        createFloor();
        createGrid();

        window.addEventListener('resize', onResize);
    }

    function createFloor() {
        var geometry = new THREE.PlaneGeometry(GRID_SIZE + 2, GRID_SIZE + 2);
        var material = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            roughness: 0.9,
            metalness: 0.1
        });
        floorPlane = new THREE.Mesh(geometry, material);
        floorPlane.rotation.x = -Math.PI / 2;
        floorPlane.position.y = -0.1;
        floorPlane.receiveShadow = true;
        scene.add(floorPlane);
    }

    function createGrid() {
        gridGroup = new THREE.Group();
        var lineMaterial = new THREE.LineBasicMaterial({
            color: 0x334455,
            transparent: true,
            opacity: 0.3
        });
        var half = GRID_SIZE / 2;
        for (var i = 0; i <= GRID_SIZE; i++) {
            var z = i - half;
            gridGroup.add(new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(-half, 0.01, z),
                    new THREE.Vector3(half, 0.01, z)
                ]), lineMaterial
            ));
        }
        for (var i = 0; i <= GRID_SIZE; i++) {
            var x = i - half;
            gridGroup.add(new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x, 0.01, -half),
                    new THREE.Vector3(x, 0.01, half)
                ]), lineMaterial
            ));
        }
        scene.add(gridGroup);
    }

    function startRenderLoop() {
        function animate() {
            animationId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }

    function stopRenderLoop() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    function onResize() {
        var container = renderer.domElement.parentElement;
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function dispose() {
        stopRenderLoop();
        if (renderer) {
            renderer.dispose();
            if (renderer.domElement.parentElement) {
                renderer.domElement.parentElement.removeChild(renderer.domElement);
            }
        }
        window.removeEventListener('resize', onResize);
    }

    return {
        init: init,
        update: function() {},
        startRenderLoop: startRenderLoop,
        stopRenderLoop: stopRenderLoop,
        emitFoodParticles: function() {},
        dispose: dispose
    };
})();
