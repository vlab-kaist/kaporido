<script lang="ts">
    import {
        Canvas,
        Scene,
        PerspectiveCamera,
        DirectionalLight,
        AmbientLight,
        BoxBufferGeometry,
        Mesh,
        MeshStandardMaterial,
        MeshPhongMaterial,
        WebGLRenderer,
        DoubleSide,
        MathUtils,
        PlaneBufferGeometry,
    } from "https://unpkg.com/svelthree@latest/dist/svelthree.mjs";
    import {_cameraP1, _cameraP2, _cameraP3, cameraZ, rotation} from "./store.js";
    import {mapPlaceCount, placePadding, placeSize, mapSize, containerWidth, containerHeight} from "./position";

    let cameraPosition = [], cameraLookAt = [0, 0, 0];

    export let scene, active;

    $: {
        cameraPosition = [7 * Math.exp(-$cameraZ) * Math.cos($rotation) + 0.2, -9 + 12 * Math.exp(0.5 * Math.sin($cameraZ)), 7 * Math.exp(-$cameraZ) * Math.sin($rotation)]
        console.log(cameraPosition)
    }

    $: {
        $_cameraP1 = cameraPosition[0];
        $_cameraP2 = cameraPosition[1];
        $_cameraP3 = cameraPosition[2];
    }

    $: {
        let _;
        _ = $_cameraP1;
        _ = $_cameraP2;
        _ = $_cameraP3;
        cameraLookAt = [0, 0, 0];
    }


    let floorGeometry = new PlaneBufferGeometry(4, 4, 1);
    let floorMaterial = new MeshStandardMaterial();
    let boardGeometry = new BoxBufferGeometry(1, 1, 1);
    let boardMaterial = new MeshPhongMaterial();
    let placeGeometry = [];
    let placeMaterial = [];

    for (let i = 0; i < mapPlaceCount; i++) {
        placeGeometry[i] = []
        placeMaterial[i] = []
        for (let j = 0; j < mapPlaceCount; j++) {
            placeGeometry[i][j] = new BoxBufferGeometry(1, 1, 1);
            placeMaterial[i][j] = new MeshPhongMaterial();
        }
    }
</script>


<PerspectiveCamera {scene} id="cam1" pos={[$_cameraP1, $_cameraP2, $_cameraP3]}
                   lookAt={cameraLookAt}/>
<AmbientLight {scene} intensity={0.25} color={0x333333}/>
<DirectionalLight {scene} pos={[3, 5, 1]} color={0xed4434}
                  intensity={0.5}
                  shadowMapSize={512 * 8}
                  castShadow/>
<DirectionalLight {scene} pos={[-3, 5, -1]} color={0x2d8ad6}
                  intensity={0.5}
                  shadowMapSize={512 * 8}
                  castShadow/>

<Mesh
        {scene}
        geometry={floorGeometry}
        material={floorMaterial}
        mat={{ roughness: 0.5, metalness: 0.3, side: DoubleSide, color: 0xffffff }}
        pos={[0, -0.501, 0]}
        rot={[MathUtils.degToRad(-90), 0, 0]}
        scale={[100, 100, 100]}
        castShadow
        receiveShadow/>
<Mesh
        {scene}
        geometry={boardGeometry}
        material={boardMaterial}
        mat={{ color: active?0x444444:0x444444 }}
        pos={[0, 0, 0]}
        rot={[0, 0, 0]}
        scale={[containerHeight, 0.2, containerWidth]}
        castShadow
        receiveShadow/>

{#each placeGeometry as row, i}}
    {#each row as place, j}
        <Mesh
                {scene}
                geometry={place}
                material={placeMaterial[i][j]}
                mat={{ color: active?0xdddddd:0xdddddd }}
                pos={[(i - mapPlaceCount / 2 + 0.5) * placePadding, 0.1, (j - mapPlaceCount / 2 + 0.5) * placePadding]}
                rot={[0, 0, 0]}
                scale={[placeSize, 0.2, placeSize]}
                receiveShadow/>
    {/each}
{/each}
