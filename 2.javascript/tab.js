/*
    <div class="container mt-5">
        <ul class="list">
            <li class="tab-button">Products</li>
            <li class="tab-button orange">Information</li>
            <li class="tab-button">Shipping</li>
        </ul>
        <div class="tab-content">
            <p>상품설명입니다. Product</p>
        </div>
        <div class="tab-content show">
            <p>스펙설명입니다. Information</p>
        </div>
        <div class="tab-content">
            <p>배송정보입니다. Shipping</p>
        </div>
    </div> 
*/

$('li').click(function(){
    var index = $(this).index();
    
    $('ul.list li').removeClass('orange');
    $('ul.list li').eq(index).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(index).addClass('show');
});
