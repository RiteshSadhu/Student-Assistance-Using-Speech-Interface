$(document).ready(function () {
    $('#datatable').DataTable(),
        $('#datatable-buttons')
            .DataTable({lengthChange: !1, buttons: ['copy', 'excel', 'pdf', 'colvis']})
            .buttons()
            .container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
});


$(document).ready(function(){
    var t = $("#viewResultDatatable").DataTable({
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
        "order": [[ 6, "desc"],[ 4, "desc" ]]
    });
     t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
});

$(document).ready(function(){
    var t = $("#viewPendingTestDatatable").DataTable({
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
        "order": [[ 1, "asc"],[2, "asc"]]
    });
     t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
});
