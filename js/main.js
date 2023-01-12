let product = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateproduct = () => {
    return (shop.innerHTML = shopitemData.map((x)=>{
        let {id,name,price,desc,img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="col-4">
        <img src="${img}" alt="">
        <h4>${name}</h4>
        <p>${desc}</p>
        <div class="rating">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        </div>
        <p>$${price}</p>
        <div class="plus-minus">
        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
        <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
    </div>
        `;
    }).join(""));
};

generateproduct();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1;
    }
    //console.log(basket);
    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }
    update(selectedItem.id)
    basket = basket.filter((x) => x.item !==0);
    //console.log(basket);
  

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.item)
    document.getElementById(id).innerHTML = search.item;
    calculation()
};

let calculation = () => {
    let carticon = document.getElementById("cartAmount");
    carticon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);
}

calculation()

































let MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight == "200px"
            }
            else
            {
                MenuItems.style.maxHeight == "0px"
            }

        }