$(document).ready(function () {
    setInterval(RefreshTiles, 3000);
    RefreshConsumptionGraph();
    RefreshProductionGraph();
    RefreshFrequencyGraph();
    RefreshBalanceGraph();
});

function RefreshTiles() {

    GetLatestConsumption().success(function (result) {
        var mydiv = document.getElementById("last_consumption");
        document.getElementById("last_consumption").innerHTML = "";
        var newcontent = document.createElement('div');
        newcontent.innerHTML = result[0].value + " MW";
        mydiv.appendChild(newcontent.firstChild);
    });

    GetLatestProduction().success(function (result) {
        var mydiv = document.getElementById("last_production");
        document.getElementById("last_production").innerHTML = "";
        var newcontent = document.createElement('div');
        newcontent.innerHTML = result[0].value + " MW";
        mydiv.appendChild(newcontent.firstChild);
    });

    GetLatestFrequency().success(function (result) {
        var mydiv = document.getElementById("last_frequency");
        document.getElementById("last_frequency").innerHTML = "";
        var newcontent = document.createElement('div');
        newcontent.innerHTML = result[0].value + " HZ";
        mydiv.appendChild(newcontent.firstChild);
    });

    GetLatestBalance().success(function (result) {
        var mydiv = document.getElementById("last_balance");
        document.getElementById("last_balance").innerHTML = "";
        var newcontent = document.createElement('div');
        newcontent.innerHTML = result[0].value + " MW";
        mydiv.appendChild(newcontent.firstChild);
    });
};

function RefreshConsumptionGraph() {
    GetConsumption().success(function (result) {
        var labels = [];
        var values = [];
        for (var i in result) {
            labels[i] = moment(result[i].start_time);
            values[i] = result[i].value;
        };

        var data = {
            labels: labels,
            datasets: [
                {
                    label: "Consumption",
                    fill: true,
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
                    data: values,
                    spanGaps: true,
                }
            ]
        };

        var options = {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: true,
            }],
                xAxes: [{
                    display: true,
                    type: 'time',
                    time: {
                        format: "HH:mm",
                        unit: 'hour',
                        tooltipFormat: "DD.MM.YYYY - HH:mm",
                        minUnit: "hour",
                        displayFormats: {
                            'hour': 'HH:mm'
                        },
                    },

            }]
            }
        };

        var ctx = document.getElementById("Consumption");
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });
};

function RefreshProductionGraph() {
    GetProduction().success(function (result) {
        var labels = [];
        var values = [];
        for (var i in result) {
            labels[i] = moment(result[i].start_time);
            values[i] = result[i].value;
        };

        var data = {
            labels: labels,
            datasets: [
                {
                    label: "Production",
                    fill: true,
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
                    data: values,
                    spanGaps: true,
                }
            ]
        };

        var options = {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: true,
            }],
                xAxes: [{
                    display: true,
                    type: 'time',
                    time: {
                        format: "HH:mm",
                        unit: 'hour',
                        tooltipFormat: "DD.MM.YYYY - HH:mm",
                        minUnit: "hour",
                        displayFormats: {
                            'hour': 'HH:mm'
                        },
                    },

            }]
            }
        };

        var ctx = document.getElementById("Production");
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });
};

function RefreshFrequencyGraph() {
    GetFrequency().success(function (result) {
        var labels = [];
        var values = [];
        for (var i in result) {
            labels[i] = moment(result[i].start_time);
            values[i] = result[i].value;
        };

        var data = {
            labels: labels,
            datasets: [
                {
                    label: "Frequency",
                    fill: true,
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
                    data: values,
                    spanGaps: true,
                }
            ]
        };

        var options = {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMax: 50.2,
                        suggestedMin: 49.75
                    }
            }],
                xAxes: [{
                    display: true,
                    type: 'time',
                    time: {
                        format: "HH:mm",
                        unit: 'hour',
                        tooltipFormat: "DD.MM.YYYY - HH:mm",
                        minUnit: "hour",
                        displayFormats: {
                            'hour': 'HH:mm'
                        },
                    },

            }]
            }
        };

        var ctx = document.getElementById("Frequency");
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });
};

function RefreshBalanceGraph() {
    GetBalance().success(function (result) {
        var labels = [];
        var values = [];
        for (var i in result) {
            labels[i] = moment(result[i].start_time);
            values[i] = result[i].value;
        };

        var data = {
            labels: labels,
            datasets: [
                {
                    label: "Balance",
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
                    data: values,
                    spanGaps: true,
                }
            ]
        };

        var options = {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: true,
            }],
                xAxes: [{
                    display: true,
                    type: 'time',
                    time: {
                        format: "HH:mm",
                        unit: 'hour',
                        tooltipFormat: "DD.MM.YYYY - HH:mm",
                        minUnit: "hour",
                        displayFormats: {
                            'hour': 'HH:mm'
                        },
                    },

            }]
            }
        };

        var ctx = document.getElementById("Prod_surplus");
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });
};

function GetLatestConsumption() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("api/lastconsumption", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};

function GetLatestProduction() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("/api/lastproduction", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};

function GetLatestFrequency() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("/api/lastfrequency", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};

function GetLatestBalance() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("/api/lastbalance", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};

function GetConsumption() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("/api/consumption", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};

function GetProduction() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("/api/production", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};

function GetFrequency() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("/api/frequency", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};

function GetBalance() {
    var deferred = new $.Deferred();
    var promise = deferred.promise();
    promise.success = promise.done;
    promise.error = promise.fail;

    var jqxhr = $.getJSON("/api/balance", {});

    jqxhr.done(function (data, status, xhr) {
        deferred.resolve(data, status, xhr);
    });
    jqxhr.fail(function (jqXHR, status, error) {
        deferred.reject(jqXHR, status, error);
    });
    return promise;
};
