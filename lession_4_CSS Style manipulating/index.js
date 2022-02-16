


//$(`a,h1`).css(`color`,`blue`) // for single css property change 


/*if we want to change multiple property  use {} 
$(`h1`).css({
    "color": "red",
    "font-size" : "5rem"
})
*/

/*but its not the best practice to use css property in here.. 
we should do css in css file and add the class of css */


$(`h1`).addClass(`style`)