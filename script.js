let content = "0"
let operator = ['+','-','*','/']
document.getElementById("inner-top").innerHTML = content


function calc(num){
    if(content.length>=6) return
    else if(operator.includes(num)  && operator.includes(content[content.length-1])) return                   //for no 2 operator together
    else if(num=='.' && content[content.length-1]=='.') return                                           //for two . together
    else if(content=="0" && (Number(num)>=0 && Number(num)<=9) )  content=""                             // for no 0 at prefix
    
    content+=num
    document.getElementById("inner-top").innerHTML = content
}

function reset(){
    content = "0"
    document.getElementById("inner-top").innerHTML=content
}

function del(){
    content = content.slice(0,-1)

    if(content.length == 0){
        content="0"
    }
    document.getElementById("inner-top").innerHTML = content
    
}
function result(){
    try{
        let dummy = Number(eval(content))

        if(dummy%1 != 0){
            dummy = dummy.toFixed(5)
        }
        content = String(dummy)
    }
    catch(e){
        alert(e)
        content="0"
    }
    document.getElementById("inner-top").innerHTML = content
}