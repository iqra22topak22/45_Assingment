// 37_Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirts(size: string ="large", text:string = "i love typescript."){
    console.log(`creating a ${size} shirt with the message ${text}`)

}

make_shirts()

make_shirts(`medium`)

make_shirts(`small`, `i love  python.`)
