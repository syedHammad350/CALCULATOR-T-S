let inp= document.getElementById('inp') as HTMLInputElement
// console.log(inp)

let button= document.getElementById('btn') as HTMLButtonElement
// console.log(button)


 

function off(){
    if(inp.getAttribute('placeholder' )  =='0'){
     inp.setAttribute('placeholder','')
     button.innerHTML='ON'
     inp.value=''
 
    }else{
     button.innerHTML='OFF'
     inp.setAttribute('placeholder','0')
    
     
    }
         
         
     }




function sum(num:number):void{
    inp.value+=num

}

function clearall():void{
    // console.log(" h.r")
    inp.value=''
}

function answer():void{
    // console.log(' h.r')
    var output=eval(inp.value)
    inp.value=output
}

function del(){
    // console.log('hi h.r')
  inp.value=  inp.value.slice(0,-1)
 }


