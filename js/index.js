// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const priceN = price.textContent;
  const quantity = product.querySelector(".quantity input");
  const quantityN = quantity.value;
  const result = Number(priceN) * Number(quantityN);
  console.log(result);

  // const subtotal = product.querySelector(".subtotal span").textContent;
  
  product.querySelector(".subtotal span").textContent = result;

  return result;

  console.log('Calculating subtotal, yey!');

  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const cesta = document.getElementsByClassName('product');
  let total = 0;
  
  for (i=0; i<cesta.length; i++){
    total += updateSubtotal(cesta[i]);
    console.log(total);
  }

  // ITERATION 3

  document.querySelector("h2 span").textContent = total;
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsBtn = document.getElementsByClassName('btn btn-remove');
  removeProductsBtn.addEventListener('click', removeProduc( () => {

    //enviar o currentTarget;
  }));


  //... your code goes here
});
