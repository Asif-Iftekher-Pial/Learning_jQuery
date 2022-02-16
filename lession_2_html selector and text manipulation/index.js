
/*if we want to select any tag which is inside div class ,we will have to select that
div class first and then that tag */


//for selecting h1 which is inside div class
//$(` .my-div h1`).text(`selected heading one`);

//for selecting h1 which is outside div class
//$(`#headerID`).text(`outside H1 seletcted`)

//selecting paragraph
//$(`#para`).text(`paragraph has selected`)

//if want to add element with existing element -
//$(`#para`).append(` and new paragraph has appended`)


/* when we use HTML tag in jquery we will use html instead of text() */
//$(`#para`).html(`<b> paragraph selected with bold font make by html element </b>`)

/*if we want to add new tag with its text by jquery  
after that we have to select the position tag for placing the created tag*/

const myPara = $(`<p></p>`).html(`<b>this is a paragraph created by jquery </b>`)
//$(`#para`).after(myPara); 

//placing before #para
$(`#para`).before(myPara);