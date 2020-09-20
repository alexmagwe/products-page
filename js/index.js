const server='http://127.0.0.1:5000'
const grid=document.querySelector('#products')
const getproducts=()=>{
    axios.get(server+'/products/all').then(resp=>{let products=resp.data;
        products.forEach(product=>{
            let item=document.createElement('div')
            let name=document.createElement('h3')
            let price=document.createElement('h3')
            name.innerHTML = product.name;
            let link=document.createElement('a')
            link.href='product.html'

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
document.addEventListener('DOMContentLoaded',getproducts)

