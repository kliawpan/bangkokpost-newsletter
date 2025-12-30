document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-action');
    const stickyBar = document.getElementById('stickyBar');
    const stickyCountText = document.getElementById('stickyCount');
    const closeBar = document.getElementById('closeBar');
    const submitBtn = document.getElementById('submitBtn');

    
    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModalX = document.getElementById('closeModalX');
    const closeModalBtn = document.getElementById('closeModalBtn');


    function updateUI() {
        const count = document.querySelectorAll('.btn-action.selected').length;
        stickyCountText.innerText = `SIGN UP FOR ${count} NEWSLETTER${count !== 1 ? 'S' : ''} SELECTED`;
        if (count > 0) stickyBar.classList.add('active');
        else stickyBar.classList.remove('active');
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('selected');
            this.innerText = this.classList.contains('selected') ? '✓ Selected' : '+ Sign up';
            updateUI();
        });
    });


    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-preview')) {
            const category = e.target.getAttribute('data-category');
            modalTitle.innerText = `Preview: ${category}`;
            modalBody.innerHTML = `
                <div style="text-align:center; font-family:serif;">
                    <img src="https://placehold.co/600x250/005eb8/fff?text=${category}+Sample" style="width:100%; border-radius:4px; margin-bottom:20px;">
                    <h2 style="color:#005eb8; margin-bottom:10px;">Weekly Inside: ${category}</h2>
                    <p style="color:#555; font-size:16px;">This is a premium preview of the newsletter you will receive directly to your inbox every week.</p>
                </div>`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
    });

    
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    
    closeModalX.addEventListener('click', closeModal);
    closeModalBtn.addEventListener('click', closeModal);
    

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });


    closeBar.addEventListener('click', () => {
        stickyBar.classList.remove('active');
    });

   
    submitBtn.addEventListener('click', () => {
        window.location.href = 'success.html';
    });

    updateUI();
});