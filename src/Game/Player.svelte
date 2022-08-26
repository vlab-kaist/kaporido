<script lang="ts">
    import {
        CylinderGeometry,
        MeshPhongMaterial,
        Mesh
    } from "https://unpkg.com/svelthree@latest/dist/svelthree.mjs";
    import {blockerCount, mapPlaceCount, mapSize, placePadding, placeSize} from './position'
    import {tweened} from "svelte/motion";
    import {cubicInOut, quintOut} from "svelte/easing";

    const cylinderGeometry = new CylinderGeometry(0.3, 0.3, 2, 32);
    const cylinderMaterial = new MeshPhongMaterial();

    export let scene, position, kaist, postech;
    let pos = [0, 0, 0];

    function getPosition(x, y, z = 0) {
        return [
            (y - mapPlaceCount / 2 + 0.5) * placePadding,
            z,
            (x - mapPlaceCount / 2 + 0.5) * placePadding
        ]
    }

    $: pos = getPosition(position[0], position[1]);

    export const _pos1 = tweened(pos[0], {duration: 800, easing: cubicInOut}),
        _pos2 = tweened(pos[1], {duration: 3000, easing: quintOut}),
        _pos3 = tweened(pos[2], {duration: 800, easing: cubicInOut})


    $: {
        $_pos1 = pos[0];
        $_pos2 = pos[1];
        $_pos3 = pos[2];
    }
</script>

<Mesh
        {scene} castShadow receiveShadow geometry={cylinderGeometry} material={cylinderMaterial}
        pos={[$_pos1, $_pos2, $_pos3]}
        scale={[placeSize, placeSize / 2, placeSize]}
        mat={{ color: kaist?0x2d8ad6:0xed4434 }}/>
