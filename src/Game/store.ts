import {writable} from "svelte/store";
import {expoOut} from "svelte/easing";
import {tweened} from "svelte/motion";

export const rotation = tweened(0, {duration: 1000, easing: expoOut});
export const cameraZ = tweened(0, {duration: 100, easing: expoOut});

export const _cameraP1 = tweened(0, {duration: 2000, easing: expoOut}),
    _cameraP2 = tweened(5, {duration: 2000, easing: expoOut}),
    _cameraP3 = tweened(0, {duration: 2000, easing: expoOut});

export const kaistBlockers = writable([]);
export const postechBlockers = writable([]);
