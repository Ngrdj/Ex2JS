    
/*--------------------------------------------------Variables------------------------------------------------------------*/
    
const input1 = document.getElementById('val1');
const soumettre = document.getElementById('soumettre');

const checkBoxes = document.querySelectorAll('.billet');

let billets = [500,200,100,50,20,10,5,2,1];
let nBillets = [];

const lineBreak = document.createElement("br") ;

/*--------------------------------------------------Fonctions------------------------------------------------------------*/

function deconstruct(a){
    
  nBillets.splice(0);
    
  let b= 0;
  let i;

  for(i=0;i<billets.length;i++){
 
      if(a>=billets[i]){
          
          b=(a-a%billets[i])/billets[i];//nBre de Billets
          a = a%billets[i];//reste de la somme des billets
          
      }else{b=0;}
      
      //affichage
      if(billets[i]>=5){
          nBillets.push(" billets de "+billets[i].toString()+" : "+b); 
      }
      else{
          nBillets.push(" pièces de "+billets[i].toString()+" : "+b);
      }
      
  }
    
  return nBillets;
}


/*--------------------------------------------------Evenements------------------------------------------------------------*/


soumettre.addEventListener("click", () => {
    
  if(billets.length>0){
      
      document.getElementById("result").textContent="Résultat(s) : "+ deconstruct(input1.valueAsNumber);
      
  }
    else{
        
        alert("veuillez sélectionner une coupure");
        
    }
    
});

checkBoxes.forEach(function(item, index){
    /*console.log(item);*/
    item.checked=true;
    item.addEventListener('click', function () {
        if(item.checked){
            billets.push(Number(item.value));
        }else {
            /*console.log(checkBoxes[i]);*/
            billets.splice(index,1)
        }
        const sortDesc = (a, b) => b - a;
        billets.sort(sortDesc);
        console.log(billets);
    });
});
