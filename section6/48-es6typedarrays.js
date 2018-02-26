// new buffer with size (8) bytes defined
var buffer = new ArrayBuffer(8);
// 32 bits for one number in our array
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);