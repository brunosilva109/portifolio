// Inicializar AOS para animações de rolagem
AOS.init();

// Se quiser adicionar mais interatividade com GSAP, pode usar aqui
// Exemplo: animação simples de fade-in no cabeçalho
gsap.from("header", {
    opacity: 0,
    duration: 2,
    y: -50
});

// Animar as barras de progresso quando a seção de habilidades for visível
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.progress-bar');

    skillBars.forEach((bar) => {
        const width = bar.style.width;  // A largura definida no HTML
        bar.style.width = '0%';  // Começa com a largura 0%

        // Ao rolar até a seção, anima a barra
        window.addEventListener('scroll', () => {
            const section = document.getElementById('skills');
            const sectionTop = section.getBoundingClientRect().top;
            const isInView = sectionTop < window.innerHeight;

            if (isInView) {
                // Anima as barras de progresso para atingirem o valor definido no HTML
                gsap.to(bar, {
                    width: width,
                    duration: 2,
                    ease: 'power4.out'
                });
            }
        });
    });
});

