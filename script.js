
    let color = document.getElementsByClassName('color')[0];
    let color2 = document.getElementsByClassName('color')[1];
    let color3 = document.getElementsByClassName('color')[2];
    let color4 = document.getElementsByClassName('color')[3];


    color.style.backgroundColor = "black";
    color2.style.backgroundColor = "pink";
    color3.style.backgroundColor = "red";
    color4.style.backgroundColor = "brown";

    const colorPalette = document.querySelectorAll(".color");
    
    function generateColors() {
        colorPalette.forEach((color) =>{
        let hexCode = "#" +  Math.random().toString(16).substring(2, 8);
        color.style.backgroundColor = hexCode;    
        
        if(color === hexCode){     
        generateColors();    
        }    
    })
    let color = document.getElementsByClassName('color')[0];
    color.style.backgroundColor = "black";
    }
    
    generateColors();
    

    
































