;(function($){
/**
 * jqGrid Portuguese Translation
 * Traduccion jqGrid en Espaï¿½ol por Yamil Bracho
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {};

$.jgrid.defaults = {
	recordtext: "Bicha(s)",
	loadtext: "Carregando...",
	pgtext : "/"
};
$.jgrid.search = {
    caption: "Busca...",
    Find: "Procurar",
    Reset: "Limpar",
    odata : ['igual', 'não igual', 'menor', 'menor ou igual', 'maior', 'maior ou igual', 'omeça com', 'termina com','contém' ]
};
$.jgrid.edit = {
    addCaption: "Agregar Registro",
    editCaption: "Modificar Registo",
    bSubmit: "Enviar",
    bCancel: "Cancelar",
	bClose: "Fechar",
    processData: "Processando...",
    msg: {
        required:"Campo é requerido",
        number:"Faz favor, introduza um numero",
        minValue:"O valor deve ser maior ou igual que",
        maxValue:"O valor deve ser menor ou igual a",
        email: "não é um direccion de correio valida",
        integer: "Faz favor, introduza um inteiro"
    }
};
$.jgrid.del = {
    caption: "Eliminar",
    msg: "¿ Deseja eliminar os registos seleccionados?",
    bSubmit: "Eliminar",
    bCancel: "Cancelar",
    processData: "Processando..."
};
$.jgrid.nav = {
	edittext: " ",
    edittitle: "Modificar bicha seleccionada",
	addtext:" ",
    addtitle: "Agregar nova bicha",
    deltext: " ",
    deltitle: "Eliminar bicha seleccionada",
    searchtext: " ",
    searchtitle: "Procurar informacion",
    refreshtext: "",
    refreshtitle: "Refrescar Rejilla",
    alertcap: "Aviso",
    alerttext: "Faz favor, seleccione uma bicha"
};
// setcolumns module
$.jgrid.col ={
    caption: "Mostrar/Ocultar Colunas",
    bSubmit: "Enviar",
    bCancel: "Cancelar"	
};
$.jgrid.errors = {
	errcap : "Erro",
	nourl : "Não se especificou uma url",
	norecords: "Não há dados para processar"
};
})(jQuery);
