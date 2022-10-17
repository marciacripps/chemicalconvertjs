const calculateChem = () => {
    const numberChem = document.getElementById('chem').value;
     
    const chemSelected= document.getElementById('chem_diff');
    
    const valueChem =  chem_diff.options[chemSelected.selectedIndex].value;

    
    const galToPint = (gal) =>{
       let pint = (gal * 8); 
       return pint;
    }
    const pintToGal = (pint) =>{
       let gal = (pint/8); 
       return gal;
    }
    
    let result;
   
     if(valueChem == 'gal'){
       result = galToPint(numberChem);
       document.getElementById('resultContainer').innerHTML= `= ${result} Pints` ;}
       else{
           result = pintToGal(numberChem);
           document.getElementById('resultContainer').innerHTML= `= ${result} Gallons` ;}
       }