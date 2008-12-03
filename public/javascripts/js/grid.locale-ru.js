;(function($){
/**
 * jqGrid Russian Translation
 * Alexey Kanaev softcore@rambler.ru
 * http://softcore.com.ru 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {};

$.jgrid.defaults = {
	recordtext: "Записей",
	loadtext: "Загрузка...",
	pgtext : "/"
};
$.jgrid.search = {
    caption: "Поиск...",
    Find: "Найти",
    Reset: "Сброс",
    odata : ['равно', 'не равно', 'меньше', 'меньше или равно','больше','больше или равно', 'начинается с','заканчивается на','содержит' ]
};
$.jgrid.edit = {
    addCaption: "Добавить запись",
    editCaption: "Редактировать запись",
    bSubmit: "Сохранить",
    bCancel: "Отмена",
	bClose: "Закрыть",
    processData: "Обработка...",
    msg: {
        required:"Поле является обязательным",
        number:"Пожалуйста, введите правильное число",
        minValue:"значение должно быть больше либо равно",
        maxValue:"значение должно быть больше либо равно",
        email: "некорректное значение e-mail",
        integer: "Пожалуйста введите целое число"
    }
};
$.jgrid.del = {
    caption: "Удалить",
    msg: "Удалить выделенную запись(и)?",
    bSubmit: "Удвлить",
    bCancel: "Отмена",
    processData: "Обработка..."
};
$.jgrid.nav = {
	edittext: " ",
    edittitle: "Редактировать выделенную запись",
	addtext:" ",
    addtitle: "Добавить новую запись",
    deltext: " ",
    deltitle: "Удалить выделенную запись",
    searchtext: " ",
    searchtitle: "Найти записи",
    refreshtext: "",
    refreshtitle: "Обновить таблицу",
    alertcap: "Внимание",
    alerttext: "Пожалуйста, выделите запись"
};
// setcolumns module
$.jgrid.col ={
    caption: "Показать/скрыть столбцы",
    bSubmit: "Сохранить",
    bCancel: "Отмена"	
};
$.jgrid.errors = {
	errcap : "Ошибка",
	nourl : "URL не установлен",
	norecords: "Нет записей для обработки"
};
})(jQuery);
