
/*     */

                        /* Footer JavaScript     */


document.getElementById("copyrightYear").appendChild(document.createTextNode("Copyright "));

document.getElementById("copyrightYear").appendChild(document.createTextNode(new Date().getFullYear()));

document.getElementById("copyrightYear").appendChild(document.createTextNode( " \u00A9 "));

document.getElementById("copyrightYear").appendChild(document.createTextNode( " Adventure Insurance "));

var changeColor = document.getElementById("copyrightYear");

changeColor.style.color = "black"; 

changeColor.style.marginLeft = "35px";

                                 /* Footer JavaScript     */


                                    /* FORM JavScript     */
                                    


function thankYou() {

    var x = document.getElementById("First-Name").value;
    var a = document.getElementById("preference").value;

    alert("Thank you for your feedback " + x + " Someone should be contacting you via " + a ); 
}
                                /* FORM JavScript     */



                                        /* IMAGE-CHANGER JavScript     */
var image_tracker = "f";
function change() {
    var image = document.getElementById("myImage");
    if(image_tracker == 'f') {
        image.src = 'images/PGHZoo-sealions.JPG';
        image_tracker = "t"

    }  else  {
        image.src = 'images/Venice_Beach_Skatepark_(Unsplash).jpg'
        image_tracker = 'f';
    }
    
   

    
}


                         /* IMAGE-CHANGER JavScript     */