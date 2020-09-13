
var productNameInput = document.getElementById("productNameInput");//Input klo
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");


var productNameAlert = document.getElementById("productNameAlert");
var productPriceAlert = document.getElementById("productPriceAlert");

var productList;

 if(localStorage.getItem("ourProducts") == null)//client gdid//maloo4 7aga
 {
    productList = [];
 }
else//leh data mawgoda abl kdaaa
{
    productList = JSON.parse( localStorage.getItem("ourProducts"));
    displayProducts(productList);
}

//2M
/*************************** */
function validNameProduct(ProductName)
{
    var regex=/^[A-Z][a-z]{3,5}$/;
    if (regex.test(ProductName)==true)
    {
        productNameAlert.classList.replace("d-block","d-none");
        productNameAlert.classList.remove("is-invalid");
        productNameAlert.classList.add("is-valid");
}
else{
    productNameAlert.classList.replace("d-none","d-block");
    productNameAlert.classList.remove("is-valid");
    productNameAlert.classList.add("is-invalid");

}
}
productNameInput.addEventListener("keyup",function(){
    validNameProduct(productNameInput.value);
})
/*********************************************** */


function validPriceProduct(Priceproduct)
{
    var regex=/^[1-9]([0-9]{2,3})|10000$/;
    if (regex.test(Priceproduct)==true)
    {
        productPriceAlert.classList.replace("d-block","d-none");
        productPriceAlert.classList.remove("is-invalid");
        productPriceAlert.classList.add("is-valid");
}
else{
    productPriceAlert.classList.replace("d-none","d-block");
    productPriceAlert.classList.remove("is-valid");
    productPriceAlert.classList.add("is-invalid");

}
}
productPriceInput.addEventListener("keyup",function(){
    validPriceProduct(productPriceInput.value);
})







/*************************** */

function addProduct() {
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    productList.push(product);//1
    localStorage.setItem("ourProducts" , JSON.stringify( productList) );
    displayProducts(productList);
    clearForm();
}

function clearForm( ) 
{
    productNameInput.value = "";
    productPriceInput.value = "";
    productDescInput.value = "";
    productCategoryInput.value = "";

}
function displayProducts(anyArray) 
{
    var cartoona = "";
    for (var i = 0; i < anyArray.length; i++)//2
    {
        cartoona += `<tr>
                                <td>${i}</td>
                                <td>${anyArray[i].name}</td>
                                <td>${anyArray[i].price}</td>
                                <td>${anyArray[i].category}</td>
                                <td>${anyArray[i].desc}</td>
                                <td><button class="btn btn-warning">update</button></td>
                                <td><button onclick="deleteProduct(${i})"  class="btn btn-danger">delete</button></td>
                    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}



function deleteProduct(index) {

    productList.splice( index, 1);
    localStorage.setItem("ourProducts" , JSON.stringify( productList) );
    displayProducts(productList);
  }


var searchInput = document.getElementById("searchInput");

 function searchProducts() 
 {
    var searchTerm = searchInput.value;
    var wantedProducts = [];
    for(var i=0 ; i < productList.length ; i++)
    {
        if(productList[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            wantedProducts.push(productList[i]);
        }
    }
    displayProducts(wantedProducts);
 }
///DRY code  dont repeat your code





