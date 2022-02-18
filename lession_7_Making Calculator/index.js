
 var displayedNumber= $(`#result`).val();
function insertNumber(number){
    //alert(number)
    var existingNumber = $(`#result`).val();;
    $(`#result`).val(existingNumber + number);
}
function clearNumber(){
   // $(`#result`).val(); // whatever the numbers entered that is stored in textfield
    $(`#result`).val(``); // clearing the textfield
}
function calculate(){
  // whatever the numbers entered that is stored in textfield
    /*there is a mathmatical function called eval() that 
    calculate all kind of math prob */
   var calculatedResult= eval($(`#result`).val());
   $(`#result`).val(calculatedResult);
}

function deleteNumber(){
    var value = $(`#result`).val();
    if(value !=''){
        $(`#result`).val(value.slice(0,-1))
    }
}
