var numArray = [];
// Thêm Phần Tử vào Mảng
/** ----Bài1---- */
function addEle() {
    var num = parseInt(document.getElementById("inputnumber").value);
    console.log(num);
    numArray.push(num);
    console.log(numArray);
    document.getElementById("txtthongbao").innerHTML = " Mảng: "+numArray; ;
}


document.getElementById("btnsubmit").onclick = addEle;
function sumELe() {

    var sum = 0;

    for (var i = 0; i < numArray.length; i++) {
        // Kiểm tra Giá Trị Số Dương
        if (numArray[i] > 0) {
            sum += numArray[i];


        };

    } document.getElementById("txtthongbao").innerHTML = "Tổng là :" + sum;

    console.log(sum);
}
document.getElementById("btntotal").onclick = sumELe;

/** ----Bài2----- */

document.getElementById("btnduong").onclick = function duong() {
    var sum = 0;

    for (var i = 0; i < numArray.length; i++) {
        // Kiểm tra Giá Trị Dương
        if (numArray[i] >= 0) {
            //
            sum++


        };

    } document.getElementById("txtthongbao").innerHTML = " Các Số Nguyên Dương :" + sum;

    console.log(sum);
}

/** ----Bài3----- */

document.getElementById("btnnhonhat").onclick = function nhonhat() {
    var maxInNumbers = Math.max.apply(Math, numArray);
    var minInNumbers = Math.min.apply(Math, numArray);
    document.getElementById("txtthongbao").innerHTML = " Số Nhỏ Nhất :" + minInNumbers + " Số Lớn Nhất : " + maxInNumbers;



}
/** ----Bài4----- */

document.getElementById("btnnhonhatduong").onclick = function nhonhatduong(a, n) {


    var vitri = 0;
    var min = numArray[vitri];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < min && numArray[i] > 0) {
            vitri = i;
            min = numArray[i];


        }


    } document.getElementById("txtthongbao").innerHTML = "Số Nguyên Dương Nhỏ Nhất :" + min;
}
/** ----Bài5----- */

function sochancc() {



    for (var i = 0; i < numArray.length; i++) {
        // Kiểm tra Giá Trị Số Chẳn
        // var num = 0;
        if (numArray[i] % 2 == 0) {

            var num = numArray[i];


        }else{
            num = -1 ;
        } console.log(num);


    } document.getElementById("txtthongbao").innerHTML = "Số Chẳn Cuối Cùng là :" + num;

    // console.log(sum);
}


/** ----Bài6----- */
function doicho() {
    x = document.getElementById("inputnumber1").value ; 
    y = document.getElementById("inputnumber2").value ; 

    for(var  j=0; j<numArray.length ;j++)
     {
         if(numArray[j]==x)
         {
             for(var k=0; k < numArray.length; k++)
             {
                 if(numArray[k]==y)
                 {
                     var temp;
                     temp = x;
                     x = y;
                     y = temp;
                     numArray[j]=x;
                     numArray[k]=y;
                 }
             }

         }
     }
     for(var i=0;i<numArray.length;i++)
        console.log(numArray);
    document.getElementById("txtthongbao").innerHTML = numArray;

}

/** ----Bài7----- */


document.getElementById("btnsx").onclick = function sapxep() {
    numArray.sort();
    document.getElementById("txtthongbao").innerHTML = " Các Số tăng dần : " + numArray;



}
/** ----Bài8----- */

function kiem_tra_snt(n) {

    var a = true;


    if (n < 2) {
        a = false;
    }
    else if (n == 2) {
        a = true;
    }
    else if (n % 2 == 0) {
        a = false;
    }
    else {

        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                a = false;
                break;
            }
        }
    }

    return a;
}


function print_snt() {
    
    // var number = document.getElementById("number").value;

    
    // number = parseInt(number);

   
    var content4 = '';
    for (var i = 0; i <= numArray.length; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiem_tra_snt(numArray[i])) {
            content4 += numArray[i] + ' <br/>';
            break ;
        }
        
        console.log(numArray);
    }
    document.getElementById("txtthongbao").innerHTML = content4;
}


/** ----Bài9----- */


// Thêm Phần Tử vào Mảng

function addEle1() {
    var num = parseInt(document.getElementById("inputnumber").value);
    console.log(num);
    numArray.push(num);
    console.log(numArray);
 document.getElementById("txtthongbao").innerHTML = "Mảng :" + num;
    
}
document.getElementById("btnthemmang").onclick = addEle1;

/** ----Bài9----- */

document.getElementById("btnnguyen").onclick = function nguyen() {
    var sum = 0;

    for (var i = 0; i < numArray.length; i++) {
        // Kiểm tra Giá Trị Dương
       sum ++
    } document.getElementById("txtthongbao").innerHTML = " Các Số Nguyên :" + sum;

    console.log(sum);
}

/** ----Bài10----- */

document.getElementById("btnsosanh").onclick = function nguyen(){
    var sum = 0;
    var sun = 0 ;
    console.log(numArray)
    for (var i = 0; i < numArray.length; i++) {
        if(numArray[i] >= 0){
            sum ++ ;
           
        }else{
            sun++ ;
           
        }console.log(sum,sun);
    }
   if(sum > sun){
    document.getElementById("txtthongbao").innerHTML ="Tổng số Dương là "+ sum + " Lớn Hơn  " + "Tổng số Âm là "+ sun
   }else if(sum < sun){
    document.getElementById("txtthongbao").innerHTML = "Tổng số Dương là "+sum + " Nhỏ Hơn  " + "Tổng số Âm là "+ sun
   }else{
    document.getElementById("txtthongbao").innerHTML = "Tổng số Dương là "+sum + " Bằng  " + "Tổng số Âm là "+ sun
   }
}
