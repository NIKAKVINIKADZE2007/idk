const productlist = document.getElementById('product-list');

products.forEach((product) => {
  const proctDiv = document.createElement('div');
  proctDiv.className = 'product';

  const productName = document.createElement('h2');

  productName.textContent = `product name:${product.name}`;

  proctDiv.appendChild(productName);

  const productprice = document.createElement('p');
  productprice.textContent = `Price: ${product.price} GEL`;
  proctDiv.appendChild(productprice);

  const viewmore = document.createElement('button');

  viewmore.textContent = 'View More';
  viewmore.addEventListener('click', function () {
    viewMore(product.id);
  });
  proctDiv.appendChild(viewmore);
  productlist.appendChild(proctDiv);
});

function viewMore(productId) {
  window.location.href = `procduct.html?id=${productId}`;
}
