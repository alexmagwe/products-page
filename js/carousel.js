let thumbnails=document.querySelectorAll('.thumbnail');
let featured=document.getElementById('featured')
console.log(thumbnails)
thumbnails.forEach(pic=>{
    pic.addEventListener('mouseover',function(){
        this.classList.add('active');
        featured.src=this.src
                     });
     pic.addEventListener('mouseleave',function(){

    let activeones=document.querySelectorAll('.active')
    activeones.forEach(ac=>{
          if (ac.src!==featured.src){
        ac.classList.remove('active')

          }
      })

    })


})