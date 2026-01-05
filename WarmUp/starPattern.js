// ****
// ****
// ****
// ****

for(let i=0;i<4;i++){
    let row = "";
    for(let j =0;j<4;j++){
        row += "* ";
    }
    console.log(row);
}

//2->
// *
// **
// ***
// ****

for(let i=0;i<4;i++){
    let row = "";
    for(let j =0;j<i+1;j++){
        row += "* ";
    }
    console.log(row);
}

//3->
// 1
// 2 2
// 3 3 3
// 4 4 4 4

for(let i=1;i<5;i++){
    let row = "";
    for(let j =0;j<i;j++){
        row += i+" ";
    }
    console.log(row);
}

//4->
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(let i=0;i<6;i++){
    let row = "";
    for(let j =1;j<=i;j++){
        row += j+" ";
    }
    console.log(row);
}