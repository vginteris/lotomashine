		// var items = [];
		// $.getJSON( "http://ca-php.lt/json/loto.php", function( data ) {
		// 	$.each( items.push(data) );

		// 	console.log(items);	
		// });


		var ctx = document.getElementById("myChart");
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
				},
				{
					label: 'Top games',
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

		function addData2(label, data, data2) {

			myChart.data.labels.push(label);
			myChart.data.datasets[0].data.push(data);
			myChart.data.datasets[1].data.push(data2);
			myChart.data.datasets[0].backgroundColor.push('red');
			myChart.data.datasets[0].borderColor.push('white');
			myChart.update();
		}

		function all_players() {
			myChart.data.labels = [];
			myChart.data.datasets[0].data = [];

            //myChart.destroy();

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            	if (this.readyState == 4 && this.status == 200) {
            		var myObj = JSON.parse(this.responseText);
            		for (var i = 0; i <= myObj.length - 1; i++) {
            			addData(myObj[i].username, myObj[i].amount);
            		}
            	}   
            };
            xmlhttp.open("GET", "http://ca-php.lt/json/loto.php", true); 

            xmlhttp.send();
        }
        function show_username(){
        	myChart.data.labels = [];
        	myChart.data.datasets[0].data = [];
        	myChart.data.datasets[1].data = [];
        	var user_name = document.getElementById('usernameid').value;
        	console.log(user_name);
        	var url = "http://ca-php.lt/json/loto.php?username="+user_name;
        	var xmlhttp = new XMLHttpRequest();
        	xmlhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			var myObj = JSON.parse(this.responseText);
        			for (var i = 0; i <= myObj.length - 1; i++) {
        				addData(myObj[i].username, myObj[i].amount);
        			}
        		}   
        	};
        	xmlhttp.open("GET", url, true); 
        	xmlhttp.send();
        }

        function top_wins(){
        	myChart.data.labels = [];
        	myChart.data.datasets[0].data = [];
        	myChart.data.datasets[1].data = [];
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
        	xmlhttp.send();
        }

        function top_games(){
        	myChart.data.labels = [];
        	myChart.data.datasets[0].data = [];
        	myChart.data.datasets[1].data = [];

        	var xmlhttp = new XMLHttpRequest();
        	xmlhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			var myObj = JSON.parse(this.responseText);
        			for (var i = 0; i <= myObj.length - 1; i++) {
        				addData(myObj[i].username, myObj[i].games);
        			}
        		}   
        	};
        	xmlhttp.open("GET", "http://ca-php.lt/json/loto.php?top_games", true); 
        	xmlhttp.send();
        }

        function show_stats(){
        	myChart.data.labels = [];
        	myChart.data.datasets[0].data = [];
        	myChart.data.datasets[1].data = [];
        	var xmlhttp = new XMLHttpRequest();
        	xmlhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			var myObj = JSON.parse(this.responseText);
        			for (var i = 0; i <= myObj.length - 1; i++) {
        				addData2(myObj[i].username, myObj[i].games, myObj[i].total_wins);
        			}
        		}   
        	};
        	xmlhttp.open("GET", "http://ca-php.lt/json/loto.php?stats", true); 
        	xmlhttp.send();
        }

        function turn_off(){
        	document.getElementById('mask').outerHTML = "";
        }





