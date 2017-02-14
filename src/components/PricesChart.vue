<script>
    import Chart from 'vue-chartjs';
    export default Chart.Bar.extend({
        mixins: [Chart.mixins.reactiveProp],
        props: ['chartData', 'options'],
        mounted () {
            this.renderChart(this.chartData, this.options)
        }
    });
</script>
