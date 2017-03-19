window.onload = function () {

    var Consumption_data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Consumption",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(0, 127, 255,0.4)",
                borderColor: "rgba(0, 127, 255,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(0, 127, 255,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(0, 127, 255,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
        }
    ]
    };

    var Production_data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Production",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(0, 127, 255,0.4)",
                borderColor: "rgba(0, 127, 255,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(0, 127, 255,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(0, 127, 255,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
        }
    ]
    };

    var Frequency_data = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
            {
                label: "Frequency",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(0, 127, 255, 0.4)",
                borderColor: "rgba(0, 127, 255, 1)", 
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(0, 127, 255, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "rgba(0, 127, 255, 0.4)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [49.986359, 49.98941, 50.055943, 49.989716, 49.964382, 49.964382, 49.975674],
                spanGaps: true,
        }
    ]
    };

    var options = {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    max: 550
                }
            }],
            xAxes: [{
                display: false,
            }]
        }
    };

    var Frequency_options = {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMax: 50.5,
                    suggestedMin:49.5
                }
            }],
            xAxes: [{
                display: false,
            }]
        }
    };

    var ctx = document.getElementById("Consumption");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: Consumption_data,
        options: options
    });

    var ctx = document.getElementById("Production");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: Production_data,
        options: options
    });

    var ctx = document.getElementById("Frequency");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: Frequency_data,
        options: Frequency_options
    });
    
      var ctx = document.getElementById("Prod_surplus");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: Frequency_data,
        options: Frequency_options
    });
};