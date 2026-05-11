
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// ======================================================
// SCENE
// ======================================================

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x001122);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    antialias:true
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);


// ======================================================
// LIGHTS
// ======================================================

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.6
);

scene.add(ambientLight);

const directionalLight =
new THREE.DirectionalLight(0xffffff,1);

directionalLight.position.set(10,20,10);

directionalLight.castShadow = true;

scene.add(directionalLight);


// ======================================================
// TEXTURES
// ======================================================

const textureLoader = new THREE.TextureLoader();


// WOOD TEXTURE
const woodTexture = textureLoader.load(
   'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/dark-brown-wood-texture-background-with-design-space.jpg'

);

woodTexture.wrapS = THREE.RepeatWrapping;
woodTexture.wrapT = THREE.RepeatWrapping;
woodTexture.repeat.set(1,1);


// DRAWER TEXTURE
const horizontalTexture = textureLoader.load(
    'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/dark-brown-wood-texture-background-with-design-space.jpg'

);








horizontalTexture.wrapS = THREE.RepeatWrapping;
horizontalTexture.wrapT = THREE.RepeatWrapping;
horizontalTexture.repeat.set(1,1);


// HANDLE TEXTURE
const handleTexture = textureLoader.load(
'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/main/texture/bar.jpg'
);

handleTexture.wrapS = THREE.RepeatWrapping;
handleTexture.wrapT = THREE.RepeatWrapping;
handleTexture.repeat.set(1,1);


// ======================================================
// MATERIALS
// ======================================================

const wardrobeMaterial =
new THREE.MeshStandardMaterial({
    map:woodTexture
});

const drawerMaterial =
new THREE.MeshStandardMaterial({
    map:horizontalTexture
});

const handleMaterial =
new THREE.MeshStandardMaterial({
    map:handleTexture
});




//================================= =============================== Nightstand
 
        const Nightstand_Group = new THREE.Group();
        scene.add(Nightstand_Group);

// LEFT Nightstand
        const Nightstand_leftGeometry = new THREE.BoxGeometry(0.1, 4.5, 6);
        const Nightstand_left = new THREE.Mesh(
        Nightstand_leftGeometry,
        wardrobeMaterial        );

        Nightstand_left.position.set(-3, 3.75, -3);
        Nightstand_Group.add(Nightstand_left);

// RIGHT Nightstand
        const Nightstand_right = Nightstand_left.clone();
        Nightstand_Group.add(Nightstand_right);
        Nightstand_right.position.set(3, 3.75, -3);

// BACK Nightstand
        const Nightstand_back = Nightstand_left.clone();
        Nightstand_Group.add(Nightstand_back);
        Nightstand_back.position.set(0, 3.75, -6);
        Nightstand_back.rotation.y = Math.PI / 2;

// ROOF Nightstand
        const Nightstand_roofGeometry = new THREE.BoxGeometry(0.1, 6.4, 6.4);
        const Nightstand_roof = new THREE.Mesh(
         Nightstand_roofGeometry,
         wardrobeMaterial
        );

        Nightstand_roof.position.set(0, 6, -3);
        Nightstand_Group.add(Nightstand_roof);
        Nightstand_roof.rotation.z = Math.PI / 2;

// ================================= =============================== Nightstand DRAWER I

 // FRONT SIDE (NIGHTSTAND DRAWER I)
        const Nightstand_drawer_Group = new THREE.Group();
        scene.add(Nightstand_drawer_Group);

        const Nightstand_drawer_Geometry = new THREE.BoxGeometry(6, 2, 0.1);
        const Nightstand_drawer_front = new THREE.Mesh(
        Nightstand_drawer_Geometry,
        drawerMaterial
        );

        Nightstand_drawer_front.position.set(0, 5, 0);
        Nightstand_drawer_Group.add(Nightstand_drawer_front);

// LEFT SIDE (NIGHTSTAND DRAWER)
        const Nightstand_drawer_leftGeometry = new THREE.BoxGeometry(6, 1.5, 0.1);
        const Nightstand_drawer_left = new THREE.Mesh(
         Nightstand_drawer_leftGeometry,
         wardrobeMaterial
        );

        Nightstand_drawer_left.rotation.y = Math.PI / 2;
        Nightstand_drawer_left.position.set(-2.95, 4.75, -3);
        Nightstand_drawer_Group.add(Nightstand_drawer_left);

//RIGHT SIDE (NIGHTSATND DRAWER)
        const Nightstand_drawer_right = Nightstand_drawer_left.clone();
        Nightstand_drawer_Group.add(Nightstand_drawer_right);
        Nightstand_drawer_right.position.set(2.95, 4.75, -3);


// BACK SIDE (NIGHTSTAND DRAWER)
        const Nightstand_drawer_back = Nightstand_drawer_left.clone();
        Nightstand_drawer_Group.add(Nightstand_drawer_back);
        Nightstand_drawer_back.position.set(0, 4.75, -5.5 );
        Nightstand_drawer_back.rotation.y = Math.PI;

