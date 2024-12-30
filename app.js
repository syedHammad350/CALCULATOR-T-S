var inp = document.getElementById('inp');
// console.log(inp)
var button = document.getElementById('btn');
// console.log(button)
function off() {
    if (inp.getAttribute('placeholder') == '0') {
        inp.setAttribute('placeholder', '');
        button.innerHTML = 'ON';
        inp.value = '';
    }
    else {
        button.innerHTML = 'OFF';
        inp.setAttribute('placeholder', '0');
    }
}
function sum(num) {
    inp.value += num;
}
function clearall() {
    // console.log(" h.r")
    inp.value = '';
}
function answer() {
    // console.log(' h.r')
    var output = eval(inp.value);
    inp.value = output;
}
function del() {
    // console.log('hi h.r')
    inp.value = inp.value.slice(0, -1);
}
