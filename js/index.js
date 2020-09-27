const localserver='http://127.0.0.1:5000'
const herokuserver='https://shopit-api.herokuapp.com'
const grid=document.querySelector('#products')
const getproducts=()=>{
       
    axios.get(herokuserver+'/products/all').then(resp=>{let products=resp.data;
        products.forEach((product,index)=>{
            let item=document.createElement('div')
            item.id=index.toString()
            let name=document.createElement('h3')
            let price=document.createElement('h3')
            name.innerHTML = product.name;
            let link=document.createElement('a')
            link.href='product.html'

            name.classList.add('name')
            price.classList.add('price')


            price.innerHTML = product.price;
            let img=document.createElement('img')
            item.classList.add('item')
            img.src='imgs/pancakes.jpg'
            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(price);
            link.appendChild(item);

            grid.appendChild(link);
        })
    
    })
}
const fillCart=(items)=>{

if (items.length>0){items.forEach(item=>{
    let tr=document.createElement('tr');
    let img=document.createElement('img')
    let changequantity=document.createElement('input')
    let quantity=document.createElement('td')
    let amount=document.createElement('td')
    let name=document.createElement('h4')
    let product=document.createElement('td')
    // product.colSpan="2"
     changequantity.type="number"
    changequantity.min="1"
    changequantity.value=item.quantity
    changequantity.classList.add('changequantity')
    img.src=item.imglink
    img.classList.add('cart-img')
    product.classList.add('cart-product')
    name.innerHTML = item.name
    amount.innerHTML = parseInt (item.price)*parseInt(item.quantity)
    quantity.appendChild(changequantity)
    product.appendChild(img)
    product.appendChild(name)
    tr.appendChild(product)
    tr.appendChild(quantity)
    tr.appendChild(amount)
    table.appendChild(tr)
        })
    }
}
    let localcart=localStorage.getItem("cart")
           if (!localcart){
            localStorage.setItem("cart",JSON.stringify([]))
           }
let cartlink=document.querySelector('#cart-link')
let cart=document.querySelector(".cart-container")
let table=document.querySelector("#cart-table")
let oldcart=JSON.parse(localStorage.getItem("cart"));
fillCart(oldcart)
let oldcartlength=oldcart.length

const getTotal=(items)=>{
    let total=0
    items.forEach(item=>{
        total+=parseInt(item.price)*item.quantity
    })
    return total
}
const toggleCart=()=>{
let items=JSON.parse(localStorage.getItem("cart"))

total=getTotal(items)
let totalcolumn=document.querySelector('#total')
totalcolumn.innerHTML=total
let diff=items.length-oldcartlength
if (diff>0){
    // add only new items to the cart
    let newitems=items.slice(oldcartlength);

    fillCart(newitems)    
}

    if (cart.classList.contains('show')){
        cart.classList.remove('show')
    }
    else{
        cart.classList.add('show')
    }
oldcartlength=items.length    
}
cartlink.addEventListener('click',toggleCart)
document.addEventListener('DOMContentLoaded',getproducts)
