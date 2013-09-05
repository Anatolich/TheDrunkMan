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

	deck_length: 52,

	/**
	 * Сигнатура типичных карт, (предположим что 11, 12, 13, 14 это веса карт мастей В, Д, К, Т соответственно)
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

		11,11,11,11,

		12,12,12,12,

		13,13,13,13,

		14,14,14,14
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
			var shuffle_num = Math.floor(Math.random() * (1 - 10) + 10);	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

			for(var i = 0; i <= shuffle_num; i++)
			{
				this.current_deck.sort(function() {

					return Math.random() - 0.5;	// вычитаем, например 0.5 чтобы область выдаваемых значений укладывалась в отрезок положительное - отрицательное число
				});
			}
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