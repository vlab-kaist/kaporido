<script lang="ts">
    import {
        Canvas,
        Scene,
        BoxBufferGeometry,
        WebGLRenderer,
        Fog,
    } from "https://unpkg.com/svelthree@latest/dist/svelthree.mjs";
    import Board from "./Board.svelte";
    import Blocker from "./Blocker.svelte";
    import Player from "./Player.svelte";
    import {onDestroy, onMount} from "svelte";
    import {
        rotation,
        cameraZ,
        kaistBlockers,
        postechBlockers,
        selectable,
        activeObj,
        selectedObj,
        currentObj
    } from "./store.js";
    import {blockerCount, mapPlaceCount} from "./position";
    import nupjukImage from '../nupjuk.png'

    const fog = new Fog(0x000000, 0.1, 1);

    let clientWidth, clientHeight, ctx, round = 0, click = false, drag = false, dragged = false, lastX, lastY, initX,
        initY, load = true, cursor, manual = false;

    onMount(() => {
        window.addEventListener("resize", onResize);
        onResize(null);

        setTimeout(() => {
            let temp = []
            for (let i = 0; i < blockerCount; i++) {
                temp.push({
                    position: [i, -2.2],
                    vertical: true,
                    length: 2,
                    id: i,
                });
            }
            $kaistBlockers = temp;
        }, 0)

        setTimeout(() => {
            let temp = []
            for (let i = blockerCount - 1; i >= 0; i--) {
                temp.push({
                    position: [i, mapPlaceCount + 0.2],
                    vertical: true,
                    length: 2,
                    id: blockerCount - i - 1,
                });
            }
            $postechBlockers = temp;
        }, 0)
    })

    onDestroy(() => {
        window.removeEventListener("resize", onResize);
    })

    function onResize(e): void {
        setTimeout(() => ctx.doResize(clientWidth, clientHeight))
    }

    $: {
        $rotation = round * Math.PI;
        $cameraZ = 0;
    }

    let cnt = 0, action, usedKaist = new Set(), usedPostech = new Set(),
        kaistPosition = [Math.floor(mapPlaceCount / 2), 0],
        postechPosition = [Math.floor(mapPlaceCount / 2), mapPlaceCount - 1];
    $: manual = true;

    $: {
        let _ = action;
        $activeObj = '';
        $selectedObj = '';
        $selectable = '';
        $currentObj = [];
    }

    $: {
        if (action === 'move') $selectable = 'b';
        if (action === 'block') {
            if (!$activeObj) $selectable = round % 2 ? 'k' : 'p';
            else $selectable = 'c';
        }
        if (action === 'turn') $selectable = 'b';
    }

    function blocked(blocker, pos, x, y) {
        for (const i of blocker) {
            if (pos[0] - 1 === x) {
                if (i.position[0] === pos[0] && i.position[1] === pos[1] && i.vertical) return true;
                if (i.position[0] === pos[0] && i.position[1] === pos[1] - 1 && i.length === 2 && i.vertical) return true;
            } else if (pos[0] + 1 === x) {
                if (i.position[0] === pos[0] + 1 && i.position[1] === pos[1] && i.vertical) return true;
                if (i.position[0] === pos[0] + 1 && i.position[1] === pos[1] + 1 && i.length === 2 && i.vertical) return true;
            } else if (pos[1] - 1 === y) {
                if (i.position[0] === pos[0] && i.position[1] === pos[1] && !i.vertical) return true;
                if (i.position[0] === pos[0] - 1 && i.position[1] === pos[1] && i.length === 2 && !i.vertical) return true;
            } else if (pos[1] + 1 === y) {
                if (i.position[0] === pos[0] && i.position[1] === pos[1] + 1 && !i.vertical) return true;
                if (i.position[0] === pos[0] - 1 && i.position[1] === pos[1] + 1 && i.length === 2 && !i.vertical) return true;
            }
        }
        return false
    }

    function validMove(pos, x, y) {
        if ((pos[0] - 1 === x && pos[1] === y) || (pos[0] + 1 === x && pos[1] === y) || (pos[0] === x && pos[1] - 1 === y) || (pos[0] === x && pos[1] + 1 === y)) {
            if (kaistPosition[0] === x && kaistPosition[1] === y) return false;
            if (postechPosition[0] === x && postechPosition[1] === y) return false;
            if (blocked($kaistBlockers, pos, x, y)) return false;
            if (blocked($postechBlockers, pos, x, y)) return false;
            return true;
        }
        return false;
    }

    function validBlock(blocks, v, x, y) {
        for (const i of blocks) {
            if (i.vertical && v) {
                if (i.position[0] === x) {
                    if (y <= i.position[1] && y + 1 >= i.position[1]) return false;
                    if (i.position[1] <= y && i.position[1] + i.length - 1 >= y) return false;
                }
            } else if (!i.vertical && !v) {
                if (i.position[1] === y) {
                    if (x <= i.position[0] && x + 1 >= i.position[0]) return false;
                    if (i.position[0] <= x && i.position[0] + i.length - 1 >= x) return false;
                }
            } else if (i.length === 2) {
                if (i.vertical && !v) {
                    if (i.position[0] - 1 === x && i.position[1] + 1 === y) return false;
                } else {
                    console.log(i.position, x, y)
                    if (i.position[0] + 1 === x && i.position[1] - 1 === y) return false;
                }
            }
        }
        return true;
    }

    $: {
        if (action === 'block' && $selectedObj) {
            if (!$activeObj) {
                if (round % 2 && usedKaist.has($selectedObj)) $currentObj = [];
                else if (!(round % 2) && usedPostech.has($selectedObj)) $currentObj = [];
                else $currentObj = [$selectedObj];
            } else {
                const [_, _v, _x, _y] = $selectedObj.split('_');
                let x = parseInt(_x), y = parseInt(_y), v = _v === 'v';
                if (!v) {
                    let t = x;
                    x = y;
                    y = t;
                }
                if (validBlock($kaistBlockers, v, x, y) && validBlock($postechBlockers, v, x, y)) $currentObj = [$selectedObj];
                else $currentObj = [];
            }
        }
        if (action === 'turn' && $selectedObj) {
            let [_, _x, _y] = $selectedObj.split('_')
            let x = parseInt(_x), y = parseInt(_y)
            x = Math.min(x, mapPlaceCount - 4)
            y = Math.min(y, mapPlaceCount - 4)
            let _curr = []
            for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) _curr.push(`b_${x + i}_${y + j}`)
            $currentObj = _curr
        }
        if (action === 'move' && $selectedObj) {
            let [_, _y, _x] = $selectedObj.split('_')
            let x = parseInt(_x), y = parseInt(_y)
            if (validMove((round % 2) ? kaistPosition : postechPosition, x, y)) $currentObj = [`b_${y}_${x}`]
            else $currentObj = []
        }
    }

    function rotate(blockers, x, y) {
        let _k = [];
        for (const i of blockers) {
            if (i.position[1] >= 0 && i.position[1] <= mapPlaceCount) {
                if (i.vertical && i.length === 2 && x <= i.position[0] && i.position[0] <= x + 4 && y - 1 === i.position[1]) {
                    _k.push({length: 1, vertical: true, position: [i.position[0], i.position[1]], id: i.id + '_'})
                    i.position = [i.position[0], i.position[1] + 1]
                    i.length = 1
                } else if (i.vertical && i.length === 2 && x <= i.position[0] && i.position[0] <= x + 4 && y + 3 === i.position[1]) {
                    _k.push({length: 1, vertical: true, position: [i.position[0], i.position[1] + 1], id: i.id + '_'})
                    i.position = [i.position[0], i.position[1]]
                    i.length = 1
                } else if (!i.vertical && i.length === 2 && y <= i.position[1] && i.position[1] <= y + 4 && x - 1 === i.position[0]) {
                    _k.push({length: 1, vertical: false, position: [i.position[0], i.position[1]], id: i.id + '_'})
                    i.position = [i.position[0] + 1, i.position[1]]
                    i.length = 1
                } else if (!i.vertical && i.length === 2 && y <= i.position[1] && i.position[1] <= y + 4 && x + 3 === i.position[0]) {
                    _k.push({length: 1, vertical: false, position: [i.position[0] + 1, i.position[1]], id: i.id + '_'})
                    i.position = [i.position[0], i.position[1]]
                    i.length = 1
                }
                if ((i.vertical && x <= i.position[0] && i.position[0] <= x + 4 && y <= i.position[1] && i.position[1] <= y + 3) ||
                    (!i.vertical && y <= i.position[1] && i.position[1] <= y + 4 && x <= i.position[0] && i.position[0] <= x + 3)) {
                    let [_x, _y] = i.position;
                    _x -= x + 2;
                    _y -= y + 2;
                    let __x = _y, __y = -_x;
                    _x = __x + x + 2;
                    _y = __y + y + 2 - (i.vertical ? 0 : i.length);
                    i.vertical = !i.vertical;
                    i.position = [_x, _y];
                }
            }
        }
        return [...blockers, ..._k];
    }

    function handleClick() {
        if (!$selectedObj || !click) return;
        if (action === 'block') {
            if (!$currentObj.length) return;
            if (!$activeObj) $activeObj = $selectedObj;
            else {
                const [_, _v, _x, _y] = $selectedObj.split('_');
                let x = parseInt(_x), y = parseInt(_y), v = _v === 'v';
                if (round % 2) {
                    $kaistBlockers[parseInt($activeObj.split('_')[1])].position = v ? [x, y] : [y, x];
                    $kaistBlockers[parseInt($activeObj.split('_')[1])].vertical = v;
                    usedKaist.add($activeObj);
                    usedKaist.add($activeObj + '_');
                } else {
                    $postechBlockers[parseInt($activeObj.split('_')[1])].position = v ? [x, y] : [y, x];
                    $postechBlockers[parseInt($activeObj.split('_')[1])].vertical = v;
                    usedPostech.add($activeObj);
                    usedKaist.add($activeObj + '_');
                }
                nextTurn();
            }
        }
        if (action === 'turn') {
            const [_, _y, _x] = $selectedObj.split('_');
            let x = parseInt(_x), y = parseInt(_y);
            x = Math.min(x, mapPlaceCount - 4)
            y = Math.min(y, mapPlaceCount - 4)
            $kaistBlockers = rotate($kaistBlockers, x, y);
            $postechBlockers = rotate($postechBlockers, x, y);
            nextTurn();
        }
        if (action === 'move') {
            if (!$currentObj.length) return;
            const [_, _y, _x] = $selectedObj.split('_');
            let x = parseInt(_x), y = parseInt(_y);
            if (round % 2) kaistPosition = [x, y];
            else postechPosition = [x, y];
            nextTurn();
        }
    }

    $: {
        if (!manual) nextTurn()
    }

    async function nextTurn() {
        action = ''
        ++cnt;
        if (!manual) {
            load = false;
            await new Promise(resolve => setTimeout(resolve, 10));
            if (cnt === 1) {
                $postechBlockers[0].position = [7, 7];
                $postechBlockers[0].vertical = false;
            }

            if (cnt === 3) {
                $postechBlockers[1].position = [3, 2];
            }

            if (cnt === 5) {
                $postechBlockers[2].position = [2, 2];
                $postechBlockers[2].vertical = false;
            }
        }

        setTimeout(() => {
            round++;
            load = true;
        }, 2000)
    }
