'use strict'

const colorDiv = document.getElementById('color');
const buttonChangeColor = document.getElementById('btnChangeColor');
const inputR = document.getElementById('inputR');
const inputG = document.getElementById('inputG');
const inputB = document.getElementById('inputB');
const inputA = document.getElementById('inputA');


const Color = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    return `rgb(${this.r},${this.g},${this.b})`
}

Color.prototype.hex = function() {
    return '#' + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
}

Color.prototype.rgba = function(a) {
    if (!a) a = 1;
    return `rgba(${this.r},${this.g},${this.b},${a})`
}



const changeColor = function(event) {
    event.preventDefault();
    
    const color = new Color(parseInt(inputR.value), parseInt(inputG.value), parseInt(inputB.value));
    
    colorDiv.innerHTML = 
    `<p>RGB: ${color.rgb()}</p> 
    <p>HEX: ${color.hex()}</p> 
    <p>RGBA: ${color.rgba(parseFloat(inputA.value))}</p>`

    document.body.style.backgroundColor = color.rgba(parseFloat(inputA.value)) 
}

buttonChangeColor.addEventListener('click', changeColor)