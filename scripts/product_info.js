import navbar from "../components/navbar.js"
import footer from "../components/footer.js"

let header = document.getElementById('navbar')
header.innerHTML = navbar();

let add_footer = document.getElementById('footer')
add_footer.innerHTML = footer();

let data = JSON.parse(localStorage.getItem('single_product'));

let short_btn = document.getElementById('shortlist')

let add_cart = document.getElementById('add_cart')

add_cart.addEventListener('onclick', to_cart);

function to_cart() {
    let Cart = JSON.parse(localStorage.getItem('Cart')) || [];
    Cart.push(data);
    localStorage.setItem('Cart', JSON.stringify(Cart))
}


short_btn.addEventListener('onclick', short_list);
let short = JSON.parse(localStorage.getItem('shortlist')) || [];

function short_list(data) {
    console.log(data);
    short.push(data);
    localStorage.setItem('shortlist', JSON.stringify(short));

}
function Display_img() {

    console.log(data);

    let div1 = document.createElement('div');
    let img1 = document.createElement('img')
    img1.src = data.image
    div1.append(img1);
    img1.addEventListener('click', right_img)

    let div2 = document.createElement('div');
    let img2 = document.createElement('img')
    img2.src = data.image1
    div2.append(img2);
    img2.addEventListener('click', right_img)

    let div3 = document.createElement('div');
    let img3 = document.createElement('img')
    img3.src = data.image2
    div3.append(img3);
    img3.addEventListener('click', right_img)

    let div4 = document.createElement('div');
    let img4 = document.createElement('img')
    img4.src = data.image3
    div4.append(img4);
    img4.addEventListener('click', right_img)

    let small_img = document.getElementById('small_img');

    small_img.append(div1, div2, div3, div4)

    let big_img = document.getElementById('big_img');
    let right_img_show = document.createElement('img');
    right_img_show.id = "right_img_show"
    let lens = document.createElement('div');
    lens.id = "lens"
    let result = document.createElement('div')
    result.id = "result"

    right_img_show.src = img1.src;
    big_img.append(right_img_show, lens, result);

    function right_img(event) {

        right_img_show.src = (event.srcElement.currentSrc);
    }
    // Zooming starts
    let containerRect = big_img.getBoundingClientRect();
    let imageRect = right_img_show.getBoundingClientRect();
    let lensRect = lens.getBoundingClientRect();
    let resultRect = result.getBoundingClientRect();

    big_img.addEventListener("mousemove", zoomimg)

    function mouse_out() {
        // console.log("Vineeth")
        result.innerHTML = null;
    }



    function zoomimg(e) {
        // console.log(e.clientX, e.clientY)

        // big_img.append(lens, result);
        result.style.backgroundImage = `url(${right_img_show.src})`

        let { x, y } = getmousepos(e);

        lens.style.left = x + "px"
        lens.style.top = y + "px"

        let fx = resultRect.width / lensRect.width
        let fy = resultRect.height / lensRect.height

        // console.log(fx, fy)

        result.style.backgroundSize = `${imageRect.width * fx}px ${imageRect.height * fy}px`

        result.style.backgroundPosition = `-${x * fx}px -${y * fy}px  `



    }
    function getmousepos(e) {
        let x = e.clientX - containerRect.left - lensRect.width / 2;
        let y = e.clientY - containerRect.top - lensRect.height / 2;

        let minX = 0;
        let minY = 0;
        let maxX = containerRect.width - lensRect.width
        let maxY = containerRect.height - lensRect.height

        if (x <= minX) {
            x = minX;

        }
        else if (x >= maxX) {
            mouse_out();
        }

        // if (y <= minY) {
        //     y = minY;
        // }else
        if (y >= maxY) {
            y = maxY;
        }
        // if ((x < minX) || (x > maxX) || (y < minY) || (y > maxY)) {
        //     mouse_out();
        // }

        return { x, y }

    }



    let heading = document.getElementById('heading');
    heading.innerText = data.name;

    let price = document.getElementById('price');
    price.innerHTML = "₹ " + data.price

    // right.append(heading);
}
Display_img();
function you_like() {
    let data = JSON.parse(localStorage.getItem('productList'));

    for (let i = 0; i < 5; i++) {
        let name = data[i].name;
        let price = data[i].price;
        let image = data[i].image

        let div = document.createElement('div');
        let img_div = document.createElement('div')
        img_div.className = "img_div"

        let text_div = document.createElement('div')
        text_div.className = "text_div"

        let img = document.createElement('img')
        img.src = image;

        let title = document.createElement('p')
        title.innerText = name;

        let p = document.createElement('p')
        p.innerText = "₹ " + price;

        img_div.append(img);
        text_div.append(title, p);

        div.append(img_div, text_div);

        let like = document.getElementById('like')

        like.append(div);
    }

}
you_like();
function frequently() {
    let data = JSON.parse(localStorage.getItem('productList'));

    for (let i = 5; i < 10; i++) {
        let name = data[i].name;
        let price = data[i].price;
        let image = data[i].image

        let div = document.createElement('div');
        let img_div = document.createElement('div')
        img_div.className = "img_div"

        let text_div = document.createElement('div')
        text_div.className = "text_div"

        let img = document.createElement('img')
        img.src = image;

        let title = document.createElement('p')
        title.innerText = name;

        let p = document.createElement('p')
        p.innerText = "₹ " + price;

        img_div.append(img);
        text_div.append(title, p);

        div.append(img_div, text_div);

        let like = document.getElementById('freq')

        like.append(div);
    }

}
frequently();