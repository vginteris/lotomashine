var number_block = document.getElementById('allnumberrow');
var lotoAllnumbers = document.getElementById('loto_numbers');
var player_number_mas= [];
var ticket_number_mas = [];
var score = 0;
for (var id = 0; id <= 9; id++) {
	number_block.innerHTML += '<div class="col number" id="number' + id + '">' + id + '</div>';
}
var temp_number = 9;
var temp_position = 0;
var winner = 10;
function getOneLuckyNumber() {
	var oneluckynumber = document.getElementById('luckynumber');
	document.getElementById('number'+temp_position).style.backgroundColor = "red";
	var temp_luckynumber = Math.floor(Math.random() * 10);
	if (ticket_number_mas.length < 9) {
		ticket_number_mas.push(temp_luckynumber);
	} ;
	temp_position = temp_luckynumber;
	
	oneluckynumber.innerHTML = temp_luckynumber;


	for (var i = 0; i <= 9; i++) {
		var temp_number_id = document.getElementById('number'+i).innerHTML;
		if (temp_luckynumber == i) {
			document.getElementById('number'+i).style.backgroundColor = "blue";
		}
	}
	document.getElementById('gameover').innerHTML = temp_number + " left"
	if (temp_number == 0) {
		document.getElementById('gameover').innerHTML = "Game Over";
		document.getElementById('GO').outerHTML = '<div id="restartid" class="col-4 number" onclick="restart()">Restart</div>'

	}


	for (var it = 0; it <= 9; it++) {
		// var temp_number_id = document.getElementById('lucky_number'+it).innerHTML;
		// if (temp_luckynumber == it) {
		// 	document.getElementById('lucky_number'+temp_luckynumber).style.backgroundColor = "pink";
		// 	winner --
		// }
		if (player_number_mas[it] == temp_luckynumber) {
			document.getElementById('lucky_number'+it).style.backgroundColor = "pink";
		}
	}

	if (temp_number>-2) {
		lotoAllnumbers.innerHTML += '<div class="col number" id="lot_number' + temp_luckynumber + '">' + temp_luckynumber + '</div>';
	}
	
	temp_number--;
	if (ticket_number_mas.length == 9) {
		winnerprice()
	}
}

function getYour9LuckyNumbers(){
	var lucky_number_block = document.getElementById('lucky9number');
	for (var lucknumber = 0; lucknumber < 9; lucknumber++) {

		var temp_luc_numberis = Math.floor(Math.random() * 10);
		player_number_mas.push(temp_luc_numberis);
		lucky_number_block.innerHTML += '<div class="col number" style="background-color: green" id="lucky_number' + lucknumber + '">' + temp_luc_numberis + '</div>';
	}
}

function restart(){
	console.log(ticket_number_mas);
	console.log(player_number_mas);
	document.getElementById('lucky9number').innerHTML="";
	document.getElementById('loto_numbers').innerHTML="";
	player_number_mas = [];
	document.getElementById('restartid').outerHTML= '<div id="GO" class="col-4 number" onclick="getOneLuckyNumber()">Go</div>';
	var temp_number = 9;
	var temp_position = 0;
	var winner = 10;
	document.getElementById('gameover').innerHTML = '9 left';
	score = 0;
}


function winnerprice(){

	for (var c = 0; c < player_number_mas.length; c++) {
		for (var cek = 0; cek < ticket_number_mas.length; cek++) {
			if (player_number_mas[c] == ticket_number_mas[cek] && c == cek) {
				score++
			}
		}
	}
	if (score) {
		// /document.getElementById('winner').innerHTML = 'You WON' + (score * 50) + 'Eur!';
		alert('You WON' + (score * 50) + 'Eur!');
	}  else alert("Sorry try next time");
	// document.getElementById('winner').innerHTML = 'Sorry try next time';
	console.log(score);

	$.post("http://ca-php.lt/json/loto.php",
	{
		username: 'Vytautas',
		amount: score,
	},
	function (data, status) {
		alert("Sent")
	}
	);
	

}

