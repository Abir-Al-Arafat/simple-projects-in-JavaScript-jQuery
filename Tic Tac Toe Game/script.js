$(document).ready(function(){
	var x = "x";
	var o = "o";
	var turns = 0;
	// Spot vars
	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');

	// conditions that check if a player has won
	const winConditionsMet = (input) => {
		// input has to be lowercase 'o' or 'x'
		return spot1.hasClass(input) && spot2.hasClass(input) && spot3.hasClass(input) ||
			spot4.hasClass(input) && spot5.hasClass(input) && spot6.hasClass(input) ||
			spot7.hasClass(input) && spot8.hasClass(input) && spot9.hasClass(input) ||
			spot1.hasClass(input) && spot4.hasClass(input) && spot7.hasClass(input) ||
			spot2.hasClass(input) && spot5.hasClass(input) && spot8.hasClass(input) ||
			spot3.hasClass(input) && spot6.hasClass(input) && spot9.hasClass(input) ||
			spot1.hasClass(input) && spot5.hasClass(input) && spot9.hasClass(input) ||
			spot3.hasClass(input) && spot5.hasClass(input) && spot7.hasClass(input)
	}

	// interface when game is over
	const onGameOver = (player=null) => {
		// player ? alert(`Winner: ${player}`) : alert('Game Tied');

		player ? 
			$('#result').append(`<h3>Winner is: ${player}</h3>`)
			: $('#result').append(`<h3>Game Tied</h3>`)

		$('#board li').text('+');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');

		// setTimeout(function() {
		// 	$('#result').remove();
		//   }, 3000);

		// $('.message').show('fast').delay(2000).hide('fast')

		turns = 0;
	}
	
	$('#board li').on('click', function(){
		if(winConditionsMet('o')){
			onGameOver('O')

			// delete
			// alert('Winner: O');
            // $('#board li').text('+');
			// $('#board li').removeClass('disable');
			// $('#board li').removeClass('o');
			// $('#board li').removeClass('x');
		} else if(winConditionsMet('x')){
			onGameOver('X')

			// delete
			// alert('Winner: X');
			// $('#board li').text('+');
			// $('#board li').removeClass('disable');
			// $('#board li').removeClass('o');
			// $('#board li').removeClass('x');
		} else if(turns > 8){
			onGameOver()

			// delete
			// alert('Game Tied');
			// $('#board li').text('+');
			// $('#board li').removeClass('disable');
			// $('#board li').removeClass('o');
			// $('#board li').removeClass('x');
			// turns = 0;
		} else if($(this).hasClass('disable')){
			alert('This spot is already filled');
		} else if(turns%2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');

			console.log(turns)

			if(winConditionsMet('o')){
				onGameOver('O')

				// delete
				// console.log('winner o');
				// alert('Winner: O');
				// turns = 0;
			}
		} else {
			turns++;
			$(this).text(x);
			$(this).addClass('disable x');

			console.log(turns)

			if(winConditionsMet('x')){
				onGameOver('X')

				// delete
				// console.log('winner x');
				// alert('Winner: X');
				// turns = 0;
			}
		}
	});
		// Reset Handler
		$("#reset").click(function(){
		$("#board li").text("+");
		$("#board li").removeClass('disable');
		$("#board li").removeClass('o');
		$("#board li").removeClass('x');
		$("#result").text("")
		// setTimeout(function() {
		// 	$('#result').remove();
		//   }, 3000);
		turns = 0;
	});
});