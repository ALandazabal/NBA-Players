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
        recipient = JSON.stringify(recipient.replace(/'/g, '"'))

        recipientObj = JSON.parse(JSON.parse(recipient))

        let eqHeight = playersList.filter(player => player.h_in == recipientObj.h_in)
        eqHeight = eqHeight.filter(player => player.first_name != recipientObj.first_name)

        let equalPlayerText = ''

        for( let i=0; i < eqHeight.length; i++){
            equalPlayerText +='<li class="list-group-item">'+eqHeight[i].first_name+' '+eqHeight[i].last_name+'</li>'
        }
        

        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Jugador ' + recipientObj.first_name + ' ' + recipientObj.last_name + ' ('+recipientObj.h_in+' pulgadas)')
        modal.find('#eq-player-list')[0].innerHTML = equalPlayerText
    });

    
    // Table pagination
    $('#data-table-players').DataTable();
    $('.dataTables_length').addClass('bs-select');

});

// Obtiene los valores de cada celda
function calculate() {

    let inchesQuantity = parseInt(document.getElementById("inches-quantity").value)
    console.log(typeof inchesQuantity)

    let minPlayerHeight = playersList.reduce(function(prev, curr) {
                                return prev.h_in < curr.h_in ? prev : curr;
                            });
    console.log(typeof parseInt(minPlayerHeight.h_in))

    if( inchesQuantity < parseInt(minPlayerHeight.h_in) )
        console.log('La cantidad ingresada es menor a la altura del jugador más pequeño.')
    else{

        let playersCouple = []

        for( i = 0; i < playersList.length-1; i++){
            for( j = i+1; j < playersList.length; j++){
                let sumHeight = parseInt(playersList[i].h_in) + parseInt(playersList[j].h_in)

                if( sumHeight == inchesQuantity ){
                    let names = playersList[i].first_name+" "+playersList[i].last_name+"("+playersList[i].h_in+") y "+playersList[j].first_name+" "+playersList[j].last_name+"("+playersList[j].h_in+")"
                    playersCouple.push(names)
                }
            }
        }
        console.log(playersCouple)

        let matchingPlayersText = ''

        for( let i=0; i < playersCouple.length; i++){
            matchingPlayersText +='<li class="list-group-item">'+playersCouple[i]+'</li>'
        }

        document.getElementById('matching-players-list').innerHTML = matchingPlayersText

    }


}

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
       return compareData
    };
}
 
// Obtiene los valores de cada celda
function getCellValue(row, index) {
    var getValue = $(row).children('td').eq(index).html();
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