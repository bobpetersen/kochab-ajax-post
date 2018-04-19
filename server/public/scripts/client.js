console.log('client.js has loaded');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery has loaded');
  appendRecords();
}

function appendRecords() {
  $.ajax({
    method: 'GET',
    url: '/records'
  }).then(function(response) {
    response.forEach(function(record) {
      $('#recordList').append(`<tr>
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost
                  .toLocaleString('en', {
                    style: 'currency',
                    currency: 'USD'
                  })
                  .slice(0, -3)}</td>
            </tr>`);
    });
  });
}
// for (let index = 0; index < respone.length; index++) {
//     console.log('response');
//     $('#recordUp').append(`<li>${response[i]}</li>`);
//     }
//   });
// }
