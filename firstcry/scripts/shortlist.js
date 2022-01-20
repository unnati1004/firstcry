var data = JSON.parse(localStorage.getItem("shortlist"));
var dt = data[0];

    var count = 0;


    dt.map((el,index)=>{
        count++;
        let{name,price,image}=el;
        var div = document.createElement("div");
        var divf = document.createElement("div");
        divf.style.display="flex";

        var img = document.createElement("img");
        img.src = image;

        var p = document.createElement("p");
        p.textContent=name;

        var p1 = document.createElement("p");
        p1.textContent="$  "+price;

        var btn = document.createElement("button")
        btn.textContent="ADD TO CART"
        btn.style.background="#ff7043"


        var bt = document.createElement("button")
        bt.innerHTML='<i class="fas fa-trash-alt fa-2x"></i>';
        bt.style.width="40px"
        bt.style.marginLeft="15px"
        bt.style.color="black"
        bt.style.background="transparent"
        bt.addEventListener("click", function(){
            alert("Do you want to remove this product from your Shortlist?")
            del(index);               
        })

        divf.append(btn,bt);


        div.append(img,p,p1,divf);

        document.getElementById("bx3").append(div);

        
    })

    function del(index){
        dt.splice(index,1)
        localStorage.setItem("shortlist", JSON.stringify(dt));
        location.reload();
    }

    document.getElementById("clr").addEventListener("click", function(){
        document.getElementById("bx3").innerHTML="";
        document.getElementById("prd").innerText=(0+" "+"Products");
    })

    document.getElementById("prd").innerText=(count+" "+"Products");

    if(count==0){
        document.getElementById("bx3").innerHTML="";
        var para = document.createElement("p");
        para.innerText="You have not shortlisted any product yet";
        para.style.fontSize="16px";
        
        document.getElementById("bx3").append(para);
        }