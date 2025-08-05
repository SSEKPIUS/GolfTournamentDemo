<script setup>
import * as echarts from 'echarts';

onMounted(() => {
    const chartDom = document.getElementById('main-chart');
    const myChart = echarts.init(chartDom);
    // This example requires ECharts v5.5.0 or later
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '10%',
            left: 'center'
        },
        series: [
            {
                name: 'Score Distribution',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '70%'],
                // adjust the start and end angle
                startAngle: 180,
                endAngle: 360,
                data: [
                    { value: 0, name: 'Eagles' },
                    { value: 18, name: 'Birdies' },
                    { value: 44, name: 'Par' },
                    { value: 9, name: 'Bogeys' },
                    { value: 1, name: 'Double Bogeys' }
                ]
            }
        ]
    };
    myChart.setOption(option);
});
</script>

<template>
    <div>
        <div id="main-chart" style="width: 100%; height: 400px;"></div>
    </div>
</template>

<style lang="scss" scoped></style>