///////////////////////// Part 1:

console.log("Part 1");
console.log("\n");

let num = 100;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i > 2) {
        console.log("Fizz Buzz.");
    } else if (i % 3 == 0) {
        console.log("Fizz.");
    } else if (i % 5 == 0) {
        console.log("Buzz.");
    } else {
        console.log(i);
    }
}

console.log("\n");
console.log("\n");

//////////////////////// Part 3, 
// I did it using 2 methods. 1st method: using just one variable for cell and one variable for line

console.log("Part 3, Method 1: using just one variable for cell and one variable for line");
console.log("\n");

let csvdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//let csvdata = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let singleCell = "";
let line = "";

for (let i = 0; i < csvdata.length; i++) {

    if (i < (csvdata.length - 1 )) { // iterate and save data in variables till 2nd last character
        if (csvdata[i] == ',') {

            line += singleCell;
            line += ',';
            singleCell = "";

        } else if (csvdata[i] == '\n') {

            line += singleCell;
            console.log(line);
            line = "";
            singleCell = "";

        } else {

            singleCell += csvdata[i];

        }
     } else { // when we reach the last character

        singleCell += csvdata[i];
        line += singleCell;
        console.log(line);

    }

}



console.log("\n");
console.log("\n");

////////////////////// Part 3, 
// 2nd method: using 4 variable for cell (as asked in ALAB) and one variable for line

console.log("Part 3, Method 2: using 4 variable for cell (as asked in ALAB) and one variable for line");
console.log("\n");

let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//let data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let cell=1;
let word = "";

for (let i = 0; i < data.length; i++) {

    if (i < (data.length - 1)) { // iterate and save data in variables till 2nd last character
        if (data[i] == ',') {

            if(cell==1){

                cell1=word;

            }else if(cell==2){

                cell2=word;

            }else if(cell==3){

                cell3=word;

            }else{

            }

            word="";
            cell++;

        } else if (data[i] == '\n') {

            cell4=word;
            console.log(`${cell1},${cell2},${cell3},${cell4}`);

            word="";
            cell=1;
            cell1="";
            cell2="";
            cell3="";
            cell4="";

        } else {

            word += data[i];

        }
    } else { // when we reach the last character

        word += data[i];
        cell4=word;
        console.log(`${cell1},${cell2},${cell3},${cell4}`);

    }

}