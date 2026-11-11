document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Menu Mobile Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Efeito de Transparência no Header ao Rolar
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('shadow-lg', 'bg-emerald-950/95');
            header.classList.remove('bg-emerald-950/90');
        } else {
            header.classList.remove('shadow-lg', 'bg-emerald-950/95');
            header.classList.add('bg-emerald-950/90');
        }
    });

    // Lightbox para a Galeria de Fotos
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img && lightboxModal && lightboxImg) {
                lightboxImg.src = img.src;
                lightboxModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (lightboxClose && lightboxModal) {
        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Modais de Apoio e Contato Funcionais com Instagram @ailtondesouzasouza
    const infoModal = document.getElementById('info-modal');
    const modalClose = document.getElementById('modal-close');
    const modalActionBtn = document.getElementById('modal-action-btn');
    const btnQueroApoiar = document.getElementById('btn-quero-apoiar');
    const btnContato = document.getElementById('btn-contato');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    function openModal(title, text) {
        if (infoModal && modalTitle && modalDesc) {
            modalTitle.textContent = title;
            modalDesc.innerHTML = text;
            infoModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (infoModal) {
            infoModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    if (btnQueroApoiar) {
        btnQueroApoiar.addEventListener('click', () => {
            openModal(
                'Seja um Apoiador do Ypú', 
                'Que alegria saber do seu interesse em apoiar o nosso projeto social! Para parcerias e doações para as crianças no bairro Ypú, entre em contato diretamente pelo nosso Instagram oficial: <strong class="text-orange-400">@ailtondesouzasouza</strong>.'
            );
        });
    }

    if (btnContato) {
        btnContato.addEventListener('click', () => {
            openModal(
                'Entre em Contato', 
                'Nossa equipe está sempre de portas abertas para conversar com a comunidade, voluntários e parceiros. Fale conosco através do Instagram oficial <strong class="text-orange-400">@ailtondesouzasouza</strong>.'
            );
        });
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);

    if (infoModal) {
        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) closeModal();
        });
    }
});