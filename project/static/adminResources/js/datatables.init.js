$(document).ready(function () {
    $('#datatable').DataTable(
        {
                "order": [[ 5, "asc" ]]
            }
    ),
        $('#datatable-buttons')
            .DataTable({lengthChange: !1, buttons: ['copy', 'excel', 'pdf', 'colvis']})
            .buttons()
            .container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
});

$(document).ready(function(){
    var t = $("#viewFacultyDatatable").DataTable({
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ]
    });
     t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
});


$(document).ready(function(){
    var t = $("#viewQuestionTypeDatatable").DataTable({
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ]
    });
     t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
});


$(document).ready(function(){
    var t = $("#viewComplianDatatable").DataTable({
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
        "order": [[5, "desc"],[ 7, "asc"]]
    });
     t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
});


$(document).ready(function(){
    var t = $("#viewFeedbackDatatable").DataTable({
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
        "order": [[5, "desc"],[7, "asd"]]
    });
     t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
});


$(document).ready(function(){
    var t = $("#viewComplainReplyDatatable").DataTable({
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
        "order": [[ 4, "desc"],[ 5, "desc" ]]
    });
     t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
});



