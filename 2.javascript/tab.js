$('li').click(function(){
    var index = $(this).index();

    $('ul.list li').removeClass('orange');
    $('ul.list li').eq(index).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(index).addClass('show');
});

// $('.list').click(function(e){
//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         탭열기(0);
//     }
// })

// for(let i = 0; i < 3; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i);
//     })
// }
// function 탭열기(i){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(i).addClass('show');
// }


//Array 자료형
var car = ['소나타', 50000, 'white'];
console.log(car);

//Object 자료형
var car2 = {name: '소나타', price: [50000, 3000, 4000]}
//console.log(car2);
//console.log(car2['name']);
//car2.price = 60000;
//console.log(car2.price);

//document.querySelector('.p-name').innerHTML = car2.name;
document.querySelector('.p-price').innerHTML = car2.price[0];

