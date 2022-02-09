const list=["Study Javascript book","Go to Gym","work","hydrate","laugh"]

const listCont=document.querySelector('.list-cont')

let lastchecked

function handleClick(e){
   
    let inBetween=false


    if(e.shiftKey && this.checked){

        listItems.forEach(element=>{

            if(element===this || element===lastchecked){
                inBetween=!inBetween
            }
            
            if(inBetween) {

                element.checked=true
            }

        })
    }

     lastchecked=this;
    
}

for(var i=0;i<list.length;i++){

    var listi=document.createElement("input")
    listi.type="checkbox"
    listi.id = i;
    listi.name = 'interest';
    listi.value = list[i];
    

    var label=document.createElement("label")
    label.htmlFor=i;
     label.class="item"
    label.appendChild(document.createTextNode(list[i]));

    var br=document.createElement("br")

    listCont.appendChild(listi)
    listCont.appendChild(label)
    listCont.appendChild(br)

  
}
const listItems=document.querySelectorAll('input')
listItems.forEach(l=>{
    l.addEventListener('click',handleClick)
})



