 let flag=0;
 
 let images_arr=[
    "https://cdn.fcglcdn.com/brainbees/banners/test/merch_fashion_REPHP50_default_celebrate_big_savings_150122_2022115175059.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/test/MamyPokoNB_Upto44_DP_HP_994x399_20211218174036.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_SOI_AU_18JAN_202211820232.gif",
    "https://cdn.fcglcdn.com/brainbees/banners/test/VaccinationTracker_Desktop_202213142918.webp"

 ];

 function controler(x){
    flag=flag+x;
    slideshow(flag);
 }
 slideshow(flag);
 function slideshow(num){
     let div =document.getElementById("slide-container");
    let slides=document.createElement("div");
    slides.setAttribute("class","slide");
    let img=document.createElement("img");


    if(num==slides.length){
        flag=0;
        num=0;

    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    // for(let y of slides){
    //      y.style.display="block";
    //  }
    let i=0;
    setInterval(function(){
        
        console.log(i);
        if(i==images_arr.length){
            i=0;
        }
        
        img.src=images_arr[i];
        slides.append(img);
        div.append(slides);
        i++;
    },3000);
    slides[num].style.display="block";
 }

