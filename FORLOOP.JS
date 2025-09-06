//Syntax
//for (initialization; condition; increment/decrement) {
  // code to run in each iteration
//}
//Parts:
//Initialization → Runs once at the start (e.g., let i = 0;).
//Condition → Checked before each iteration. If true, the loop runs; if false, it stops.
//Increment/Decrement → Updates the loop variable each time.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//excerise

for(count=1;count<=10;count=count+1){
    console.log("JOHN");
}
//EXCERSISE USING FOR LOOP PRINT NUMBERS FROM 1 TO 10

for(num=1;num<=10;num=num+1){
    console.log(num);
}
//to print output as{1,3,5,7,9}
for(num=1;num<=10;num=num+2){
    console.log(num);   
}
//for output as (10,9,8,7,6,5,4,3,2,1)
for (num=10;num>=1;num=num-1){
    console.log(num);
}
//for output as (2,4,6,8,10)
for (let i=1; i<=10; i++)
    if(i%2==0){{
    console.log(i);        
    }
    
}
//print table of 2
for (let i = 1; i <= 10; i++) {
    console.log(i + "*2=" + (i * 2));
}
//expontetial of 10
for (let i = 1; i <= 10; i++) {
    console.log("10**" + i + "=" + (10 ** i));
}