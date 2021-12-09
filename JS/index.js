// Initialize a new TaskManager with currentId set to 0
const productManager = new productsController(0);

// Select the New Task Form
const addSubmit = document.getElementById("submitbtn");

// Add an 'onsubmit' event listener
addSubmit.addEventListener('click', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
   let pName = document.getElementById('product-name');
   let pURL = document.getElementById('picture-url');
   let pPrice = document.getElementById('price');
   let pDescription = document.getElementById('description');


    // Add the task to the task manager
   
    productManager.addItem(pName.value, pURL.value, pPrice.value, pDescription.value);

    // Get the values of the inputs
    let newProduct = {
        pName: pName.value, 
        pURL: pURL.value, 
        pPrice: pPrice.value, 
        pDescription: pDescription.value

    }
   
    addItemToProductList(newProduct);

    // Clear the form
    pName.value = '';
    pURL.value = '';
    pPrice.value = '';
    pDescription.value = '';

    console.log(productManager.productArray);
    
});

const addItemToProductList = (item) => {
        console.log(item);
        let newRow = 


}






// function addItemCard(item){
//     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
//         '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
//         '    <div class="card-body">\n' +
//         '        <h5 class="card-title">'+item.name+'</h5>\n' +
//         '        <p class="card-text">'+item.description+'</p>\n' +
//         '        <a href="#" class="btn btn-primary">Add</a>\n' +
//         '    </div>\n' +
//         '</div>\n' +
//         '<br/>';
//     const itemsContainer = document.getElementById("list-items");
//     itemsContainer.innerHTML += itemHTML;
// }

// addItemCard({'name':'juice',
//     'img':'https://www.gs1india.org/media/Juice_pack.jpg',
//     'description':'Orange and Apple juice fresh and delicious'});

// addItemCard({'name':'Tayto',
//     'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
//     'description':'Cheese & Onion Chips'})