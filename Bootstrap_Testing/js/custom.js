function flipObject(objRef){
    var objID = $(objRef).closest(".flip-container").attr("id");
    document.getElementById(objID).classList.toggle("flip");
}
function showMenu() {
    alert('not working yet');
}
$(document).ready(function(){
    $('.mainMenu ul li:has(ul)').addClass('has-child');
    
    // fa-chevron-right
})