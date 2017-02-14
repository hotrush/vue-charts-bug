<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <prices-chart :chartData="pricesChart" :options="options"></prices-chart>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                pricesChart: {
                    labels: [],
                    datasets: [
                        {
                            type: 'line',
                            label: 'Min',
                            data: []
                        },
                        {
                            type: 'line',
                            label: 'Max',
                            data: []
                        },
                        {
                            type: 'line',
                            label: 'Avg',
                            data: []
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }

        },
        mounted() {
            this.loadData();
        },
        methods: {
            loadData() {
                this.$http.get('https://hotrush.github.io/vue-charts-bug/data.json', {})
                    .then(function(response) {

                        var pricesChartData = _.merge({}, this.pricesChart);
                        pricesChartData.labels = _.keys(response.body.prices_chart);
                        pricesChartData.datasets[0].data = _.map(response.body.prices_chart, 'min_price_per_day');
                        pricesChartData.datasets[1].data = _.map(response.body.prices_chart, 'max_price_per_day');
                        pricesChartData.datasets[2].data = _.map(response.body.prices_chart, 'avg_price_per_day');
                        this.pricesChart = pricesChartData;

                    }, function(error) {
                        // @todo log error
                        console.log(error);
                    });
            }
        }
    }
</script>
