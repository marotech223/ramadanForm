let imgOne = document.querySelector(".img_one");
let imgTwo = document.querySelector(".img_two");
let imgThree = document.querySelector(".img_three");
let container = document.querySelector(".container");
let mainImg = document.querySelector(".image");
let head1 = document.querySelector("h1")
let para = document.querySelector(".para")
let para1 = document.querySelector(".para1")
imgOne.onclick = function(){
    mainImg.src = "images/iftar1.png"
    head1.innerHTML = "صوماً مقبولاً"
    para1.innerHTML = "وإفطاراً شهيا"
    para.innerHTML = "اللهم لك صمت وعلى رزقك أفطرت وبك أمنت وعليك توكلت ذهب الظمأ وابتلت العروق وثبت الأجر إن شاء الله"
}
imgTwo.onclick = function(){
    mainImg.src = "images/suhor1.png"
    head1.innerHTML = "سحور مبارك"
    para1.innerHTML = ""
    para.innerHTML = "قال رسول الله صلى الله عليه وسلم «تَسَحَّرُوا؛ فإن في السَّحُورِ بَركة»."
}
imgThree.onclick = function(){
    mainImg.src = "images/main-img.png"
    head1.innerHTML = "رمضان كريم"
    para1.innerHTML = ""
    para.innerHTML = `قال الله تعالى في كتابه العزيز:<br>﴿يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ (183)﴾`
}