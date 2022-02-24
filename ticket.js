
    document.addEventListener("DOMContentLoaded",(e) => {
    
        const $boton = document.getElementById("boton");

        $boton.addEventListener("click",  () => {

            const $div = document.getElementById("ticket");

            const xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange',e=>{
                if(xhr.readyState !== 4) return;

                if(xhr.status >= 200 && xhr.status <300){
                    let json =  JSON.parse(xhr.responseText);
                    console.log(json);
                    
                    $div.innerHTML = `Uds. Producto Precio Importe <br>`    ;
                    //  console.log(data)
        
                    let total = 0;
                    json.forEach(el => {
                        $div.innerHTML += `${el.quantity}   ${el.product}    ${el.unitPrice}   ${el.unitPrice * el.quantity} <br>`;
        
                        total += el.unitPrice * el.quantity;
                        
                    });
        
                    $div.innerHTML += `Total ${total}`;
                    
                }
            })
            xhr.open('GET', 'http://localhost:3000/');
            xhr.send();
          
        });
        
    });