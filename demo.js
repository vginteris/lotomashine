var ctx = document.getElementById("myChart");

Chart.defaults.global.defaultFontColor = 'white';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Top WINS',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
function addData(label, data) {
    myChart.data.labels.push(label);
    myChart.data.datasets[0].data.push(data);
    myChart.data.datasets[0].backgroundColor.push('red');
    myChart.data.datasets[0].borderColor.push('white');
    myChart.update();
}
function update_chart() {
            //myChart.destroy();

            var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var myObj = JSON.parse(this.responseText);
                        for (var i = 0; i <= myObj.length - 1; i++) {
                            addData(myObj[i].username, myObj[i].total_wins);
                        }
                    }   
                };
            xmlhttp.open("GET", "http://ca-php.lt/json/loto.php?top_wins", true); 
//             prie sito prirasius ?username gausi all user games
// ?top_wins gausi top 10 winners
// ?top_games gausi top 10 gamers
            xmlhttp.send();
        }
        update_chart();
