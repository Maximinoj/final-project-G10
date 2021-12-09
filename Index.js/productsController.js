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
    }
}

console.log(this.productArray);