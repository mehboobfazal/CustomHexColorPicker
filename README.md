# CustomHexColorPicker
Created Custom Hex Color Picker using pure javascript

# How to use in your project  
1. Load library file **CustomHexColorPicker.lib.js** and **style.css** inside your html head.
    ```
    <link href="style.css" rel="stylesheet" />
    <script src="CustomHexColorPicker.lib.js"></script>
    ```
    
3. Also in your html file  
    ```<div class="colorInput" data-color="transparent">select color</div>```

4. In your javascript file  
    ```js
    var colorInputEle = document.querySelector('.colorInput');
    /*Passing down object as parameter is optional  
    Also be used simply as; var customHexColorPicker = new CustomHexColorPicker(); */  
    var customHexColorPicker = new CustomHexColorPicker({
        palette: true/false,
        defaultColor: 'red'/'#f00'/'#ff0000',
        colorattribute: 'anything',
        customlabeltext: 'anything',
        canceltext: 'anything',
        selecttext: 'anything'
    }); 
    /*Register your elements to color picker. You could register multiple elements using same syntax as below */  
    customHexColorPicker.register(colorInputEle);
    ```
  
# Thanks for being here.😀
