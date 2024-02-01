const faqSelectArr = [
    { question : 'Q', text : '따릉이 시설물 현황을 알고 싶습니다.'},
    { question : 'Q', text : '자전거 대여는 어떻게 하나요?'},
    { question : 'Q', text : '대여를 시도했는데 자전거 잠금장치가 해제되지 않습니다.'},
    { question : 'Q', text : '대여하기 버튼을 눌렀으나, 대여신청이 안 됩니다.(안드로이드)'},
    { question : 'Q', text : '대여하기 버튼을 눌렀으나, 대여신청이 안 됩니다.(아이폰)'},
    { question : 'Q', text : '자전거 반납은 어떻게 하나요?'},
    { question : 'Q', text : '자전거를 반납했는데 미반납 되었다는 알림이 왔습니다.'},
    { question : 'Q', text : '대여나 반납은 24시간 가능한가요?'},
    { question : 'Q', text : '대여소가 아닌 곳에 자전거를 잠시 두려고 합니다.(임시잠금)'},
    { question : 'Q', text : '임시잠금 해제가 안 됩니다.'},
    { question : 'Q', text : '이용권은 한번만 이용할 수 있나요?'},
    { question : 'Q', text : '따릉이를 대여한 곳에만 반납해야 하나요?'},
    { question : 'Q', text : '대여하기 버튼을 눌렀으나, 계속 대여중으로 뜹니다.'},
    { question : 'Q', text : '대여 취소 버튼을 눌러도 응답이 없습니다.'},
    { question : 'Q', text : '(따릉이 회원) 휴대폰 번호가 변경되었습니다.'},
]

// faqSelectArr.forEach(item => {
//     const faqContent = document.querySelector('.select-form_content')

//     const faqArrQ = document.createElement('p');
//     faqArrQ.classList.add('faq-arr_question');
//     faqArrQ.textContent = item.question;

//     const faqArrText = document.createElement('p');
//     faqArrText.classList.add('faq-arr_text');
//     faqArrText.textContent = item.text;

//     faqContent.appendChild(faqArrQ)
//     faqContent.appendChild(faqArrText)
// })

// const faqButton = document.querySelector('.select_form');
// faqButton.addEventListener('click', toggleContent);

// function toggleContent() {
//     const faqContent = document.querySelector('.select-form_content');
//     faqContent.classList.toggle('show-content');
// }