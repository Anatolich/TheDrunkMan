/* gameJS - объект игры, описывает основные методы и свойства, формируя правила и текущий геймплей
 *
 * Version: 0.01 Dev
 *
 */

var gameJS = 
{
	/**
	 * Общее количество игроков принимающих участие в игре
	 *
	 * @var integer
	 *
	 */

	player_num: 0,

	/**
	 * Максимально допустимое количество игроков
	 *
	 * @var integer
	 *
	 */

	max_player_num: 8,

	/**
	 * Минимально допустимое количество игроков
	 *
	 * @var integer
	 *
	 */

	min_player_num: 2,

	/**
	 * Объекты Игроки
	 *
	 * @var object
	 *
	 */

	players: {},

	/**
	 * Текущая игровая колода карт
	 *
	 * @var array
	 *
	 */

	game_deck: null,
	
	/**
	 * Текущий ход игры
	 *
	 * @var array
	 *
	 */

	game_step: 0,

	/**
 	 * Начинало игры, инициализация всех параметров
	 *
	 * @param integer players_number - количество игроков
	 * 
	 * @return void
	 *
	 */

	startGame: function(players_number)
	{
		/* определяемся с количеством игроков */

		if(!players_number || isNaN(players_number))	// null, undefined, "", or else
		{
			this.player_num = this.min_player_num;
		}

		else
		{
			this.player_num = parseInt(players_number);
		}

		this.createPlayers();

		/* создаем колоду */

		this.game_deck = new cardDeck();

		this.game_deck.shuffle_deck();

		this.players.cards_per_player = Math.floor(this.game_deck.deck_length / this.player_num);

		/* раздача карт */

		this.cardsDeal();

		/* играем */

		var bet_stack = {};	// ставки текущей партии

		do
		{
			this.game_step++;
			
			/* принимаем ставки */

			bet_stack = {};

			for(var i = 1; i <= this.player_num; i++)
			{
				bet_stack[i] = {};

				bet_stack[i].owner = this.players[i]['uid'];

				bet_stack[i].card = this.players[i]['own_cards'].shift();
			}

			/* сортируем ставки по убыванию */

			var compare_arr = [];

			for (var i in bet_stack) 
			{
				compare_arr.push(bet_stack[i]);
			}

			compare_arr.sort(function(a, b) {

				return b.card - a.card;
			});

			for (var i = 0; i < compare_arr.length; i++) 
			{
  				alert(compare_arr[i].card);
			}

			


			// TODO осталось сравнение, типичное простое кто наверху иерархии тот и забирает без войны
				
			// TODO обработка войны, найти совпадения
		}

		while(this.game_step !== 1);	// TODO будущий while(this.gameIsOver !== true);
	},

	/**
 	 * Создает игроков
	 * 
	 * @return void
	 *
	 */

	createPlayers: function()
	{
		for(var i = 1; i <= this.player_num; i++)
		{
			this.players[i] = {};

			this.players[i]['uid'] = i;

			this.players[i]['own_cards'] = [];
		}
	},

	/**
 	 * Раздача карт
	 * 
	 * @return void
	 *
	 */
	
	cardsDeal: function()
	{
		var turn_by_card = 1;	// начало очереди за картой

		do
		{
			this.players[turn_by_card]['own_cards'].push(this.game_deck.give_a_card());

			if(turn_by_card === this.player_num)
			{
				turn_by_card = 1;
			}

			else
			{
				turn_by_card++;
			}
		}

		while(this.game_deck.current_deck.length != 0);
	},

	/**
 	 * Сортирует ставки по убыванию
	 * 
	 * @return void
	 *
	 */

	sortBetStackByCard: function()
	{

	},

	/**
 	 * Проверяет, активировать ли режим войны
	 *
	 * @return bool
	 *
	 */

	isItWar: function()
	{
		
	},

	/**
 	 * Проверяет, закончилась ли игра
	 *
	 * @return bool
	 *
	 */

	gameIsOver: function()
	{
		for(var i = 1; i <= this.player_num; i++)
		{
			if(this.players[i]['own_cards'].length === this.game_deck.deck_length)
			{
				return true;
			}
		}
		
		return false;
	}
};