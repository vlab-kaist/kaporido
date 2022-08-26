<script lang="ts">
    import {
        BoxBufferGeometry,
        MeshPhongMaterial,
        Mesh,
        PointLight
    } from "https://unpkg.com/svelthree@latest/dist/svelthree.mjs";
    import {cubicInOut, quintOut} from "svelte/easing";
    import {tweened} from "svelte/motion";
    import {mapPlaceCount, mapSize, placeMargin, placePadding, placeSize, blockerCount} from "./position";
    import atmosphereMaterial from "../lib/atmosphereMaterial";
    import {selectedObj, activeObj} from './store'

    export let scene, position = [0, 0], vertical = true, kaist, postech, id, place;

    function getPosition(x, y, z = 0.25) {
        if (y < 0 || y > mapPlaceCount) return [
            (y - mapPlaceCount / 2 + 1) * placePadding,
            z,
            (x - blockerCount / 2 + 0.5) * (mapSize / blockerCount)
        ]
        return [
            (y - mapPlaceCount / 2 + (vertical && 1)) * placePadding,
            z,
            (x - mapPlaceCount / 2 + (!vertical && 1)) * placePadding
        ]
    }

    let pos = getPosition(position[0], position[1]), rot = [0, 0, 0];
    let lastPosition = position, lastVertical = -1;

    let blockerGeometry = new BoxBufferGeometry(1, 1, 1);
    const blockerMaterial = new MeshPhongMaterial({opacity: place ? 0 : 1, transparent: place});
    const placeMaterial = place ? new MeshPhongMaterial() : null;
    const atomoMaterial = atmosphereMaterial(0xffffff);
    const activeMaterial = atmosphereMaterial(0xede387);

    export const _pos1 = tweened(pos[0], {duration: 800, easing: cubicInOut}),
        _pos2 = tweened(pos[1], {duration: 3000, easing: quintOut}),
        _pos3 = tweened(pos[2], {duration: 800, easing: cubicInOut}),
        _rot1 = tweened(0, {duration: 1500, easing: cubicInOut}),
        _rot2 = tweened(0, {duration: 1500, easing: cubicInOut}),
        _rot3 = tweened(0, {duration: 1500, easing: cubicInOut});

    $: {
        if (position != lastPosition) {
            pos = getPosition((lastPosition[0] * 2 + position[0]) / 3, (lastPosition[1] * 2 + position[1]) / 3, 4);
            setTimeout(() => {
                pos = getPosition(position[0], position[1], 4);
                lastPosition = position;
                setTimeout(() => {
                    pos = getPosition(position[0], position[1]);
                }, 200);
            }, 100);
        }
    }

    $: {
        if (vertical !== lastVertical) {
            rot = [0, lastVertical ? 0 : Math.PI / 2, 0];
            setTimeout(() => {
                rot = [0, vertical ? 0 : Math.PI / 2, 0];
                lastVertical = vertical;
            }, 100);
        }
    }

    $: {
        $_pos1 = pos[0];
        $_pos2 = pos[1];
        $_pos3 = pos[2];
    }

    $: {
        $_rot1 = rot[0];
        $_rot2 = rot[1];
        $_rot3 = rot[2];
    }
</script>

{#if !place}
    <PointLight {scene} pos={[$_pos1, $_pos2+0.1, $_pos3]} intensity={0.25} color={kaist?0x2d8ad6:0xed4434}
                shadowMapSize={512 * 2}
                castShadow/>
{/if}
<Mesh
        {scene} castShadow receiveShadow name={id} geometry={blockerGeometry} material={blockerMaterial}
        pos={[$_pos1, $_pos2, $_pos3]} rot={[$_rot1, $_rot2, $_rot3]}
        scale={[placeMargin + placeSize * 2, kaist?0.51:0.5, placeMargin]}
        mat={{ color: kaist?0x2d8ad6:0xed4434 }}/>

{#if $activeObj === id}
    <Mesh
            {scene}
            geometry={blockerGeometry}
            material={activeMaterial}
            pos={[$_pos1, $_pos2, $_pos3]}
            rot={[$_rot1, $_rot2, $_rot3]}
            scale={[placeMargin + placeSize * 2+0.02, 0.52, placeMargin+0.02]}
            castShadow
            receiveShadow/>
{:else if $selectedObj === id}
    <Mesh
            {scene}
            geometry={blockerGeometry}
            material={place?placeMaterial:atomoMaterial}
            mat={{ color: 0xffffff }}
            pos={[$_pos1, $_pos2, $_pos3]}
            rot={[$_rot1, $_rot2, $_rot3]}
            scale={[placeMargin + placeSize * 2+0.02, 0.52, placeMargin+0.02]}
            castShadow
            receiveShadow/>
{/if}
