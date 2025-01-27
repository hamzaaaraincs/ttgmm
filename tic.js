let h1 = document.createElement("h1")
document.body.append(h1)
h1.innerText = `TicTacToe`
h1.style.justifySelf = "center"



box = document.createElement("div")
document.body.append(box)

box.style.display = "flex"
box.style.flexWrap = "wrap"
box.style.flexDirection = "row"
box.style.background = "gray"
box.style.width = "400px"
box.style.borderRadius = "20px"
box.className = "boxc"





box.style.justifyContent = "center"
box.style.justifyItems = "center"


let click = true
for (let a = 0; a < 9; a++) {

    let boxs = document.createElement("div")
    document.body.childNodes[3].append(boxs)
    boxs.style.background = "lightgray"
    boxs.style.height = "100px"
    boxs.style.width = "100px"
    boxs.style.margin = "10px"
    boxs.style.borderRadius = "20px"
    boxs.style.display = "flex"
    boxs.style.justifyContent = "center"
    boxs.style.alignItems = "center"

    boxs.innerText = '+'
    boxs.className = `box${a}`



}



let bx = box.querySelectorAll("div")




let bv0 = bx[0]
let bv1 = bx[1]
let bv2 = bx[2]
let bv3 = bx[3]
let bv4 = bx[4]
let bv5 = bx[5]
let bv6 = bx[6]
let bv7 = bx[7]
let bv8 = bx[8]




let z = 0
for (let b of bx) {

    b.addEventListener("click", () => {
        if (click === true) {
            b.value = true
            b.innerText = "✔"
            click = false


        }
        else {
            b.value = false
            click = true

            b.innerText = "X"

        }




        if (bv0.value === true & bv1.value == true & bv2.value == true || bv3.value === true & bv4.value == true & bv5.value == true || bv6.value === true & bv7.value == true & bv8.value == true
            || bv0.value === true & bv3.value == true & bv6.value == true || bv1.value === true & bv4.value == true & bv7.value == true || bv2.value === true & bv5.value == true & bv8.value == true
            || bv0.value === true & bv4.value == true & bv8.value == true || bv2.value === true & bv4.value == true & bv6.value == true
        ) {

            document.write(`✔ WIN`)

        }

        else if (bv0.value === false & bv1.value == false & bv2.value == false || bv3.value === false & bv4.value == false & bv5.value == false || bv6.value === false & bv7.value == false & bv8.value == false
            || bv0.value === false & bv3.value == false & bv6.value == false || bv1.value === false & bv4.value == false & bv7.value == false || bv2.value === false & bv5.value == false & bv8.value == false
            || bv0.value === false & bv4.value == false & bv8.value == false || bv2.value === false & bv4.value == false & bv6.value == false
        ) {
            document.write(`X WIN`)
        }





    })

}

document.write(`<hr><hr><hr><hr><br><br>`)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// setTimeout(()=>{console.log("abc")},3000)

// async function abc(){
//     await   console.log(`abc123`)
// }

// abc()document.write(`<hr><hr><hr><hr><br><br>`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



setTimeout(()=>{console.log("abc")},3000)

 function abc(){
    // await new Promise(resolve => setTimeout(resolve, 2000));
    // console.log(`abc123`);
    // setTimeout(()=>{console.log("abc123")},2000)
    
}

abc()








