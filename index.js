const cards = [...document.getElementsByClassName("card")]
const img_principal = document.getElementById("img_principal")
const btn_add = document.getElementById("btn_add")
const btn_somar = document.getElementById("somar")
const btn_diminuir = document.getElementById("diminuir")
const btn_deleta = document.getElementById("imgdeleta")
const btn_checkout = document.getElementById("btn_checkout")
const txt_qnt = document.getElementById("txt_qnt")
const valorcar = document.getElementById("valorcar")
const caixacarrinho = document.getElementById("caixatexto")
const carrinho = document.getElementById("carrinho")
const caixacompra = document.getElementById("caixacompra")
const frasecarrinho = document.getElementById("frasecarrinho")
const frasecompra = (document.getElementById("frasecompra"))
const fecharmodal = document.getElementById("fecharmodal")
const previmgmodal = document.getElementById("previmgmodal")
const nextimgmodal = document.getElementById("nextimgmodal")
const fundomodal = document.getElementById("fundomodal")
const img_principalmodal = document.getElementById("img_principalmodal")
const menu = document.getElementById("menu");
const menuBar = document.getElementById("menu_icon");
const iconMenu = document.querySelector('nav .menu-icon img');
const fecharmenu = document.getElementById("fecharmenu")

menuBar.addEventListener('click',()=>{
 
    menu.classList.toggle("active");

    if(menu.classList.toggle == "active"){
        fecharmenu.style.display = "none";
    }else{
        fecharmenu.style.display = "block";
    }

})

fecharmenu.addEventListener("click",()=>{
    menu.classList.remove("active");
})


btn_somar.addEventListener("click", ()=>{
  const value = Number(txt_qnt.innerText)
  let n = 1;
  txt_qnt.innerText = value + n
})

btn_diminuir.addEventListener("click", ()=>{
    const value = Number(txt_qnt.innerText)
    if(value == 0){
        txt_qnt.innerText = 0
    }else{
        let n = 1;
        txt_qnt.innerText = value - n
    }  
})

btn_add.addEventListener("click", ()=>{
    valorcar.style.display = "block"
    valorcar.innerHTML = txt_qnt.innerText
    frasecompra.innerText = `Fall limited Edition Sneakers 
 $125 x  ${txt_qnt.innerText} $${Number(125*txt_qnt.innerText)}`
    btn_checkout.style.display = "block"
    frasecarrinho.style.display = "none"
    caixacompra.style.visibility = "visible"
})

btn_deleta.addEventListener("click", ()=>{
    caixacompra.style.visibility = "hidden"
    btn_checkout.style.display = "none"
    frasecarrinho.style.display = "block"
    valorcar.innerHTML = "0"
 
  })
    

cards[0].addEventListener("click", ()=>{
     img_principal.setAttribute("src", "./images/image-product-1.jpg")
})

cards[1].addEventListener("click", ()=>{
    img_principal.setAttribute("src", "./images/image-product-2.jpg")
})

cards[2].addEventListener("click", ()=>{
    img_principal.setAttribute("src", "./images/image-product-3.jpg")
})

cards[3].addEventListener("click", ()=>{
    img_principal.setAttribute("src", "./images/image-product-4.jpg")
})

cards[4].addEventListener("click", ()=>{
    img_principalmodal.setAttribute("src", "./images/image-product-1.jpg")
})

cards[5].addEventListener("click", ()=>{
    img_principalmodal.setAttribute("src", "./images/image-product-2.jpg")
})

cards[6].addEventListener("click", ()=>{
    img_principalmodal.setAttribute("src", "./images/image-product-3.jpg")
})

cards[7].addEventListener("click", ()=>{
    img_principalmodal.setAttribute("src", "./images/image-product-4.jpg")
})


    
carrinho.addEventListener("click", ()=>{
 if(caixacarrinho.style.display == "none"){
    caixacarrinho.style.display = "block"
 }else{
    caixacarrinho.style.display = "none"
 } })


 img_principal.addEventListener("click", ()=>{
    fundomodal.style.display = "block"
 })
 
 fecharmodal.addEventListener("click", ()=>{
    fundomodal.style.display = "none"
 })


 previmgmodal.addEventListener("click", ()=>{

        
    
       
        const array = ["./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"]
        img_principalmodal.setAttribute("src", array[2])
        
    })
 