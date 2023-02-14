// Modal
const btnOpenModal = document.querySelectorAll('[data-modal-target]');
const btnOpenDrawer = document.querySelectorAll('[data-drawer-target]');

btnOpenModal.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const el = e.target;
        const value = el.getAttribute('data-modal-target');
        const modal = document.querySelector(`#${value}`);
        modal.classList.add('active');
        const buttonClose = modal.querySelector('.modal-close');
        buttonClose.addEventListener('click', () => {
            modal.classList.remove('active');
        })

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.classList.remove('active');
            }
        })

        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                modal.classList.remove('active');
            }
        })
    })
});

btnOpenDrawer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const el = e.target;
        const value = el.getAttribute('data-drawer-target');
        const drawer = document.querySelector(`#${value}`);
        drawer.classList.add('active');
        const buttonClose = drawer.querySelector('.drawer-close');
        buttonClose.addEventListener('click', () => {
            drawer.classList.remove('active');
        })
        window.addEventListener('click', (e) => {
            if (e.target == drawer.querySelector('.overlay')) {
                drawer.classList.remove('active');
            }
        }
        )
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                drawer.classList.remove('active');
            }
        }
        )
    })
})