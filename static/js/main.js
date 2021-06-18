$(document).ready(function() {
    //Order table
    $('th').click(function() {
        var table = $(this).parents('table').eq(0);
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
        this.asc = !this.asc;
        if (!this.asc) {
        rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++) {
        table.append(rows[i]);
        }
        setIcon($(this), this.asc);
    });

    // Show modal
    $('#exampleModal').on('show.bs.modal', function (event) {
        
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        //recipient = recipient.replace(/'/g, '"').replace("\"", "'").replace(/\"$/,"'")
        recipient = JSON.stringify(recipient.replace(/'/g, '"'))
        console.log(recipient)

        recipientObj = JSON.parse(JSON.parse(recipient))
        console.log(recipientObj)
        console.log('Hello!!'+ recipientObj.first_name)

        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipientObj.first_name)
        modal.find('.modal-body input').val(recipientObj.first_name)
    })

});
 
 // Para comparar los valores de la tabla entre sí
function comparer(index) {
    return function(a, b) {
       var valA = getCellValue(a, index),
       valB = getCellValue(b, index);
       return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
    };
 }
 
 // Obtiene los valores de cada celda
function getCellValue(row, index) {
    return $(row).children('td').eq(index).html();
 }
 
 // Muestra gráficamente qué ordenamiento se está aplicando
 function setIcon(element, asc) {
    $("th").each(function(index) {
       $(this).removeClass("sorting");
       $(this).removeClass("asc");
       $(this).removeClass("desc");
    });
    element.addClass("sorting");
    if (asc) element.addClass("asc");
    else element.addClass("desc");
 }