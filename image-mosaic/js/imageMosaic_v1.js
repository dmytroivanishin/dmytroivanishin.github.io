(function($){
	$.fn.imageMosaic = function(options) {
		// Настройки по умолчанию
        var setting = $.extend({
            cell: 3
        }, options);
		
		return this.each(function(){
			var that = $(this),
				image = that.children("img");		// Найти все картинки
				image.css("height","200px");
			var h = image.height(),					// Высота картинки	
				ml = image.css("margin-left");		// Отступ по левому краю
				ml = parseInt(ml);
			
		
			var imageArr = [[]],					// Двумерный массив
				indexArr = 0,						// Индекс первого массива
				countImage = 1;						// Начальное число картинок
			
			image.each(function(i){
				if(countImage <= setting.cell){ // Если картинок меньше или равно 3, то 
					imageArr[indexArr][imageArr[indexArr].length] = image.eq(i).width(); // Заносим в двумерный массив ширину кажой картинки
					countImage += 1; // Прибавляем индекс
				} else {
					countImage = 2;
					indexArr += 1;						// Прибавляем индекс первого массива
					imageArr[indexArr] = new Array();	// Создаем новый массив в новом идексе
					imageArr[indexArr][imageArr[indexArr].length] = image.eq(i).width();	// Зановсим ширину картинки
				}
			}); // end each

			
		function uni(){	
				var WIDTH = that.width(),	// Ширина блока
					rowSum = 0,				// Сумма ширины картинок в строке
					coefficient,			// Коэфициент ширины блока и суммы ширины картинок в строке
					imageWidth,				// Новая ширина каждой картинки
					imageHeight,			// Новая высота каждой картинки
					eqIndex = 0,										// Индекс каждой картинки
					addWidth,											// Результат сложения ширины и недостающих оступов
					lengthArr = imageArr[0].length;					// Общее число строк в массиве
											
											
				
				WIDTH = WIDTH - (ml * lengthArr + ml);

				for(var i = 0, len1 = imageArr.length; i < len1 ; i++){
					for(var j = 0, len2 = imageArr[i].length; j < len2; j++){
						rowSum += imageArr[i][j];						// Сумма картинок в строке
					}

					addWidth = (lengthArr - imageArr[i].length) * ml;	// Подсчет недостающих оступов и умножение
					coefficient = (WIDTH + addWidth) / rowSum;			// Получение коеффициента  и добавление недостающих оступов в ширину картинки

					for(var j = 0, len2 = imageArr[i].length; j < len2; j++){
						imageHeight = (coefficient * h) - ml; 			// Заносим новую высоту
						imageWidth = coefficient * imageArr[i][j];		// Заносим новую ширину каждой картинки

						image.eq(eqIndex).css({"width":imageWidth+"px","height":imageHeight+"px"});					eqIndex += 1;	// Увеличение индекса картинки
					}
					rowSum = 0;			// Сбрасываем сумму строки
				}
			};
			
			$(window).load(uni).resize(uni);
			//$(window).resize(uni);
			
			
		});
		
	};
})(jQuery);