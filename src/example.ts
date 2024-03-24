// JS types -> typeof

const str = 'string'; // typeof str -> 'string'
const num = 2; // typeof num -> 'number'

function sumTS(arr: number[]) {
    return arr.reduce((a, v) => a + v);
}