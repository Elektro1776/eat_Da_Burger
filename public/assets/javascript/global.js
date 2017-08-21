$(document).ready(function() {


  $('.devourBurger').click(function(e) {
    e.preventDefault();
    let currentBurgerEl = $(this).siblings()[0];
    let burgerId = currentBurgerEl.id;
    let burger = { id: burgerId }
    put('/api/devourBurger', burger ).then((response) => {
      window.location.reload(true)
    })
    $(currentBurgerEl).parent().empty();
  });

  function put(path, data) {
    return window.fetch(path, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
  }

})
