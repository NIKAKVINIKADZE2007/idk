const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const productId = parseInt(urlParams.get('id'));
console.log(productId);

const product = products.find((p) => p.id === productId);
console.log(product);

if (product) {
  document.getElementById('product-name').textContent = product.name;

  document.getElementById('product-description').textContent =
    product.description;

  document.getElementById('product-price').textContent = product.price;
} else {
  document.querySelector('.product-details').textContent = '404 not found';
}
console.log();
