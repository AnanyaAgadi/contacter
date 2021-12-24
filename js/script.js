$("#submit").click(function(){
  a = document.getElementById('name').value
  b = document.getElementById('phone').value
  c = document.getElementById('email').value
  d = document.getElementById('address').value
  $('#name').val('');
  $('#phone').val('');
  $('#email').val('');
  $('#address').val('');

  var newRowContent = "<tr><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+d+"</td></tr>";
  $(newRowContent).appendTo($("#something1"));
});