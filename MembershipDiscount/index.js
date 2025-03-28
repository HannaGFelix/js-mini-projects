
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const blueMembership = document.getElementById("blue");
const greenMembership = document.getElementById("green");
const purpleMembership = document.getElementById("purple");
const warning = document.getElementById("warning");
const totalPrice = document.getElementById("totalPrice");

submit.onclick = function(){

    let discount = 0;
    let finalPrice = 0;
    let price = Number(document.getElementById("productPrice").value);

    //ternary opreation
    price <= 0 || isNaN(price) ? warning.innerText = "No price entered" : warning.innerText = "";

    //.check. checking which membership did user choose.
    if(blueMembership.checked){
        
        discount = 10;

    }else if(greenMembership.checked){

        discount = 25;

    }else if(purpleMembership.checked){

        discount = 50;

    }

    finalPrice = price - (price * (discount/100));

    totalPrice.innerText = `Your final price is $${finalPrice}`;

reset.onclick = function(){
    document.getElementById("productPrice").value = "";
    warning.innerText = "";
    totalPrice.innerText = "";
    console.clear();
};

}
