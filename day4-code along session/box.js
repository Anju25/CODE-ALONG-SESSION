let button=document.getElementById('theBoxes');
button.addEventListener("click",myfunction); /* addEventListener should have functionn name and not funciton call i.e it is myfunction and not myfunction()*/


var oldValue=0,i=1; let n;
function myfunction()
{
  let n=document.getElementById('number').value; 
  n=parseInt(oldValue)+parseInt(n); 
  let color=document.getElementById('color').value;

  for (i=1;i<n;i++){
  var box=document.createElement('div'); /* div is tag..so here we are creating div tag */
  box.classList.add('myDiv'); /* here we r gonna add style to the box in class myDiv */
  document.getElementById('box').appendChild(box);
  box.style.backgroundColor=color;
  box.innerHTML =i;
  
  oldValue=document.getElementById('box').lastElementChild.innerHTML; 
   
}
}

