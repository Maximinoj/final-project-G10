// Create a ItemsController class
class productsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.productArray= [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(pName,imageUrl,price, description) {
        const product = {
            // Increment the currentId property
            id: this.currentId++,
            pName,
            imageUrl,
            price,
            description,
           
        };
        

        // Push the item to the items property
        this.productArray.push(product);
        this.setLocalStorage();
        

    }

    setLocalStorage() {
        let storeProduct = JSON.stringify(this.productArray);
        localStorage.setItem('item', storeProduct);
        let currentID = JSON.stringify(this.currentId);
        localStorage.setItem('currentId', currentID);
    
    }

    loadLocalStorage(){
        if(localStorage.getItem('item')){
            let productArrayJson = localStorage.getItem('item');
            this.item = JSON.parse(productArrayJson);   
        }
        if(localStorage.getItem('currentId')) {
            let currentIdString = localStorage.getItem('currentId');
            this.currentId = Number(currentIdString);
        }

    }
}

// console.log(setLocalStorage);

