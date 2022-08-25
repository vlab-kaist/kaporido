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
    import {onDestroy, onMount} from "svelte";
    import {rotation, cameraZ, kaistBlockers, postechBlockers} from "./store.js";
    import {blockerCount, mapPlaceCount, mapSize} from "./position";

    const fog = new Fog(0x000000, 0.1, 1);

    let clientWidth, clientHeight, ctx, round = 0, click = false, drag = false, dragged = false, lastX, lastY;

    onMount(() => {
        window.addEventListener("resize", onResize);
        onResize(null);

        setTimeout(() => {
            let temp = []
            for (let i = 0; i < blockerCount; i++) {
                temp.push({
                    position: [i, -2.2],
                    vertical: true,
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
                    id: i,
                });
            }
            $postechBlockers = temp;
        }, 0)

        setTimeout(() => {
            $postechBlockers[0].position = [7, 7];
            $postechBlockers[0].vertical = false;
        }, 2000)

        setTimeout(() => {
            $kaistBlockers[0].position = [3, 2];
        }, 7000)

        setTimeout(() => {
            $postechBlockers[1].position = [2, 2];
            $postechBlockers[1].vertical = false;
        }, 12000)
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
</script>

<style lang="scss">
  main {
    height: 100%;
    position: relative;
  }

  .toolbar {
    position: absolute;
    transition: all 0.2s ease-in-out;

    &.hide {
      opacity: 0;
    }

    &.back {
      bottom: 20px;
      width: 100%;
      text-align: center;
    }

    &.turn {
      top: 20px;
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

<main bind:clientWidth bind:clientHeight on:mousedown={(e)=>(click=true, drag=true, lastX=e.clientX, lastY=e.clientY)}
      on:mousemove={()=>(click=false)} on:click={()=>(click && ++round && (dragged && ((dragged = false) || --round)))}
      on:mousemove={(e)=>(drag && ($rotation += (e.clientX - lastX) / 100) && (lastX = e.clientX) && (dragged = true))}
      on:mousemove={(e)=>(drag && ($cameraZ = Math.min(Math.max($cameraZ + (e.clientY - lastY) / 50, 0), Math.PI * 0.85)) && (lastY = e.clientY) && (dragged = true))}
      on:mouseup={()=>(drag=false)}>
    <Canvas let:sti w={clientWidth} h={clientHeight} bind:this={ctx}>
        <Scene {sti} let:scene id="scene1" props={{ background: 0x000000, fog }}>
            {#each $kaistBlockers as {position, vertical, id} (id)}
                <Blocker {scene} {position} {vertical} kaist></Blocker>
            {/each}
            {#each $postechBlockers as {position, vertical, id} (id)}
                <Blocker {scene} {position} {vertical} postech></Blocker>
            {/each}
            <Board {scene} active={!dragged}/>
        </Scene>
        <WebGLRenderer
                {sti}
                sceneId="scene1"
                camId="cam1"
                config={{ antialias: true, alpha: true }}
                shadowmap/>
    </Canvas>

    <div class="toolbar back" class:hide={!dragged}>
        아무 곳이나 눌러서 게임으로 돌아가기
    </div>

    <div class="toolbar turn" class:hide={dragged}>
        <div class:active={round % 2} style="background: #1487C8;">
            <img src="https://pbs.twimg.com/media/DpJErdpU0AYKMwu.jpg:large"/>
            <span>KAIST</span>
        </div>
        <div class:active={(round + 1) % 2} style="background: #C80150;">
            <img src="https://w.namu.la/s/006a9fbc14a31c4be81260b185c92483c23c35aac49903a99e6ff20f3e7556fbba9cf64c357da20fa50794492d3658349494db25efba04ab03a91ae9179ec5512d9d7be9d3266304fdf2d5cdd108b1aa2435b0d31feb62fcf5647619f09e372a"/>
            <span>POSTECH</span>
        </div>
    </div>
</main>
