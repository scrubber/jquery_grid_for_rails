;(function($){
/**
 * jqGrid Polish Translation
 * Piotr Roznicki roznicki@o2.pl
 * http://www.roznicki.prv.pl
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {};

$.jgrid.defaults = {
	recordtext: "Wiersz(y)",
	loadtext: "Ładowanie...",
	pgtext : "/"
};
$.jgrid.search = {
    caption: "Wyszukiwanie...",
    Find: "Szukaj",
    Reset: "Czyść",
    odata : ['dokładnie', 'różne od', 'mniejsze od', 'mniejsze lub różne','większe od','większe lub różne', 'zacznij od','zakończ na','zawiera' ]
};
$.jgrid.edit = {
    addCaption: "Dodaj rekord",
    editCaption: "Edytuj rekord",
    bSubmit: "Zapisz",
    bCancel: "Anuluj",
	bClose: "Zamknij",
    processData: "Przetwarzanie...",
    msg: {
        required:"Pole jest wymagane",
        number:"Proszę wpisać poprawną liczbę",
        minValue:"wartość musi być większa lub równa",
        maxValue:"wartość musi być mniejsza od",
        email: "nie jest adresem e-mail",
        integer: "Proszę wpisać poprawną liczbę"
    }
};
$.jgrid.del = {
    caption: "Usuwanie",
    msg: "Usuń wybrany rekord(y)?",
    bSubmit: "Usuń",
    bCancel: "Anuluj",
    processData: "Przetwarzanie..."
};
$.jgrid.nav = {
	edittext: " ",
    edittitle: "Edytuj wybrany wiersz",
	addtext:" ",
    addtitle: "Dodaj nowy wiersz",
    deltext: " ",
    deltitle: "Usuń wybrany wiersz",
    searchtext: " ",
    searchtitle: "Wyszukaj rekord",
    refreshtext: "",
    refreshtitle: "Przeładuj",
    alertcap: "Uwaga",
    alerttext: "Proszę wybrać wiersz"
};
// setcolumns module
$.jgrid.col ={
    caption: "Pokaż/Ukryj kolumny",
    bSubmit: "Zatwierdź",
    bCancel: "Anuluj"	
};
$.jgrid.errors = {
	errcap : "Błąd",
	nourl : "Brak adresu url",
	norecords: "Brak danych"
};
})(jQuery);