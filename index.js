const box = document.getElementById('box');
const horizontal = document.getElementById('horizontal');
const vertical = document.getElementById('vertical');
const blur = document.getElementById('blur');
const spread = document.getElementById('spread');
const color = document.getElementById('color');
const opacity = document.getElementById('opacity');
const codeOutput = document.getElementById('code-output');


function generateShadow() {
    const horizontalValue = horizontal.value;
    const verticalValue = vertical.value;
    const blurValue = blur.value;
    const spreadValue = spread.value;
    const colorValue = color.value;
    const opacityValue = opacity.value;

    const rgba = hexToRGBA(colorValue, opacityValue);
    const shadowValue = `${horizontalValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${rgba}`;
            
    box.style.boxShadow = shadowValue;
    codeOutput.textContent = `box-shadow: ${shadowValue}`;
}


function hexToRGBA(hex, opacity) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
}


horizontal.addEventListener('input', generateShadow);
vertical.addEventListener('input', generateShadow);
blur.addEventListener('input', generateShadow);
spread.addEventListener('input', generateShadow);
color.addEventListener('input', generateShadow);
opacity.addEventListener('input', generateShadow);


generateShadow();