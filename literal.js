"use strict";
function fetchWithAuth(utl, method) {
    return -1;
}
fetchWithAuth('url', "get");
let method = 'post';
// fetchWithAuth("s", method); //Argument of type 'string' is not assignable to parameter of type '"post" | "get"'
// можно исправить сделав const
// const method = 'post';
// fetchWithAuth("s", method);
// или
fetchWithAuth("s", method);
//  Это можно делать осторожно - если уверен что,
//  ничего другого кроме post не придет;
