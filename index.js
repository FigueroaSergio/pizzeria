products={"pizzas":[
                {'name':'Napolitana','price':100,'tamaño':'mediana','img':'./img/pizzanormal.png'},
                {'name':'Vegetariana','price':200,'tamaño':'mediana','img':'./img/pizzaVege.png'},
                {'name':'Vegetariana','price':200,'tamaño':'mediana','img':'./img/pizzaAjo.png'},
                ],           
}
positions = {
    "pizzas":{'position':0, 'sizes':0},    
}
document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll('button').forEach(button=>{
        // Agregamos a todos los botones la funcion render element
        button.onclick = function(){
            renderElement(this.dataset.target,this.dataset.action)
        }
    })
})

function renderElement(target,action){
    let name = document.getElementById('sabor')
    let price = document.getElementById('price')
    let size = document.getElementById('tamaño')
    let img = document.getElementById('img-pizza')
    let position = positions[target]['position']
    if(action=='next-t')
    {   
        if(position + 1 > products[target].length - 1)
        {
            positions[target]['position'] = 0
            console.log(positions[target]['position'])
        }
        else{
            positions[target]['position'] += 1
            console.log(positions[target]['position'])
        }
        pizza=products[target][1]
        name.innerHTML= pizza["name"]
        price.innerHTML= pizza["price"]
        size.innerHTML= pizza["tamaño"]
        img.src= pizza["img"]
    }else
    {
        pizza=info[target][0]
        document.getElementById('sabor').innerHTML= pizza["name"]
        document.getElementById('price').innerHTML= pizza["price"]
        document.getElementById('tamaño').innerHTML= pizza["tamaño"]
        document.getElementById('img-pizza').src= pizza["img"]
    }
   
    

}