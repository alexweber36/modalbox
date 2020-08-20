const newDiv = document.querySelector('.divimag');
const btn=document.getElementById('btn');
btn.addEventListener('click',generate);

const closebtn=document.getElementById('modbox');
closebtn.addEventListener('click',closeBtn);

document.querySelector('.modal').addEventListener('click',openModel)

function closeBtn(){
    closebtn.style.display='none'
    // remove imagesParent
    // console.log('another close btn');
}

function openModel(){
    newDiv.style.display='block';
    // console.log('opens btn')
}

 window.addEventListener('click',clickOutside)
 function clickOutside(e){
    if(e.target==newDiv){
        newDiv.style.display='none';
        // console.log('closes btn');
        
    }
    
}
function generate(){
   let x = Math.floor((Math.random()*2)+4);
    
   //create an element [imagesParent] inside document.querySelector('.divimag')


    for (let index =0;index < 6;index++){
        let x = Math.floor((Math.random()*6)+1);
        document.querySelector('.divimag').innerHTML+=`
     <img src="photos/mara${x}.jpg"style=width:100px;"> 
     `
    }
     const newDiv='divimag'
     setTimeout(()=>{
        let photo=x;
        if(photo===2||photo===5){
           
            const ele=document.createElement('div')
            ele.className.add(newDiv)
            newDiv.appendChild(ele)
        } 
        document.querySelectorAll('newDiv').innerHTML+=`
        <ul>
         <li>${photo}</li>
        </ul>
        
        `
        
    },2000)
   
}




