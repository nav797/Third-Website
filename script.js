const products = [
    {
      name: 'Sony Playstation 5',
      url: 'images/playstation_5.png',
      type: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung Galaxy',
      url: 'images/samsung_galaxy.png',
      type: 'smartphones',
      price: 399.99,
    },
    {
      name: 'Cannon EOS Camera',
      url: 'images/cannon_eos_camera.png',
      type: 'cameras',
      price: 749.99,
    },
    {
      name: 'Sony A7 Camera',
      url: 'images/sony_a7_camera.png',
      type: 'cameras',
      price: 1999.99,
    },
    {
      name: 'LG TV',
      url: 'images/lg_tv.png',
      type: 'televisions',
      price: 799.99,
    },
    {
      name: 'Nintendo Switch',
      url: 'images/nintendo_switch.png',
      type: 'games',
      price: 299.99,
    },
    {
      name: 'Xbox Series X',
      url: 'images/xbox_series_x.png',
      type: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung TV',
      url: 'images/samsung_tv.png',
      type: 'televisions',
      price: 1099.99,
    },
    {
      name: 'Google Pixel',
      url: 'images/google_pixel.png',
      type: 'smartphones',
      price: 499.99,
    },
    {
      name: 'Sony ZV1F Camera',
      url: 'images/sony_zv1f_camera.png',
      type: 'cameras',
      price: 799.99,
    },
    {
      name: 'Toshiba TV',
      url: 'images/toshiba_tv.png',
      type: 'televisions',
      price: 499.99,
    },
    {
      name: 'iPhone 14',
      url: 'images/iphone_14.png',
      type: 'smartphones',
      price: 999.99,
    },
  ];
  
  // Select DOM Elements
  const productsWrapper = document.getElementById('products-wrapper');
  const checkboxes =  document.querySelectorAll('.check');
  const filtersContainer = document.getElementById('filters-container');
  const searchInput = document.getElementById('search');
  const cartCount = document.getElementById('cart-count');

  //Init cart item count

  let cartItemCount = 0;

  //init product element array

  const productElements =[];

  //event listeners for filtering
  filtersContainer.addEventListener('change',filterProducts);
  searchInput.addEventListener('input',filterProducts);

  //Loop over products and create an element

  products.forEach((product)=>{
    const productElement = createProductElement(product);
    productElements.push(productElement);
    productsWrapper.appendChild(productElement);
  });
  // function to create product element 
  function createProductElement(product){
    const productElement = document.createElement('div');
    productElement.className ='item space-y-2';
    productElement.innerHTML=`
    <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
                <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">
                <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
                    Add To Cart
                </button>
            </div>
            <p class="text-xl">${product.name}</p>
            <strong>$${product.price.toLocaleString()}</strong>
    `;

    productElement.querySelector('.status').addEventListener('click',updateCart);


    return productElement;
  }

  //add or remove

  function updateCart(e){
    const statusEl = e.target;
    
    if(statusEl.classList.contains('added')){
        //Remove from cart
        statusEl.classList.remove('added');
        statusEl.classList.remove('bg-red-600');
        statusEl.classList.add('bg-gray-800');
        statusEl.innerText='Add To Cart';

        cartItemCount-=1;
    }else{
        //Add to cart
        statusEl.classList.add('added');
        statusEl.innerText='Remove From Cart';
        statusEl.classList.remove('bg-gray-800');
        statusEl.classList.add('bg-red-600');

        cartItemCount+=1;
    }
    cartCount.innerText=cartItemCount.toString();
  }

  function filterProducts(){
    //get search
    const searchTerm = searchInput.ariaValueMax.trim().toLowerCase();
    // catagories
    
  }