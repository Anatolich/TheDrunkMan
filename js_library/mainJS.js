/* Точка входа в приложение. В большинстве своем, здесь аккумулирована логика представления.
 *
 */

$(document).ready(function() {

	/* Собираем основные элементы представления интерфейса игры */

	var game_start = $('#game_start')[0];

	var drop_list_item = $('#drop_list_item')[0];

	var gamers_num_list = $('#gamers_num_list')[0];

	/* Инициализация */

	$(game_start).click(function() {

		$(game_start).hide();


		$(drop_list_item).show();

		return false;
	});

	/* DropDown List - количества игроков */

	$(drop_list_item).click(function() {

		$(gamers_num_list).toggle();

		return false;
	});

	/* выбор количества игроков */

	$(gamers_num_list).click(function(e) {

		$(gamers_num_list).hide();


		$(drop_list_item).hide();

		gameJS.startGame($(e.target).text());
		
		for(var i = 1; i <= gameJS.player_num; i++)
		{
			$('#player_' + i).show();
		}
	});
});