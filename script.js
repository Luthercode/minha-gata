// Gato animado andando pela tela
function mostrarGatinhoAnimado() {
    const gatinho = document.getElementById('gatinhoAnimado');
    if (!gatinho) return;
    gatinho.style.display = 'block';
    gatinho.classList.remove('animando');
    // Força reflow para reiniciar animação
    void gatinho.offsetWidth;
    gatinho.classList.add('animando');
    setTimeout(() => {
        gatinho.style.display = 'none';
    }, 7000);
}

// Mostra o gatinho animado a cada 25-40s aleatoriamente
setTimeout(function loopGato() {
    mostrarGatinhoAnimado();
    setTimeout(loopGato, 25000 + Math.random()*15000);
}, 8000);

// Botão final: mostra gatinho segurando placa
document.addEventListener('DOMContentLoaded', function() {
    const btnFinal = document.getElementById('btnFinalSurpresa');
    const gatinhoSurpresa = document.getElementById('gatinhoSurpresa');
    if (btnFinal && gatinhoSurpresa) {
        btnFinal.addEventListener('click', function() {
            btnFinal.style.display = 'none';
            gatinhoSurpresa.style.display = 'flex';
        });
    }
});
// Mini Jogo: Adivinha o quanto eu te amo?
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('adivinha-input');
    const btn = document.getElementById('adivinha-btn');
    const msg = document.getElementById('adivinha-msg');
    if (input && btn && msg) {
        let tentativas = 0;
        const mensagens = [
            'Quase! Mas ainda não é esse... tenta de novo! 😅',
            'Tá chegando perto, mas não é esse! 🙈',
            'Acho que você consegue! Tenta mais uma vez! 😉',
            'Dica: é o maior número possível! 😏',
            'Não desiste! Eu acredito em você! 💪',
            'Você vai acertar, eu confio! 🫶',
            'Tenta com carinho, vai dar certo! 💖',
            'Tá quase, só mais um pouquinho! ✨',
            'Agora vai! 😍',
            'Última chance? Eu sei que você consegue! 😻'
        ];
        btn.addEventListener('click', function() {
            const valor = input.value.trim();
            if (valor === '10') {
                msg.innerHTML = '<span style="font-size:1.3rem;color:#e63946;">Te amo mais do que tudo! Você acertou! 💖<br>Surpresa extra: Você é a razão do meu sorriso todos os dias! 😍</span>';
                btn.disabled = true;
                input.disabled = true;
            } else if (valor === '') {
                msg.textContent = 'Digite um número!';
            } else {
                msg.textContent = mensagens[tentativas % mensagens.length];
                tentativas++;
            }
        });
    }
});
// Mini Jogo: Clique no Coração
document.addEventListener('DOMContentLoaded', function() {
    let clicks = 0;
    const btn = document.getElementById('minigameBtn');
    const msg = document.getElementById('minigameMsg');
    if (btn && msg) {
        btn.addEventListener('click', function() {
            clicks++;
            if (clicks < 7) {
                msg.textContent = [
                    'Mais um clique... 💗',
                    'Continue clicando! 😍',
                    'Tá quase lá! ✨',
                    'Falta pouco! 😻',
                    'Só mais um pouquinho! 💖',
                    'Último clique! 🫶'
                ][clicks-1] || 'Continue!';
            } else {
                btn.style.display = 'none';
                msg.innerHTML = '<span style="font-size:1.3rem;">\
                    "Se eu pudesse, te dava o mundo, mas você já é meu universo.<br>\
                    Nosso amor é poesia, é verso, é música boa igual Sodre-fui Te amar Demais.<br>\
                    Com você, tudo faz sentido, até o silêncio vira melodia.<br>\
                    Te amo mais do que qualquer refrão bonito, porque com você, cada dia é minha canção preferida."<br>\
                    <span style="font-size:2rem;">🎶💖</span>\
                </span>';
            }
        });
    }
});
// Função para revelar o conteúdo e iniciar efeitos/música
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('revealBtn');
    const mainContent = document.getElementById('mainContent');
    const audio = document.getElementById('audioSurpresa');

    btn.addEventListener('click', function() {
        btn.style.display = 'none';
        mainContent.style.display = '';
        setTimeout(() => {
            mainContent.classList.add('show');
        }, 10);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
        iniciarEfeitos();
    });
});

function iniciarEfeitos() {
    // Efeito de corações flutuando
    const heartEmojis = ['💕','💖','💗','💘','💝','💞','❤️','🩷','🌹'];
    const floatingHearts = document.createElement('div');
    floatingHearts.className = 'floating-hearts';
    document.body.appendChild(floatingHearts);

    function randomBetween(a, b) {
        return Math.random() * (b - a) + a;
    }

    function createHeart() {
        const span = document.createElement('span');
        span.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        span.style.left = randomBetween(5, 95) + 'vw';
        span.style.fontSize = randomBetween(1.5, 3.2) + 'rem';
        span.style.animationDuration = randomBetween(4, 8) + 's';
        floatingHearts.appendChild(span);
        setTimeout(() => floatingHearts.removeChild(span), 8000);
    }

    setInterval(createHeart, 700);

    // Efeito de brilho ao passar o mouse no nome
    const h1 = document.querySelector('.emoji.heart h1');
    if(h1) {
        h1.addEventListener('mouseenter', () => {
            h1.style.textShadow = '0 0 18px #e63946, 0 0 32px #fff';
            h1.style.transform = 'scale(1.08)';
            h1.style.transition = 'all 0.3s';
        });
        h1.addEventListener('mouseleave', () => {
            h1.style.textShadow = '';
            h1.style.transform = '';
        });
    }
}
