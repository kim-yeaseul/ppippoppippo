// 표시할 텍스트
var text = "안녕하세요 도전이 취미이자 성취감을 사랑하는 개발자입니다. 무엇이든 최선을 다하는 강한 책임감이 장점입니다.";

// 텍스트가 표시될 요소
var element = document.getElementById("masthead_description");

// 초기 인덱스
var index = 0;

// 타이핑 효과 함수
function typeEffect() {
    // 다음 글자 표시
    element.textContent += text[index];
    // 다음 글자로 인덱스 증가
    index++;
    // 텍스트 전체가 표시될 때까지 재귀 호출
    if (index < text.length) {
        setTimeout(typeEffect, 50); // 타이핑 속도 (밀리초)
    }
}

// 타이핑 효과 시작
typeEffect();
