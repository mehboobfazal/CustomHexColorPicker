function colorInputChange() {
    document.body.style.background = this.getAttribute('data-color');
}
var colorInputEle1 = document.querySelector('.colorInput1');
colorInputEle1.onchange = colorInputChange.bind(colorInputEle1);
var colorInputEle2 = document.querySelector('.colorInput2');
colorInputEle2.onchange = colorInputChange.bind(colorInputEle2);
//colorInputEle.dispatchEvent(new Event('change', { "bubbles": true }));

var customHexColorPicker = new CustomHexColorPicker();
customHexColorPicker.register(colorInputEle1);
customHexColorPicker.register(colorInputEle2);

/*var customHexColorPicker = new CustomHexColorPicker({
    palette: true/false,
    defaultColor: 'red'/'#f00'/'#ff0000',
    colorattribute: 'anything',
    customlabeltext: 'anything',
    canceltext: 'anything',
    selecttext: 'anything'
});
//customHexColorPicker.register(colorInputEle);*/