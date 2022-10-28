# CustomHexColorPicker
Created Custom Hex Color Picker using pure javascript

# How to use in your project
1. Load library in your html file first.
    <script src="CustomHexColorPicker.lib.js"></script>
    
2. Also in your html file
    <div class="colorInput" data-color='transparent'>select color</div>

3. In your javascript file
    var colorInputEle = document.querySelector('.colorInput');
    /*Passing down object as parameter is optional
    Also be used simply as; _var customHexColorPicker = new CustomHexColorPicker();_ */
    var customHexColorPicker = new CustomHexColorPicker({
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;palette: true/false,
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;defaultColor: 'red'/'#f00'/'#ff0000',
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colorattribute: 'anything',
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customlabeltext: 'anything',
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canceltext: 'anything',
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selecttext: 'anything'
    });
    /*Register your elements to color picker. You could register multiple elements using same syntax as below */
    customHexColorPicker.register(colorInputEle);
  
# Thanks for being here.😀
