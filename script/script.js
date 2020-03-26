const input1=document.getElementById("val1");
const soumettre=document.getElementById("soumettre");

let billets=[500,200,100,20,5,2,1];
let nBillet=[];

function deconstruct(a){
  nBillet.splice(0);
    
  let b= 0;
  let i;

  
  for(i=0;i<billets.length;i++){
 
      if(a>=billets[i]){
          b=(a-a%billets[i])/billets[i];//nBre de Billets
          a = a%billets[i];//reste de la somme des billets
          
      }else{b=0;}
      //affichage
      nBillet.push(" "+billets[i].toString()+" = "+b); 
  };
    
  return nBillet;
}

soumettre.addEventListener("click",()=>{
  
  document.getElementById("result").textContent="résultat : "+ deconstruct(input1.valueAsNumber);
});
