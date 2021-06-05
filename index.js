products={"pizzas":[
                {'name':'Napolitana','price':[200,350,450],'sizes':['pequeña','mediana','grande'],'img':'./img/pizzanormal.png'},
                {'name':'Vegetariana','price':[400,550,550],'sizes':['pequeña','mediana','grande'],'img':'./img/pizzaVege.png'},
                {'name':'Ajo','price':[100,250,350],'sizes':['pequeña','mediana','grande'],'img':'./img/pizzaAjo.png'},
                ],
            "bebidas":[
                {'name':'Cocacola','price':[200,350,450],'sizes':['pequeña','mediana','grande'],'img':'./img/soda.png'},
                {'name':'Manzana','price':[400,550],'sizes':['pequeña','mediana'],'img':'./img/sodaManzana.png'}
                ],
            "adiciones":[
                {'name':'Papas','price':[200,350,450],'sizes':['pequeña','mediana','grande'],'img':'./img/papas.png'},
                {'name':'Fruta','price':[400,550,550],'sizes':['pequeña','mediana','grande'],'img':'./img/fruto.png'},
                {'name':'Dulces','price':[100,250,350],'sizes':['pequeña','mediana','grande'],'img':'./img/dulces.png'},
                ],
         
}
positions = {
    "pizzas":{'position':0, 'size':0},   
    "bebidas":{'position':0, 'size':0},  
    "adiciones":{'position':0, 'size':0},
}
document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll('button').forEach(button=>{
        // Agregamos a todos los botones la funcion render element
        button.onclick = function(){
            renderElement(this.dataset.target,this.dataset.action)
        }
    }) 
    renderElement('pizzas')   
    renderElement('bebidas') 
    renderElement('adiciones') 
})

function renderElement(target,action=1){
    let name = document.getElementById(`sabor-${target}`)
    let price = document.getElementById(`price-${target}`)
    let size = document.getElementById(`tamaño-${target}`)
    let img = document.getElementById(`img-${target}`)
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
            break;
        
    }
  
   
        
    pizza=products[target][position]
    name.innerHTML= pizza["name"]

    size.innerHTML= pizza["sizes"][sizes]
    price.innerHTML= pizza["price"][sizes]
    
    img.src= pizza["img"]  
}