</script>

<style lang="scss">
  main {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .button {
    backdrop-filter: blur(5px);
    border-radius: 5px;
    padding: 10px;
    background: #00000055;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &, & * {
      color: white;
    }

    &:hover, &.active {
      background: #ffffff55;

      &, & * {
        color: #000;
      }
    }
  }

  .toolbar {
    position: absolute;
    transition: all 0.2s ease-in-out;
    user-select: none;

    &.hide {
      opacity: 0;
      pointer-events: none;
    }

    &.credit {
      bottom: 20px;
      left: 20px;
      cursor: initial;
    }

    &.back {
      bottom: 20px;
      right: 20px;
      pointer-events: none;
    }

    &.load {
      bottom: 20px;
      right: 20px;
      pointer-events: none;
    }

    &.next {
      bottom: 20px;
      right: 20px;
    }

    &.action {
      bottom: 20px;
      right: 20px;
      display: flex;

      & > * {
        margin: 0 5px;
      }
    }

    &.turn {
      top: 40px;
      left: 20px;
      display: flex;

      & > div {
        width: 100px;
        height: 60px;
        margin: 50px 10px 0 10px;
        padding: 20px;
        border-radius: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        transition: all 0.2s ease-in-out;
        opacity: 0.5;
        backdrop-filter: blur(5px);

        &.active {
          height: 100px;
          margin: 10px 10px 0 10px;
          opacity: 1;

          & > img {
            margin-bottom: 25px;
          }
        }

        & > span {
          color: white;
          font-size: 26px;
        }

        & > img {
          width: 100%;
          height: 100px;
          margin-bottom: 10px;
          object-fit: cover;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
</style>

<main bind:clientWidth bind:clientHeight
      on:mousedown={(e)=>(click=true, drag=true, lastX=e.clientX, lastY=e.clientY, initX=e.clientX, initY=e.clientY)}
      on:mousemove={(e)=>(drag && (Math.abs(initX - e.clientX)>10 || Math.abs(initY - e.clientY)>10) && ((click=false), (dragged = true)))}
      on:mousemove={(e)=>(drag && ($rotation += (e.clientX - lastX) / 100) && (lastX = e.clientX))}
      on:mousemove={(e)=>(cursor={x:e.clientX, y:e.clientY})}
      on:mousemove={(e)=>(drag && ($cameraZ = Math.min(Math.max($cameraZ + (e.clientY - lastY) / 50, 0), Math.PI * 0.85)) && (lastY = e.clientY) && (dragged = true))}
      on:mouseup={()=>((click && (dragged && (++round, ((dragged = false) || --round)))))}
      on:mouseup={()=>(drag=false)}
      on:click={handleClick}>
    <Canvas let:sti w={clientWidth} h={clientHeight} bind:this={ctx}>
        <Scene {sti} let:scene id="scene1" props={{ background: 0x000000, fog }}>
            {#each $kaistBlockers as {position, vertical, length, id} (id)}
                <Blocker {scene} {position} {vertical} {length} kaist id={'k_'+id}}></Blocker>
            {/each}
            {#each $postechBlockers as {position, vertical, length, id} (id)}
                <Blocker {scene} {position} {vertical} {length} postech id={'p_'+id}></Blocker>
            {/each}
            <Board {scene} active={!dragged} {cursor}/>
            <Player {scene} kaist position={kaistPosition}/>
            <Player {scene} postech position={postechPosition}/>
        </Scene>
        <WebGLRenderer
                {sti}
                sceneId="scene1"
                camId="cam1"
                config={{ antialias: true, alpha: true }}
                shadowmap/>
    </Canvas>

    <div class="toolbar credit button">
        Made with <span>❤</span> by <a href="https://seo-rii.github.io">@seo-rii</a>
    </div>

    <div class="toolbar back button" class:hide={!dragged}>
        아무 곳이나 눌러서 게임으로 돌아가기
    </div>

    <div class="toolbar next button" class:hide={dragged || !load || manual} on:click={nextTurn}>
        다음으로
    </div>

    <div class="toolbar load button" class:hide={dragged || load}>
        수를 찾는 중...
    </div>

    <div class="toolbar action" class:hide={dragged || !load || !manual}>
        <span class="button" class:active={action==='move'} on:click={()=>(action='move')}>말 이동하기</span>
        <span class="button" class:active={action==='block'} on:click={()=>(action='block')}>블록 놓기</span>
        <span class="button" class:active={action==='turn'} on:click={()=>(action='turn')}>판 돌리기</span>
    </div>

    <div class="toolbar turn" class:hide={dragged}>
        <div class:active={round % 2} style="background: #1487C888;">
            <img src={nupjukImage}/>
            <span>KAIST</span>
        </div>
        <div class:active={(round + 1) % 2} style="background: #C8015088;">
            <img src="https://w.namu.la/s/006a9fbc14a31c4be81260b185c92483c23c35aac49903a99e6ff20f3e7556fbba9cf64c357da20fa50794492d3658349494db25efba04ab03a91ae9179ec5512d9d7be9d3266304fdf2d5cdd108b1aa2435b0d31feb62fcf5647619f09e372a"/>
            <span>POSTECH</span>
        </div>
    </div>
</main>
