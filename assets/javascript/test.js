/**
 * File Name: test.js
 * Description: Javascript code used by test.html
 * @author: Analia Mok
 */


/**
 * menuDrop - onclick method for revealing and 
 *  hiding the menu
 */
function menuDrop(){
    // All a tags inside menu
    var menuItems = document.getElementsByClassName("main_nav")[0].getElementsByTagName("a");
    
    var totalItems = menuItems.length;
    
    // Toggle all menu items based on value of display
    for(var i = 0; i < totalItems; i++){
        var currItem = menuItems[i];
        
        if(currItem.style.display === "none"){
            // Toggle On
            currItem.style.display = "block";
        }else{
            // Toggle Off
            currItem.style.display = "none";
        }
        
    }
    
} // End of menuDrop