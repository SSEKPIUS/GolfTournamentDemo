<script setup>
import * as echarts from 'echarts';

const props = defineProps({
    index: {
        type: Number,
        required: true
    }
});

onMounted(() => {
    const chartDom = document.getElementById(`minor-chart-${props.index}`);
    const myChart = echarts.init(chartDom);
    // This example requires ECharts v5.5.0 or later
    const option = {
        // Tooltip is enabled for a better user experience
        tooltip: {
            formatter: '{a} <br/>{b} : {c}'
        },
        series: [
            // Gauge chart for the first data point (value: 2)
            {
                name: 'Data Point 1',
                type: 'gauge',
                radius: '80%',
                // center: ['25%', '50%'], // Position it on the left
                max: 10, // Max value of the gauge, matching the original angleAxis max
                data: [{
                    value: 2,
                    name: 'Value: 2'
                }],
                progress: {
                    show: true,
                    roundCap: true,
                    itemStyle: {
                        color: '#4D8F44FF' // Color for the progress bar
                    }
                },
                axisLine: {
                    roundCap: true,
                    lineStyle: {
                        width: 10
                    }
                },
                axisTick: { show: false }, // Remove axis ticks
                splitLine: { show: false }, // Remove split lines
                axisLabel: { show: false }, // Remove axis labels
                pointer: { show: false }, // Hide the pointer/needle
                title: {
                    offsetCenter: [0, '80%'], // Position the title
                    color: '#666',
                    fontSize: 8
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '55%'], // Position the value
                    fontSize: 10,
                    fontWeight: 'bold',
                    formatter: '{value}'
                }
            },
            // Gauge chart for the second data point (value: 8)
            {
                name: 'Data Point 2',
                type: 'gauge',
                radius: '60%',
                // center: ['75%', '50%'], // Position it on the right
                max: 10, // Max value of the gauge, matching the original angleAxis max
                data: [{
                    value: 8,
                    name: 'Value: 8'
                }],
                progress: {
                    show: true,
                    roundCap: true,
                     width: 4, // Set the width of the progress bar
                    itemStyle: {
                        color: '#3D4246FF' // Color for the progress bar
                    }
                },
                axisLine: {
                    roundCap: true,
                    lineStyle: {
                        width: 10
                    }
                },
                axisTick: { show: false },
                splitLine: { show: false },
                axisLabel: { show: false },
                pointer: { show: false },
                title: {
                    offsetCenter: [0, '40%'], // Position the title
                    color: '#666',
                    fontSize: 8
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '10%'], // Position the value
                    fontSize: 10,
                    fontWeight: 'bold',
                    formatter: '{value}'
                }
            }
        ]
    };
    myChart.setOption(option);
});
</script>

<template>
    <div>
        <div :id="`minor-chart-${index}`" style="width: 100%; height:10em;"></div>
    </div>
</template>

<style lang="scss" scoped></style>