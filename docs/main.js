
function transform(input, output) {
    let inputText = input.value;
    let result = removeSpaces(inputText);
    output.value = result;
}

function removeSpaces(text) {
    const space = /[ ​\u00a0\u1680​\u180e\u2000​\u200a​\u2028\u2029\u202f\u205f​\u3000]/g;
    return text.replace(space, '');
}

function main() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    transform(input, output);  // demo run
    input.addEventListener('input', function() { transform(input, output) });
}

main();