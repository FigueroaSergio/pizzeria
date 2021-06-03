products={"pizzas":[
                {'name':'Napolitana','price':[200,350,450],'sizes':['pequeña','mediana','grande'],'img':'./img/pizzanormal.png'},
                {'name':'Vegetariana','price':[400,550,550],'sizes':['pequeña','mediana','grande'],'img':'./img/pizzaVege.png'},
                {'name':'Ajo','price':[100,250,350],'sizes':['pequeña','mediana','grande'],'img':'./img/pizzaAjo.png'},
                ],
         
}
positions = {
    "pizzas":{'position':0, 'size':0},    
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
    let sizes = positions[target]['size']

    switch (action){
        case 'next-p':
            if(positions[target]['position']+1 > products[target].length - 1)
                position = positions[target]['position'] = 0
            else           
                position = positions[target]['position'] += 1           

            break;

        case 'back-p':
            if(positions[target]['position']-1 < 0)
                position = positions[target]['position'] = (products[target].length - 1);
            else
                position = positions[target]['position'] -= 1            

            break;
        
        case 'next-s':
            if(positions[target]['size']+1>products[target][position]['sizes'].length-1 )
                sizes = positions[target]['size'] = 0
            else
                sizes = positions[target]['size'] +=1
            break;
        case 'back-s':
            if(positions[target]['size']-1   < 0 )
                sizes = positions[target]['size'] = (products[target][position]['sizes'].length-1 )
            else
                sizes = positions[target]['size'] -=1
            break;
        default:
            console.log('click')
            break;
        
    }
  
   
        
    pizza=products[target][position]
    name.innerHTML= pizza["name"]

    size.innerHTML= pizza["sizes"][sizes]
    price.innerHTML= pizza["price"][sizes]
    
    img.src= pizza["img"]  
}