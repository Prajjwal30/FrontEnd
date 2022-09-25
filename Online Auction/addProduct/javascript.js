function validateForm(){

    let Name= document.Product.pnm;
    let Description= document.Product.descrip;
    let Price=document.Product.Actprice;
    let Quantity=document.Product.Quantity;

    if(Name.value.length==0){
        alert('Product name is mandatory');
        return false;
    }

    if(Description.value.length==0){
        alert("Description is mandatory");
        return false;
    }

    if(Price.value.length==0){
        alert("Price is mandatory");
        return false;
    }

    if(Quantity.value.length==0){
        alert("Quantity is mandatory");
        return false;
    }

    return true;
}