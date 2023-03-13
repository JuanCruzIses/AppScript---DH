let buttonShowProducts = document.querySelector("#button-showProduct")
let containerProducts = document.querySelector('.container-products')

buttonShowProducts.addEventListener("click", (e)=>{
    e.preventDefault()
    fetch("https://script.google.com/macros/s/AKfycbzed3vRxQzVlMKYIc4Ds8hk___-Be8IsY0cxeeMEYEEw0kscVEAYAotvaoqDeGoWqf1/exec", {
        method: 'GET',
    headers: {
        'Content-Type': 'text/plain;charset=utf-8',
    }
})
.then(response => response.json())
.then((data) => { 
    let datos = data.datos
    for(let i = 0; i < datos.length; i++){
            let divProduct = document.createElement('div')
            divProduct.classList.add('card-product')

            let title = document.createElement('h4')
            title.textContent = datos[i].modelo
            
            let img = document.createElement('img')
            img.src = datos[i].imagen
            
            let price = document.createElement('p')
            price.textContent = datos[i].precio
            
            let info = document.createElement('p')
            info.textContent = `${datos[i].marca} - ${datos[i].lanzamiento} ` 

            divProduct.appendChild(img)
            divProduct.appendChild(title)
            divProduct.appendChild(price)
            divProduct.appendChild(info)
            containerProducts.appendChild(divProduct)
        };
    }
)
}
)