// BASE SAID (NIGHTSTAND DRAWER)
        const Nightstand_drawer_baseGeometry = new THREE.BoxGeometry(6, 6, 0.1);
        const Nightstand_drawer_base = new THREE.Mesh(
        Nightstand_drawer_baseGeometry,
        drawerMaterial
        );

        Nightstand_drawer_base.position.set(0, 4.1, -3);
        Nightstand_drawer_Group.add(Nightstand_drawer_base);
        Nightstand_drawer_base.rotation.x = Math.PI / 2;
        Nightstand_Group.add(Nightstand_drawer_Group);
// ================================= =============================== Nightstand DRAWER II
        const Nightstand_drawer_Group_II = Nightstand_drawer_Group.clone();
        Nightstand_drawer_Group_II.position.set(0, -2, 0);
        scene.add(Nightstand_drawer_Group_II);
        Nightstand_Group.add(Nightstand_drawer_Group_II);


        Nightstand_Group.position.set(0,-0.7,-7.445);
        Nightstand_Group.scale.set(0.5,0.5,0.4);



// ================================= =============================== NIGHTSTAND HANDLE TEXTURE



        const Nightstand_textureLoader =
        new THREE.TextureLoader();

        const Nightstand_handleTexture =
        Nightstand_textureLoader.load(
        'https://raw.githubusercontent.com/Essabki/Three.js_wardrobe/refs/heads/main/texture/bar.jpg'
        );



        Nightstand_handleTexture.wrapS = THREE.RepeatWrapping;
        Nightstand_handleTexture.wrapT = THREE.RepeatWrapping;
        Nightstand_handleTexture.repeat.set(0, 0);
// ================================= =============================== HANDLE GEOMETRY (BOX)

        const Nightstand_handleGeometry =
        new THREE.BoxGeometry(
        1.5,  // width (length of handle)
        0.2,  // height (thin)
        0.1   // depth (thin)
        );

// ================================= =============================== HANDLE MATERIAL (TEXTURE ONLY)

        const Nightstand_handleMaterial =
        new THREE.MeshBasicMaterial({
        map: Nightstand_handleTexture
        });

// ================================= =============================== DRAWER HANDLE I

        const Nightstand_drawerHandle =
         new THREE.Mesh(
        Nightstand_handleGeometry,
        Nightstand_handleMaterial
        );

        Nightstand_drawerHandle.position.set(
         0,
         5,
         0.1
        );

        Nightstand_drawer_Group.add(
        Nightstand_drawerHandle
        );

// ================================= =============================== DRAWER HANDLE II

        const Nightstand_drawerHandle_II =
         Nightstand_drawerHandle.clone();

        Nightstand_drawer_Group_II.add(
          Nightstand_drawerHandle_II
        );







    Nightstand_Group.position.set(0,-4,0);
    Nightstand_Group.scale.set(2,2,2);




// ======================================================
// AXES
// ======================================================

    //scene.add(new THREE.AxesHelper(5));


// ======================================================
// CONTROLS
// ======================================================

const controls =
new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;

controls.zoomToCursor = true;

controls.enablePan = true;

controls.screenSpacePanning = true;

controls.minDistance = 2;

controls.maxDistance = 50;

controls.target.set(0,3,0);

camera.position.set(20,10,30);


// ======================================================
// RAYCASTER
// ======================================================

const raycaster =
new THREE.Raycaster();

const mouse =
new THREE.Vector2();

let Nightstand1Open = false;
let Nightstand2Open = false;

window.addEventListener(
    "click",
    onMouseClick
);


function onMouseClick(event){

    mouse.x =
    (event.clientX / window.innerWidth)
    * 2 - 1;

    mouse.y =
    -(event.clientY / window.innerHeight)
    * 2 + 1;

    raycaster.setFromCamera(
        mouse,
        camera
    );

    const intersects =
    raycaster.intersectObjects(
        [
            Nightstand_drawer_Group,
            Nightstand_drawer_Group_II
        ],
        true
    );

    if(intersects.length > 0){

        let obj =
        intersects[0].object;

        while(obj.parent){

            if(
                obj ===
                Nightstand_drawer_Group
            ){

                Nightstand1Open =
                !Nightstand1Open;

                break;
            }

            if(
                obj ===
                Nightstand_drawer_Group_II
            ){

                Nightstand2Open =
                !Nightstand2Open;

                break;
            }

            obj = obj.parent;
        }
    }
}


// ======================================================
// ANIMATION
// ======================================================

const animationSpeed = 0.08;

function animate(){

    requestAnimationFrame(
        animate
    );

    controls.update();


// DRAWER I
Nightstand_drawer_Group.position.z =
THREE.MathUtils.lerp(
    Nightstand_drawer_Group.position.z,
    Nightstand1Open ? 4 : 0,
    animationSpeed
);


// DRAWER II
Nightstand_drawer_Group_II.position.z =
THREE.MathUtils.lerp(
    Nightstand_drawer_Group_II.position.z,
    Nightstand2Open ? 4 : 0,
    animationSpeed
);


renderer.render(
    scene,
    camera
);

}

animate();


// ======================================================
// RESIZE
// ======================================================

window.addEventListener(
'resize',
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

});