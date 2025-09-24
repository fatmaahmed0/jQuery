pink = document.querySelectorAll(".pink");
let x = 1;
for (let i = 0; i < 4; i++) {
  pink[i].addEventListener("click", (e) => {
    e.preventDefault();
    $(`.down-${i + 1}`).slideToggle(500);
    if (i + 1 != x) {
        $(`.down-${x}`).slideUp(500);
    }
    x = i + 1;
  });
}

document.querySelector(".but-w").addEventListener("click", function (e) {
  e.preventDefault();
  $(".sidebar").animate({ width: "toggle" }, 500);
});
document.querySelector(".open").addEventListener("click", function (e) {
  e.preventDefault();
  $(".sidebar").animate({ width: "toggle" }, 500);
  // $('.sidebar').show(500);
});

let d = 0;
let h = 0;
let m = 0;
let s = 0;
console.log(d);
console.log(h);
console.log(m);
console.log(s);

function display() {
  let date = new Date("25 March 2026 3:25:00");
  let ml = date.getTime() - Date.now(); //ml = 50000
  d = Math.floor(ml / 86400000);
  ml = ml - d * 86400000;
  h = Math.floor(ml / 3600000);
  ml = ml - h * 3600000;
  m = Math.floor(ml / 60000);
  ml = ml - m * 60000;
  s = Math.floor(ml / 1000);
  $(".day").html(`${d} D`); // 2
  $(".hour").html(`${h} h`); // 5
  $(".min").html(`${m} m`); // 3
  $(".sec").html(`${s} s`); // 2
}
setInterval(() => {
  display();
  //console.log("love you");
}, 1000);
display();
$(".sidebar").hide();
$(".down-2").hide();
$(".down-3").hide();
$(".down-4").hide();

document.addEventListener('keyup' , 
    function(){
       let x= $('#fatma').val();
       console.log(x.length);
       let c=100-(x.length);
       if(c<0){
         $('.charcter').html(`<span class="text-red-500">your available character finished</span> Characyer Reamining `);
       }
       else{
    
           $('.charcter').html(`${c} Characyer Reamining `);
       }
    }
)
// document.querySelector('.pink-1').addEventListener('click' , function(e){
//     e.preventDefault();
//     $('.down-2').slideUp(500);
//     $('.down-3').slideUp(500);
//     $('.down-4').slideUp(500);
//     $('.down-1').slideToggle(500);
// })
