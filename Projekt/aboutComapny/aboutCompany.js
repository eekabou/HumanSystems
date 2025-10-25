document.addEventListener('DOMContentLoaded', function() {
    
    // --- 연혁 섹션 스크롤 로직 ---
    const grid = document.querySelector('.performance-grid');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    if (grid && leftBtn && rightBtn) {
        let scrollAmount = 330; 
        const firstStatBox = grid.querySelector('.stat-box');
        if (firstStatBox) {
            const gap = parseInt(window.getComputedStyle(grid).gap) || 30;
            scrollAmount = firstStatBox.offsetWidth + gap;
        }

        function updateArrowState() {
            if (!grid) return;
            const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
            leftBtn.style.display = grid.scrollLeft < 1 ? 'none' : 'flex';
            rightBtn.style.display = grid.scrollLeft >= maxScrollLeft - 1 ? 'none' : 'flex';
        }

        rightBtn.addEventListener('click', () => {
            grid.scrollLeft += scrollAmount;
        });

        leftBtn.addEventListener('click', () => {
            grid.scrollLeft -= scrollAmount;
        });

        grid.addEventListener('scroll', updateArrowState);
        setTimeout(updateArrowState, 100);

    } else {
        console.warn('Scroll elements (performance-grid) not found.');
    }

    // --- 2. 인증서 모달 로직 ---
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.modal-close'); 
    const certItems = document.querySelectorAll('.cert-item');

    if (modal && modalImg && closeModal && certItems.length > 0) {
        
        certItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.dataset.src;
                if (imgSrc) {
                    modalImg.src = imgSrc;
                    modal.classList.add('show');
                }
            });
        });

        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show');
            }
        });

    } else {
        console.warn('Modal elements (image-modal) not found.');
    }

});
