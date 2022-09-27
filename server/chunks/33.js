"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 8033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9365);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1217);
/* harmony import */ var _voxel_planet_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1663);





// import { loadGLTFModel } from '../lib/model'

let mixer;
const clock = new three__WEBPACK_IMPORTED_MODULE_2__.Clock();
function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}
function loadGLTFModel(scene, glbPath, options = {
    receiveShadow: true,
    castShadow: true
}) {
    const { receiveShadow , castShadow  } = options;
    return new Promise((resolve, reject)=>{
        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_4__/* .GLTFLoader */ .E();
        loader.load(glbPath, (gltf)=>{
            const obj = gltf.scene;
            obj.name = 'planet';
            obj.position.y = 0;
            obj.position.x = 0;
            obj.receiveShadow = receiveShadow;
            obj.castShadow = castShadow;
            scene.add(obj);
            mixer = new three__WEBPACK_IMPORTED_MODULE_2__.AnimationMixer(obj);
            mixer.clipAction(gltf.animations[0]).play();
            obj.traverse(function(child) {
                if (child.isMesh) {
                    child.castShadow = castShadow;
                    child.receiveShadow = receiveShadow;
                }
            });
            resolve(obj);
        }, undefined, function(error) {
            reject(error);
        });
    });
}
const VoxelPlanet = ()=>{
    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: renderer1 , 1: setRenderer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: _camera , 1: setCamera  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: target  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-0.5, 1.2, 0));
    const { 0: initialCameraPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));
    const { 0: scene  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_2__.Scene());
    const { 0: _controls , 1: setControls  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const { current: container  } = refContainer;
        if (container && renderer1) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            renderer1.setSize(scW, scH);
        }
    }, [
        renderer1
    ]);
    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { current: container  } = refContainer;
        if (container && !renderer1) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_2__.sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);
            // 640 -> 240
            // 8   -> 6
            const scale = scH * 0.005 + 4.8;
            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);
            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(13421772, 1);
            scene.add(ambientLight);
            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__/* .OrbitControls */ .z(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            setControls(controls);
            loadGLTFModel(scene, '/planet.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(()=>{
                animate();
                setLoading(false);
            });
            let req = null;
            let frame = 0;
            const animate = ()=>{
                //  const mixer = new THREE.AnimationMixer(loadGLTFModel.loader)
                //  const clips = scene.animations
                //  clips.forEach(function (clip) {
                //   mixer.clipAction(clip).play()
                // })
                req = requestAnimationFrame(animate);
                const delta = clock.getDelta();
                mixer.update(delta);
                frame = frame <= 100 ? frame + 1 : frame;
                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
                    camera.position.y = 10;
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }
                renderer.render(scene, camera);
            };
            return ()=>{
                console.log('unmount');
                cancelAnimationFrame(req);
                renderer.dispose();
            };
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener('resize', handleWindowResize, false);
        return ()=>{
            window.removeEventListener('resize', handleWindowResize, false);
        };
    }, [
        renderer1,
        handleWindowResize
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_voxel_planet_loader__WEBPACK_IMPORTED_MODULE_5__/* .PlanetContainer */ .q1, {
        ref: refContainer,
        children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_voxel_planet_loader__WEBPACK_IMPORTED_MODULE_5__/* .PlanetSpinner */ .LP, {
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoxelPlanet);


/***/ })

};
;