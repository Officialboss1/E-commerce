let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let carticon = document.getElementById("cartAmount");
    carticon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);
};

calculation();