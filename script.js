let sum=0;
let sumofcredits=21.5; //changable with semester
let arr2=[];
let i;
let total;
//event
let bot=document.getElementById("bot");
bot.onclick=( )=>{
    let s1=document.getElementById("EC211");
    let m1=s1.value;
    let t1=m1*3;
    arr2.push(t1);
    let s2=document.getElementById("EC212");
    let m2=s2.value;
    let t2=m2*4;
    arr2.push(t2);
    let s3=document.getElementById("EC213");
    let m3=s3.value;
    let t3=m3*3;
    arr2.push(t3);
    let s4=document.getElementById("EC214");
    let m4=s4.value;
    let t4=m4*3
    arr2.push(t4);
    let s5=document.getElementById("EC215");
    let m5=s5.value;
    let t5=m5*3
    arr2.push(t5);
    let s6=document.getElementById("EC251");
    let m6=s6.value;
    let t6=m6*1
    arr2.push(t6);
    let s7=document.getElementById("EC252");
    let m7=s7.value;
    let t7=m7*1.5
    arr2.push(t7);
    let s8=document.getElementById("EC253");
    let m8=s8.value;
    let t8=m8*1
    arr2.push(t8);
    let s9=document.getElementById("ECSL1");
    let m9=s9.value;
    let t9=m9*2
    arr2.push(t9);     
    console.log(arr2);
    console.log(arr2.length);
    for (i=0;i<9;i++)  //9 cahnges with semester
    {
        console.log(arr2[i])
        sum+=arr2[i]
    }
    total=sum/sumofcredits
    console.log(total)
    let opt=document.getElementById("output");
    opt.innerText=total.toString()
    //last
    for (i=0;i<9;i++)
    {
        arr2.pop()
    }
    sum=0

}
