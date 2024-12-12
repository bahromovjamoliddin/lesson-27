async function fetchData(){
   try {

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
   } catch (error) {
    console.log("hato",error);
    
   }
   
}
(async()=>{
    const posts = await fetchData()
    const section = document.querySelector('.section')
    posts.forEach((el) => {
        const div = document.createElement('div')
        div.className = 'wrapper'
        div.innerHTML = `
        
<div class="contener">
    <div class="contener_card">
    <div class = "card_imeges">
    <div class="imeges">
<img src="./img/rasm2.jpg" alt="rasm">
</div>
</div>
<div class="card_id">
    <div class="cardId">
    <a href="https://jsonplaceholder.typicode.com/users">id:${el.id}</a></div>
    </div>
<div class ="card_title">
       <div class="title">
           <h4>${el.name}</h4>
       </div>
<div class="iphone">
           <a href="tel:${el.phone}">tel:${el.phone}</a>
       </div>
         <div class="border_border">
<div class="border"></div>
</div>
       <div class="adress">
<h4>adress:${el.address.city}</h4>
</div>
        </div>
        </div>
   </div>
        `
        section.appendChild(div)
    });
    
})()