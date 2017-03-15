// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onmouseover = function(){
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     }



//  function sli(el){
//  	var acc = document.getElementsByClassName("accordion");
// console.log(el.find(".panel"))
// for (var i = 0; i < acc.length; i++) {
// 	document.getElementsByClassName("accordion")[i];
//         el.classList.toggle("active");
        
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     }
// }

function slider(val) {
	var accP = document.getElementsByClassName("panel");
   	console.log(val.children)

    for (var i = 0; i < document.getElementsByClassName("accordion").length; i++) {
        var element = document.getElementsByClassName("accordion")[i];
        element.className = element.className.replace("otherclass", "");

    }
    if (!val.classList.contains('otherclass')) {
        val.className += " otherclass";
    }  

    if(val.classList.contains('otherclass')) {
    	var chil = val.children[0];
     chil.style.display="block"
        		
   }
   else{
   	if(chil.style.display="block"){
   		var chil = val.children[0];
          chil.style.display="none"

   	}
   }
}

function clickNext() {
    var elements = document.getElementsByClassName('accordion');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('otherclass')) {
            if (i == (elements.length - 1)) {
                slider(elements[0])


            } else {
                slider(elements[i + 1])

            }
            break;
        }
    }
}