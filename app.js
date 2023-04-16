const items = document.querySelectorAll('.item');
items.forEach(item => {
  const minusBtn = item.querySelector('.minus');
  const plusBtn = item.querySelector('.plus');
  const quantityInput = item.querySelector('input');
  const deleteBtn = item.querySelector('.delete');
  const heartBtn = item.querySelector('.heart');



  minusBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
      updateTotal(quantity);


    }
  });

  plusBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
    updateTotal(quantity);

  });

  deleteBtn.addEventListener('click', () => {
    item.remove()
  });
  

  function updateTotal(quantity){
    var priceElement = document.getElementsByClassName('price')[0];
    var  price= parseInt(priceElement.textContent);
    totalValue=price*(quantity+1)
    document.getElementsByClassName('total')[0].innerText = '$' + totalValue
    return totalValue
  }

})