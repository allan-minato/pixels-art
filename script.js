 
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
            generateColors()
        }    

        localStorage.setItem('saveColors', hexCode);
      
    })
    
    let blackColor = document.getElementsByClassName('color')[0];
    color.style.backgroundColor = "black";
    blackColor.classList = 'color selected';
    }

    const container = document.querySelector('#pixel-board');
    const sizeE1 = document.querySelector('.size');
    const size = sizeE1.value;
    const colorInside = document.querySelector('.color'); 
    const reset = document.querySelector('#clear-board')

        function populate(size) {
            container.style.setProperty('--size', size)
            
            
            for (let index = 0; index < size * size; index += 1){
                const div = document.createElement('div')
                div.classList.add('pixel')
                container.appendChild(div)
                reset.addEventListener("click", function(){
                if(div.style.backgroundColor != 'rgb(255, 255, 255)'){
                div.style.backgroundColor = 'rgb(255, 255, 255)'
                }               
                
               
                   
                }
            )}
            }

    generateColors();
    populate(5);


    let colorPaletteSelected = document.getElementById('color-palette');
    colorPaletteSelected.addEventListener("click", function(select) {
      if (select.target.className == 'color'){ 
        let colorSelect = document.querySelector(".selected");  
        colorSelect.classList.remove("selected");
        select.target.classList.add("selected");
        }
      }
    )
    

    
    container.addEventListener('click', function(paintPixel) {
        let selectedColor = document.querySelector('.selected');
        let paint = getComputedStyle(selectedColor).backgroundColor;
        let paintedPixel = paintPixel.target;
        paintedPixel.style.backgroundColor = paint;
      }
      )

    


// pixel.addEventListener('click', function(event){
//     pixel.style.backgroundColor = color2.style.backgroundColor;
// })
    


























