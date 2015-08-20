var turn=0;
var squares = $(".square");
console.log(squares);
var player = " ";
//calling all the values within .square (class)-->console log them
var arr =	[
			[0, 1, 2],
			[3, 4, 5], 
			[6, 7, 8], 
			[0, 3, 6], 
			[1, 4, 7], 
			[2, 5, 8], 
			[0, 4, 8], 
			[2, 4, 6]
			]	

$(".square").on("click", function(){
	if($(this).text() !== ""){
		alert("Choose another box!");
	} else {	
		if (turn===1) {
			$(this).html("X");
			$(this).addClass("clickedX");
			player="X";
		} else {
			$(this).html("O");
			$(this).addClass("clickedY")
			player="O";
		}
		turn=turn===0?1:0;
		checkForWinner();
	}

});

$("#reset").on("click", function(){
	console.log(this);
	$(".square").empty();
});

function checkForWinner(){
	console.log("Yay")
	 $.each(arr, function(i, v){
	 	console.log(player)
	 	if(squares[v[0]].innerHTML===squares[v[1]].innerHTML && squares[v[1]].innerHTML===squares[v[2]].innerHTML && squares[v[2]].innerHTML!== ""){
			alert("There is a winner!");
	 	}
	});
}
checkForWinner();














































/*
var player = 1;



var chooseLetter = document.querySelectorAll(".square");

//box 0  ////////////////////////////////////////////////
chooseLetter[0].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click0").innerText="x";

		}else{ 

		document.getElementById("click0").innerText="o";
		}
	player++;
})

//box 1  ///////////////////////////////////////////////
chooseLetter[1].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click1").innerText="x";

		}else{ 

		document.getElementById("click1").innerText="o";
		}
	player++;
})

//box 2  //////////////////////////////////////////////
chooseLetter[2].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click2").innerText="x";

		}else{ 

		document.getElementById("click2").innerText="o";
		}
	player++;
})

//box 3   //////////////////////////////////////////////
chooseLetter[3].addEventListener("click",function(){
if ( player % 2 === 0 ) {

		document.getElementById("click3").innerText="x";

		}else{ 

		document.getElementById("click3").innerText="o";
		}
	player++;
})

//box 4  ///////////////////////////////////////////////
chooseLetter[4].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click4").innerText="x";

		}else{ 

		document.getElementById("click4").innerText="o";
		}
	player++;
})

//box 5  ///////////////////////////////////////////////
chooseLetter[5].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click5").innerText="x";

		}else{ 

		document.getElementById("click5").innerText="o";
		}
	player++;
})

//box 6  ////////////////////////////////////////////////
chooseLetter[6].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click6").innerText="x";

		}else{ 

		document.getElementById("click6").innerText="o";
		}
	player++;
})

//box 7 /////////////////////////////////////////////////
chooseLetter[7].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click7").innerText="x";

		}else{ 

		document.getElementById("click7").innerText="o";
		}
	player++;
})

//box 8  /////////////////////////////////////////////////
chooseLetter[8].addEventListener("click",function(){
	if ( player % 2 === 0 ) {

		document.getElementById("click8").innerText="x";

		}else{ 

		document.getElementById("click8").innerText="o";
		}
	player++;
})

	// document.querySelector("reset").addEventListener("click", function("reset"))
*/

