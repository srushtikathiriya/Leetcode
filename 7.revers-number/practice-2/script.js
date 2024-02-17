// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

{
    let n = -123;
    let rev = 0;
    while (n != 0) {
        rev = rev * 10 + n % 10;
        n =parseInt(n/10);
    }
    console.log(rev);
}