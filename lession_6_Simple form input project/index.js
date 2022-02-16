$(`#myButton`).on(`click`,function(e){
    e.preventDefault();
    //console.log(`ok`);
    let inputFiled1 = $(`#text`).val();
    let inputFiled2 = $(`#exampleInputPassword1`).val();
    //console.log(inputFiled1);
    if(inputFiled1 != "" && inputFiled2 !=""){
        if(inputFiled1 == inputFiled2){
            
            alert("Successfully matched..!!")
            
        }else{
            alert("both fiend should have same value")
        }
    }else{
        alert("enter information in both field")
    }
})