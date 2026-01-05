// 12345
// 1234
// 123
// 12
// 1

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// *****
// ****
// ***
// **
// *

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - i; j++) {
        row += '*';
    }
    console.log(row)
}

//     *
//    **
//   ***
//  ****
// *****

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 5; j > 0; j--) {
        if (i >= j) {
            row += "*"
        }
        else {
            row += ' ';
        }

    }
    console.log(row)
}

// *
// **
// ***
// ****
// *****

for(let i=0;i<5;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row+="*"
    }
    console.log(row)
}

// 1
// 10
// 101
// 1010
// 10101
// 101010

for(let i=0;i<6;i++){
    let row="";
    for(let j=0;j<=i;j++){
        if(j%2==0){
            row+="1"
        }
        else{
            row+="0"
        }
    }
    console.log(row)
}

// 1
// 01
// 010
// 1010
// 10101
// 010101
let toggle = 0;
for(let i=0;i<6;i++){
    let row="";
    
    for(let j=0;j<=i;j++){
        if(toggle==1){
            row+="0";
            toggle = 0;
        }
        else{
            row+="1";
            toggle=1;
        }
    }
    console.log(row)
}