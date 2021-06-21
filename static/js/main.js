let playersList = []

$(document).ready(function() {
    //Load Data in client side
    loadData()

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

        recipientObj = JSON.parse(JSON.parse(recipient))
        //console.log(recipientObj)

        let eqHeight = playersList.filter(player => player.h_in == recipientObj.h_in)
        eqHeight = eqHeight.filter(player => player.first_name != recipientObj.first_name)
        //console.log(eqHeight)

        let equalPlayerText = ''

        for( let i=0; i < eqHeight.length; i++){
            equalPlayerText +='<li class="list-group-item">'+eqHeight[i].first_name+' '+eqHeight[i].last_name+'</li>'
        }
        

        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Jugador ' + recipientObj.first_name + ' ' + recipientObj.last_name + ' ('+recipientObj.h_in+' pulgadas)')
        modal.find('#eq-player-list')[0].innerHTML = equalPlayerText
    })

});


// Load data of players
function loadData() {

    let rows = document.getElementById("tbody-table").rows

    for( let i=0; i < rows.length; i++){
        let rowString = rows[i].dataset.whatever.replace(/(?![A-Za-z])'(?![A-Za-z])/g, '"')
        rowString = rowString.replace(/{'/g, '{"')
        rowString = JSON.stringify(rowString.replace(/(\s)'/g, ' "'))
        //console.log(rowString)
        playersList.push(JSON.parse(JSON.parse(rowString)))
    }


}
 
// Para comparar los valores de la tabla entre sí
function comparer(index) {
    return function(a, b) {
       var valA = getCellValue(a, index),
       valB = getCellValue(b, index);
       var compareData = $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
       //console.log(compareData)
       return compareData
    };
}
 
// Obtiene los valores de cada celda
function getCellValue(row, index) {
    var getValue = $(row).children('td').eq(index).html();
    //console.log(getValue)
    return getValue
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