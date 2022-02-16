/*


in javascript we use click event like this 


const selectButton = document.querySelector(`button`);
selectButton.addEventListener(`click`,function(){
    //console.log(`selected`);
    document.querySelector(`h1`).innerHTML ="Button has beed selected"
})

*/

/* but in Jquery we will do like this for click event -

$(`button`).click(function(){
//console.log(`ok`);
    $(`h1`).text(`button click by the jquery language`)
})
*/

/*If there are multiple buttons */
$(`.my-button`).on(`mouseover`,function(){
    //alert('ok');
    let buttonName=this.innerHTML; // taking button name 
    //console.log(buttonName);
    $(`h1`).text(buttonName+` has clicked`)
})
 
