<script lang="ts">
    import Chart from './Chart.svelte'
    import Game from "./Game/index.svelte";
</script>

<style lang="scss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  :global(body, html, #app) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    width: 100%;
    height: 100%;
  }

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
</style>

<main>
    <Game/>
</main>

<svelte:head>
    <title>카포리도</title>
</svelte:head>
