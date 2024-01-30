<template><div id="threejs"></div></template>
<script lang="ts" setup>
import {useQuasar} from "quasar";

const emit = defineEmits<{
  ready: [];
}>();
const THREE = await import("three");
const loading = ref(true);
import {
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";
import {onMounted, ref} from "vue";
let threejs: HTMLDivElement;

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;
let light: PointLight;
let particles: Array<Particle> = [];
let pause = false;
let mouseX: number;
let mouseY: number;
type Particle = Mesh<SphereGeometry, MeshBasicMaterial> & {
  velocity: THREE.Vector3;
};

const initThreeJs = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2("#2D1B3F", 0.001);

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  threejs.appendChild(renderer.domElement);
  renderer.setClearColor(0x2d1b3f);

  light = new THREE.PointLight("#E0B1CB", 10, 1000);
  light.position.set(0, 0, 0);
  scene.add(light);

  const colors = ["#5D2E8C", "#BE95C4", "#2D1B3F"];
  particles = [];
  for (let i = 0; i < 200; i++) {
    const geometry = new THREE.SphereGeometry(0.1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: colors[i % colors.length],
    });
    const particle = new THREE.Mesh(geometry, material) as Particle;

    particle.position.x = (Math.random() - 0.5) * 10;
    particle.position.y = (Math.random() - 0.5) * 10;
    particle.position.z = (Math.random() - 0.5) * 10;

    particle.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
    );

    scene.add(particle as Object3D);
    particles.push(particle);
  }

  window.addEventListener("mousemove", onMouseMove, false);
  window.addEventListener("resize", onWindowResize);
};
const animate = () => {
  requestAnimationFrame(animate);
  if (pause) {
    renderer.render(scene, camera);
    return;
  }

  particles.forEach((particle) => {
    particle.position.add(particle.velocity);

    if (particle.position.x > 5 || particle.position.x < -5) {
      particle.velocity.x = -particle.velocity.x;
    }
    if (particle.position.y > 5 || particle.position.y < -5) {
      particle.velocity.y = -particle.velocity.y;
    }
    if (particle.position.z > 5 || particle.position.z < -5) {
      particle.velocity.z = -particle.velocity.z;
    }
  });

  light.position.x = mouseX;
  light.position.y = mouseY;

  renderer.render(scene, camera);
};

const onMouseMove = (event: MouseEvent) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
onMounted(() => {
  setTimeout(() => {
    threejs = document.getElementById("threejs")! as HTMLDivElement;
    initThreeJs();
    animate();
    emit("ready");
    loading.value = false;
  }, 2500);
});
</script>
