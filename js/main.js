let product = document.getElementById('shop');

let shopitemData = [
    {
id: "tttttt",
name: "Green Wrist band",
price: 50,
desc: "lorum jkhnksfvhjnjknlkk",
img: "img/wrist-band1.png"
},
{
    id: "jnbijiji",
name: "Laptop ",
price: 100,
desc: "lorum jkhnksfvhjnjknlkk",
img: "img/cart1.png"
},
{
    id: "jhgirjgio",
name: "White Wrist band",
price: 80,
desc: "lorum jkhnksfvhjnjknlkk",
img: "img/wrist-bad2.png"
},
{
    id: "jhiru",
name: "Black Wrist band",
price: 200,
desc: "lorum jkhnksfvhjnjknlkk",
img: "img/wrist-band3.png"
},
];

let generateproduct = () => {
    return (shop.innerHTML = shopitemData.map((x)=>{
        let {id,name,price,desc,img} =x
        return `
        <div id=product-id-${id} class="col-4">
        <img src="${img}" alt="">
        <h4>${name}</h4>
        <p>${desc}</p>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p>$${price}</p>
    </div>
        `;
    }).join(""));
};


generateproduct();






































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