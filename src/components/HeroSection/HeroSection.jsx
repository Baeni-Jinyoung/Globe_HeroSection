import React, { useRef, useEffect } from "react";
import {
  Scene,
  TextureLoader,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  SphereGeometry,
  ShaderMaterial,
  AdditiveBlending,
  BackSide,
  Group,
  BufferGeometry,
  PointsMaterial,
  Points,
  Vector2,
  Float32BufferAttribute,
} from "three";
import globe from "./img/globe.jpg";
import gsap from "gsap";
import { OrbitControls } from "@react-three/drei";

const HeroSection = ({}) => {
  const containerRef = useRef(null);
  const scene = new Scene();
  const mouse = new Vector2();
  useEffect(() => {
    const uniforms = {
      globeTexture: { value: new TextureLoader().load(globe) },
    };

    const vShader = `
      varying vec2 v_uv;
      varying vec3 vertexNormal;
      void main() {
         v_uv = uv;
         vertexNormal = normalize(normalMatrix * normal);
         gl_Position = projectionMatrix * modelViewMatrix *    vec4(position, 1.0);
    }`;

    const fShader = `
        uniform sampler2D globeTexture;
        varying vec2 v_uv;
        varying vec3 vertexNormal;
        void main(){
          float intensity = 1.05 - dot(vertexNormal,vec3(0.0,0.0,1.0));
          vec3 atmosphere = vec3(0.3,0.6,1.0) * pow(intensity,1.5);
          gl_FragColor = vec4(atmosphere + texture2D(globeTexture,v_uv).xyz,1.0);
        }`;

    const a_vShader = `
        varying vec3 vertexNormal;
        void main() {
           vertexNormal = normalize(normalMatrix * normal);
           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`;

    const a_fShader = `
        varying vec3 vertexNormal;
        void main(){
          float intensity = pow(0.78 - dot(vertexNormal,vec3(0,0,1.0)),2.0);
          gl_FragColor = vec4(0.3,0.2,1.0,1.0) * intensity;
        }`;
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new WebGLRenderer({
      antialias: true,
    });

    const container = containerRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    const geometry = new SphereGeometry(5, 50, 50);
    const material = new ShaderMaterial({
      vertexShader: vShader,
      fragmentShader: fShader,
      uniforms,
    });
    const sphere = new Mesh(geometry, material);

    scene.add(sphere);

    
    function onMouseMove( event ) {
      mouse.x = ( event.clientX / window.innerWidth )*2-1;
      mouse.y = ( event.clientY - window.innerHeight)*2+1;
    
    }
    const a_material = new ShaderMaterial({
      vertexShader: a_vShader,
      fragmentShader: a_fShader,
      blending: AdditiveBlending,
      side: BackSide,
    });
    const atmosphere = new Mesh(geometry, a_material);
    atmosphere.scale.set(1.1, 1.1, 1.1);

    scene.add(atmosphere);

    const group = new Group();
    group.add(sphere);
    scene.add(group);
    console.log(group);
    window.addEventListener( 'mousemove', onMouseMove, false );

    camera.position.z = 15;

    const starGeometry = new BufferGeometry();
    const starMaterial = new PointsMaterial({ color: 0xffffff });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(starVertices, 3)
    );
    const stars = new Points(starGeometry, starMaterial);
    scene.add(stars);

    function onWindowResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      renderer.setSize(newWidth, newHeight);
      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", onWindowResize, false);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.002;
      gsap.to(group.rotation,{
        y:mouse.x * 0.5,
        duration:2
      })
    }

    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, [scene]);

  return <div className="heroSection">
    <div className="heroSection_box" ref={containerRef}></div>
  </div> ;
};

export default HeroSection;




