// script.js

// DOM이 모두 로드되었을 때 스크립트 실행
document.addEventListener("DOMContentLoaded", function() {

    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;
    const slideInterval = 5000; // 이미지가 머무는 시간 (5000 = 5초)

    function nextSlide() {
        // 현재 슬라이드에서 active 클래스 제거
        slides[currentSlide].classList.remove("active");
        
        // 다음 슬라이드 인덱스 계산 (마지막이면 0으로)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 다음 슬라이드에 active 클래스 추가
        slides[currentSlide].classList.add("active");
    }

    // 정해진 시간(slideInterval)마다 nextSlide 함수 실행
    setInterval(nextSlide, slideInterval);
});