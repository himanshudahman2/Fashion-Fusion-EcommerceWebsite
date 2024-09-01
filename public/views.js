const searchFun = () => {
   
    let filter = document.getElementById('myInput').value.toUpperCase();
    
  
    if (filter.length < 3) {
  
        let myData = document.querySelectorAll('.javascipt');
        for (let i = 0; i < myData.length; i++) {
            myData[i].style.display = '';
        }
        return;
    }
 
    let myData = document.querySelectorAll('.javascipt');
 
    for (let i = 0; i < myData.length; i++) {
     
        let h5 = myData[i].getElementsByTagName('h5')[0];
        
         let value = h5.textContent || h5.innerText;
        
         if (value.toUpperCase().indexOf(filter) > -1) {
             myData[i].style.display = '';
        } else {
             myData[i].style.display = 'none';
        }
    }
};

 document.getElementById('myInput').addEventListener('input', searchFun);


 document.getElementById('myInput').addEventListener('input', searchFun);
