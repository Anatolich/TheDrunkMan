/* cardDeck - объект типичной карточной колоды
 *
 * Version: 0.02 Dev
 *
 */

var cardDeck = function()
{
	return cardDeck.prototype.init();
};

cardDeck.prototype =
{
	/**
	 * Количество карт в колоде
	 *
	 * @var integer
	 *
	 */

	deck_length: 54,

	/**
	 * Сигнатура типичных карт
	 *
	 * @var array
	 *
	 */

	cards: [


		2,2,2,2,

		3,3,3,3,

		4,4,4,4,

		5,5,5,5,

		6,6,6,6,

		7,7,7,7,

		8,8,8,8,

		9,9,9,9,

		10,10,10,10,

		'В','В','В','В','В',

		'Д','Д','Д','Д','Д',

		'К','К','К','К','К',

		'T','T','T','T'
	],

	/**
	 * Текущая Игровая колода
	 *
	 * @var array
	 *
	 */

	current_deck: [],

	/**
 	 * Конструкторй объекта
	 *
	 * @param
	 * 
	 * @return void
	 *
	 */

	init: function() 
	{
		this.current_deck = this.cards;
	},

	/**
 	 * Тусует колоду, почти случайно :-))
	 *
	 * @param
	 * 
	 * @return void
	 *
	 */

	shuffle_deck: function() {
		
		if(this.current_deck.length > 0)
		{
			this.current_deck.sort(function() {

				return Math.random() - 0.5;	// вычитаем, например 0.5 чтобы область выдаваемых значений укладывалась в отрезок положительное - отрицательное число
			});
		}
	},

	/**
 	 * Дает карту из текущей колоды
	 *
	 * @return void
	 *
	 */

	give_a_card: function()
	{
		return this.current_deck.shift();
	}
};