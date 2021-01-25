const data = [
  {
    imgSrc: 'images/product_1.jpg',
    rating: 4,
    name: `Woman's Long Dress`,
    price: 45,
    id: 'womans_long_dress'
  },
  {
    imgSrc: 'images/product_2.jpg',
    rating: 5,
    name: `2 Piece Swimsuit`,
    price: 35,
    id: 'two_piece_swimsuit'
  },
  {
    imgSrc: 'images/product_3.jpg',
    rating: 3,
    name: `Man Blue Jacket`,
    price: 145,
    id: 'man_blue_jacket'
  },
  {
    imgSrc: 'images/product_4.jpg',
    rating: 3,
    name: `Man Blue Jacket`,
    price: 145,
    id: 'man_blue_jacket'
  },
  {
    imgSrc: 'images/product_5.jpg',
    rating: 3,
    name: `Man Blue Jacket`,
    price: 145,
    id: 'man_blue_jacket'
  },
]

function createProductElement(product) {
  const { imgSrc, name, rating, price, id } = product

  const div = document.createElement('div')
  div.className = 'product'
  div.innerHTML = `
    <div class="product_image"><img src="${imgSrc}" alt="${name}"></div>
    <div class="rating rating_${rating}" data-rating="${rating}">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
    </div>
    <div class="product_content clearfix">
      <div class="product_info">
        <div class="product_name"><a href="product.html?id=${id}">${name}</a></div>
        <div class="product_price">$${price}</div>
      </div>
      <div class="product_options">
        <div class="product_buy product_option"><img src="images/shopping-bag-white.svg" alt=""></div>
        <div class="product_fav product_option">+</div>
      </div>
    </div>
  `

  return div
}

function loadProducts() {
  const root = document.getElementById('root')

  for (const product of data) {
    const div = createProductElement(product)
    root.appendChild(div)
  }
}

window.addEventListener('load', loadProducts)