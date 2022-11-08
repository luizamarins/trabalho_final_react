export 

function handleRegisterProducts() {

    

    productService.postProducts(product).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
}