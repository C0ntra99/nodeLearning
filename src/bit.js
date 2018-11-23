//Using bitwise operators
/* 
& : AND
| : OR
~ : NOT
^ : XOR
<< : zero fill left shift
>> : signed fill right shift
>>> : xerofill fill right shift
*/
//uses 32 bit numbers
var bit = 5;

console.log(bit&1); //0101 & 0001 = 0001 (1)
console.log(bit|1); //0101 | 0001 = 0101 (5)
console.log(~bit); //~0101 = 1010 (-6)
console.log(bit^1); //0101 ^ 0001 = 0100 (4)
console.log(bit<<1); //0101 << 1 = 1010 (10)
console.log(bit>>1); //0101 >> 1 = 0010 (2)
console.log(bit>>>1); //0101 >>> 1 = 0010 (2)

