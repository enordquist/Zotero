$(function () {
    // DATA TABLE SETTINGS
    var table = $(".table").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "order": [[1, "desc"]],
        buttons: [
            {
                extend: 'copy',
                title: 'Data Export Summary'
            },
            {
                extend: 'csv',
                title: 'Data Export Summary'
            }
        ]
    });
    table.buttons().container().appendTo( $('.col-sm-6:eq(0)',table.table().container()));
});

$('.disabled').on("click",function (e) {
    e.preventDefault();
});