// function checkNumber(value: number): boolean {
//     if (value > 1) {
//         throw new Error (" Value must be 1 or below");
//     }
//     return true;
// }
//
// console.log(checkNumber(2));


// try {
//     // Các câu lệnh có thể ném ra ngoại lệ
// } catch (e) {
//     // Các câu lệnh để xử lí ngoại lệ
// } finally {
//     // Các câu lệnh luôn luôn được thực thi
// }

// function checkNumber(value: number): boolean {
//     if (value > 1) {
//         throw new Error('Value must be 1 or below');
//     }
//     return true;
// }
//
// try {
//     console.log(checkNumber(2));
// } catch (e) {
//     console.log(e.message)
// }

// function inverse(x: number): number {
//     if (!x) {
//         throw new Error('Division by zero.');
//     }
//     return 1 / x;
// }
//
// try {
//     console.log(inverse(5))
// } catch (e) {
//     console.log(`Caught exception: ${e.message}`)
// } finally {
//     console.log('First finally')
// }
//
// try {
//     console.log(inverse(0))
// } catch (e) {
//     console.log(`Caught exception: ${e.message}`)
// } finally {
//     console.log('Second finally')
// }
// console.log('Hello World')

function doOrThrow(error: any): true{
    if (Math.random() > .5){
        console.log('true')
        return true;
    }
    else{
        throw error;
    }
}
try{
    doOrThrow('err1');
    doOrThrow('err2');
    doOrThrow('err3');
}
catch (e:any){
    console.log(e,'error')
}
finally{
    console.log("Terminated");
}

let fun: number; // Notice use of `let` and explicit type annotation
const runTask=()=>Math.random();
try{
    fun = runTask();
    console.log('Try Block Executed');
    throw new Error("Done");
}
catch(e){
    console.log("Error",e);
}
finally{
    console.log("The Code is finished executing.");
}
