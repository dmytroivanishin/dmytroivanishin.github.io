(function($){
	$.fn.imageMosaic = function(options) {
		// Настройки по умолчанию
        var setting = $.extend({
            cell: 3,
			marginl: 0,
			marginb: 0,
			response: true,
			preventD: true
        }, options);
		
		return this.each(function(){
			var that = $(this),
				image = that.find("img"),		// Найти все картинки
				tmp = [],
				cellDefault = setting.cell;
				image.css({
						"height":"200px",
						"display":"block" });
			
			var h = image.height(),				// Высота картинки	
				ml = setting.marginl;			// Отступ по левому краю
			
			if(setting.preventD){
				that.find("a").click(function(){ return false; });  // Отключить переход по ссылке
			}

			function getWidthImage(){
				image.each(function(i){
					tmp[i] = image.eq(i).width();		
				}); // end each
			};
			function setWidthImage(){
				
				if(setting.response){
					if($(window).width() > 992){ setting.cell = cellDefault; }
					if($(window).width() <= 992){ setting.cell = 3; }
					if($(window).width() <= 480){ setting.cell = 2; }
					if($(window).width() <= 320){ setting.cell = 1; }
				}
				
				var	imageArr = [[]],					// Двумерный массив
					indexArr = 0,						// Индекс первого массива
					countImage = 1;						// Начальное число картинок
				for(var i = 0; i < tmp.length; i++){
					if(countImage <= setting.cell){ // Если картинок меньше или равно 3, то 
						imageArr[indexArr][imageArr[indexArr].length] = tmp[i]; // Заносим в двумерный массив ширину кажой картинки
						countImage += 1; // Прибавляем индекс
					} else {
						countImage = 2;
						indexArr += 1;						// Прибавляем индекс первого массива
						imageArr[indexArr] = new Array();	// Создаем новый массив в новом идексе
						imageArr[indexArr][imageArr[indexArr].length] = tmp[i];	// Зановсим ширину картинки
					}
				}

				var WIDTH = that.width(),	// Ширина блока
					w = 0,
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

						image.eq(eqIndex).css({
											"width":imageWidth+"px",
											"height":imageHeight+"px"});
						
						that.children(".mosaic-item").eq(eqIndex).css({
																	"width":imageWidth+"px",
																	"height":imageHeight+"px",
																	"margin-left":setting.marginl,
																	"margin-bottom":setting.marginb});
						
						eqIndex += 1;	// Увеличение индекса картинки
					}
					rowSum = 0;			// Сбрасываем сумму строки
				}
			};
			$(window).load(function(){
				getWidthImage();
				setWidthImage();
			}).resize(setWidthImage);
		});
		
	};
})(jQuery);