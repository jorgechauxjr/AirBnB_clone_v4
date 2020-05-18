$(document).ready(() => {
  const amenCheckList = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      const key = $(this).attr('data-id');
      const value = $(this).attr('data-name');
      amenCheckList[key] = value;
    }
    if (!$(this).is(':checked')) {
      delete amenCheckList[$(this).attr('data-id')];
    }
    const list = [];
    for (const name in amenCheckList) {
      list.push(amenCheckList[name]);
    }
    $('div.amenities h4').text(list.join(', '));
  });
});

/* Check Api status */
$.getJSON('http://0.0.0.0:5001/api/v1/status', data => {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
