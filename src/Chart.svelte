<script>
    import {onMount} from "svelte";
    import {Chart, registerables, LineController, LineElement, PointElement, LinearScale, Title} from "chart.js";

    let chart, ctx;

    onMount(async () => {
        Chart.register(...registerables)
        Chart.register(LineController, LineElement, PointElement, LinearScale, Title)
        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "KAIST",
                        backgroundColor: "#1487C899",
                        borderColor: "#1487C8",
                        data: [],
                        fill: 'origin',
                    },{
                        label: "POSTECH",
                        backgroundColor: "#C8015099",
                        borderColor: "#C80150",
                        data: [],
                        fill: 'origin',
                    },
                ]
            },
            options: {}
        });

        setInterval(() => {
            if(chart.data.labels.length > 10) {
                chart.data.labels.shift();
                chart.data.datasets[0].data.shift();
                chart.data.datasets[1].data.shift();
            }
            chart.data.labels.push('')
            chart.data.datasets[0].data.push(Math.random() * 100);
            chart.data.datasets[1].data.push(Math.random() * 100);
            chart.update();
        }, 1000);
    });

    function updateChart(data) {
        chart.data.datasets[0].data = data;
        chart.update();
    }
</script>

<canvas bind:this={ctx}></canvas>
