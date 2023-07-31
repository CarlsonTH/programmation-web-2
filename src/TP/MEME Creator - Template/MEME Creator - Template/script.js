//------------------------------------------------------------------------------
//                   Carlson s'occupe de la section Image
//                   Nathanael s'occupe de la section Labels
//------------------------------------------------------------------------------

//---------------------------------Image---------------------------------------------

// 1 - js pour image
document.addEventListener('DOMContentLoaded', function () {
    // On récupère les références des images
    const templateSelector = document.getElementById('templateSelector');
    const previewImage = document.getElementById('preview-image');
  
    // Fonction pour mettre à jour l'image
    function updatePreviewImage() {
      const selectedImagePath = templateSelector.value;
      previewImage.src = selectedImagePath;
    }
  
    //  Pour détecter les changements de sélection on créé un événement
    templateSelector.addEventListener('change', updatePreviewImage);
  
    // On appelle la fonction
    updatePreviewImage();
  });
  
// 2 - js pour White letterbox
// Fichier JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // On récupère la référence
    const whiteLetterboxCheckbox = document.getElementById('whiteLetterboxCheckbox');
    const previewImageContainer = document.getElementById('preview-image-container');
  
    // Fonction pour mettre à jour la couleur
    function updateColor() {
      // Si la case est cochée, couleur de fond blanc
      const backgroundColor = whiteLetterboxCheckbox.checked ? 'white' : 'black';
      previewImageContainer.style.backgroundColor = backgroundColor;
    }
  
    //  Pour détecter les changements de sélection on créé un événement
    whiteLetterboxCheckbox.addEventListener('change', updateColor);
  
    // On appelle la fonction
    updateColor();
  });
  

//---------------------------------Labels---------------------------------------------



document.addEventListener('DOMContentLoaded',function(){
    let textF = document.getElementById("label-text");
    let radioInput = document.getElementsByName("label-choice");
    let memeTextTop = document.getElementById("meme-text-top");
    let memeTextMiddle = document.getElementById("meme-text-middle");
    let memeTextBottom = document.getElementById("meme-text-bottom");
    let fontChanger = document.getElementById("fontSelector");
    let fontSize = document.getElementById("fontSizeSelector");
    let fontColor = document.getElementById("colorSelector");
    let val = "";

    memeTextTop.textContent = "Carlson";
    memeTextBottom.textContent = "Nathanael";
    
    
    for (let i = 0; i < radioInput.length; i++) {
        radioInput[i].addEventListener('change',function () {
            val = radioInput[i].value;
        })
    }

    textF.addEventListener("input",updatingVal);
    fontChanger.addEventListener("change",updatingFont);
    fontSize.addEventListener("input",updatingFontSize)
    fontColor.addEventListener("change",updatingColor)
    

    function updatingFont() {
        switch (val) {
            case "top":
                memeTextTop.style.fontFamily = fontChanger.value;
                break;
            case "middle":
                memeTextMiddle.style.fontFamily = fontChanger.value;
            break;
            case "bottom":
                memeTextBottom.style.fontFamily = fontChanger.value;
                
            break;
    
            default:
                break;
        }
    }
    function updatingVal(){
        switch (val) {
            case "top":
                memeTextTop.textContent = textF.value;
                break;
            case "middle":
                memeTextMiddle.textContent = textF.value;
            break;
            case "bottom":
                memeTextBottom.textContent = textF.value;
            break;
    
            default:
                break;
        }
    }
    function updatingFontSize(){
        switch (val) {
            
            case "top":
                memeTextTop.style.fontSize = fontSize.value+"px";
                break;
            case "middle":
                memeTextMiddle.style.fontSize = fontSize.value+"px";
            break;
            case "bottom":
                memeTextBottom.style.fontSize = fontSize.value+"px";
                
            break;
    
            default:
                break;
        }
    }
    function updatingColor(){
        switch (val) {
            
            case "top":
                memeTextTop.style.color = fontColor.value;
                break;
            case "middle":
                memeTextMiddle.style.color = fontColor.value;
            break;
            case "bottom":
                memeTextBottom.style.color = fontColor.value;
                
            break;
    
            default:
                break;
        }
    }

});





// Lorsqu'on recupere la taille de police d'un paragraphe, p.style.fontSize
// le format retourné est une string 'YYpx', ex: '16px'
// pour fournir la valeur au input number, 
// on doit conserver les caractères numeriques seulement, donc tous sauf les 2 derniers
// fontSizeString.slice(0, -2) trasnforme '16px' en '16'

// Lorsqu'on recupere la couleur d'un paragraphe, p.style.color
// le format retourné est rgb(x, y, x)
// pour fournir la valeur au input color, 
// on doit convertir au format #RRGGBB
function rgb2hex(color) {
    // https://stackoverflow.com/a/30381663
    if( color.indexOf('#') != -1 ) {
        return color;
    }

    color = color.replace("rgba", "")
                 .replace("rgb", "")
                 .replace("(", "")
                 .replace(")", "");
    color = color.split(","); // get Array["R","G","B"]

    // 0) add leading #
    // 1) add leading zero, so we get 0XY or 0X
    // 2) append leading zero with parsed out int value of R/G/B
    //    converted to HEX string representation
    // 3) slice out 2 last chars (get last 2 chars) => 
    //    => we get XY from 0XY and 0X stays the same
    return  "#"
            + ( '0' + parseInt(color[0], 10).toString(16) ).slice(-2)
            + ( '0' + parseInt(color[1], 10).toString(16) ).slice(-2)
            + ( '0' + parseInt(color[2], 10).toString(16) ).slice(-2);
}