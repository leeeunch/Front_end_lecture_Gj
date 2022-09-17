$(document).ready(function() {
    //1번 문제
    $('#answer1').on('click', function answer1(evnt) {
        const first = parseInt($('#first').val());
        const second = parseInt($('#second').val());
        console.log(first, second);
        let result = []; 
        for (let i=first; i<=second; i++) { 
            if (i == first+1 || i == second-1){
                continue;
            }
            result.push(Math.pow(2, i));
        };
        $('#result1').html(result.join(', ')); 
    });
    //버튼 보이기 및 감추기
    $('#showQ1').on('click', function show(event){
        $(".Q1").show()
    });
    $('#hideQ1').on('click', function show(event){
        $(".Q1").hide()
    });
    //2번 문제
    $('#answer2').on('click', function answer2(event){
        const text = $('#text').val(); 
        const noPunct = text.replace(/[-',.]/g, '').replace(/\n/g, ' '); 
        console.log(noPunct); 
        const words = noPunct.split(' '); 
        let count = 0; 
        for (let word of words) { 
            if (word == 'the') 
                count++;
        }
        $('#result2').html(`the의 갯수는 <strong>${count}</strong>개`); 
    });
    //버튼 보이기 및 감추기
    $('#showQ2').on('click', function show(event){
        $(".Q2").show()
    });
    $('#hideQ2').on('click', function show(event){
        $(".Q2").hide()
    });
    //3번 문제
    $('#answer3').on('click', function answer3(event){
        const num1 = parseInt($('#num1').val());
        const num2 = parseInt($('#num2').val());
        const divisors1 = [];
        for (let i=1; i<=num1; i++) {
            if (num1 % i == 0)
            divisors1.push(i);          // num1의 약수
        }
        const divisors2 = [];
        for (let i=1; i<=num2; i++) {
            if (num2 % i == 0)
                divisors2.push(i);      // num2의 약수
        }
        const commonDivisors = divisors1.filter(val => divisors2.includes(val));
        $('#result3').html(`Set(${commonDivisors.join(', ')})`);
    });
    //버튼 보이기 및 감추기
    $('#showQ3').on('click', function show(event){
        $(".Q3").show()
    });
    $('#hideQ3').on('click', function show(event){
        $('.Q3').hide()
    });
});



