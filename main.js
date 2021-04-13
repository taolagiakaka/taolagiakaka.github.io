//  $(document).ready(function () {
//     var specialElementHandlers = {
//         '#editor': function (element, renderer) {
//             return true;
//         },
//     };

//     $('#cmd').click(function () {
//         var doc = new jsPDF();
//         doc.fromHTML($('#page').html(), 15, 15, {
//             width: 170,
//             elementHandlers: specialElementHandlers,
//         });
//         doc.save('NTN.pdf');
//     });
// });
function generatePDF() {
    const element = document.getElementById('page');

    html2pdf().from(element).save();
}
