$(document).ready(() => {
  const amenCheckList = {}
  $('input[type=checkbox]').change(function() {
    if ($(this).prop('checked') === true) {
      let key = $(this).attr('data-id')
      let value = $(this).attr('data-name')
      amenCheckList[key] = value
    } else if ($(this).prop('checked') === false) {
      delete amenCheckList[$(this).attr('data-id')]
    }
    const list = [];
    for (const name in amenCheckList) {
      list.push(amenCheckList[name]);
    }
    $('DIV.amenities H4').text(list.join(', '));
  });
});
