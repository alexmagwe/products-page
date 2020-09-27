let cartbtn=document.querySelector('#cart-btn');
console.log('cart js')
const addToCart=e=>{

    let imglink=document.querySelector('#featured').src
    console.log(e.target.parentElement.children)
    let name=e.target.parentElement.children[0].innerHTML
    let id=e.target.parentElement.children[0].id
    let price=e.target.parentElement.children[1].innerHTML
    let quantity=parseInt(e.target.parentElement.children[3].value)
    let product={id,name,price,quantity,imglink}
    console.log(product)
    let cart=JSON.parse(localStorage.getItem('cart'))
    console.log('cart',cart)
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))


}
cartbtn.addEventListener('click',addToCart);


