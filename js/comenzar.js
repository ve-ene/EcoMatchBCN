let items = [
    { 
    "title": "Banana Peel", 
    "description": "Organic waste", 
    "image": "img/banana.png", 
    "bin": "organic", 
    "value": 10 
    },
    { 
    "title": "Tetra Pak", 
    "description": "Plastic waste", 
    "image": "img/fruta.png", 
    "bin": "plastic", 
    "value": 10 
    },
    { "title": "Water Plastic Bottle", 
    "description": "Plastic waste", 
    "image": "img/botella-de-plastico.png",
     "bin": "plastic", 
     "value": 10 
    },
    { "title": "Apple Waste", 
    "description": "Organic waste", 
    "image": "img/manzana.png", 
    "bin": "organic", 
    "value": 10 
    },
    { "title": "chapa", 
    "description": "Plastic waste", 
    "image": "img/chapa.png", 
    "bin": "plastic", 
    "value": 10 
    },
    { "title": "Plastic Bag", 
    "description": "Plastic waste", 
    "image": "img/bolsa-plastico1.png", 
    "bin": "plastic", 
    "value": 10 
    },
    { "title": "Paper", 
    "description": "Paper waste", 
    "image": "img/papel.png",
    "bin": "paper", 
    "value": 10 
    },
    { "title": "Tea Bag", 
    "description": "Organic waste", 
    "image": "img/bolsa-de-te.png", 
    "bin": "organic", 
    "value": 10 
    },
    { "title": "Folders", 
    "description": "Paper waste", 
    "image": "img/huevos.png", 
    "bin": "paper", 
    "value": 10 
    },
    { "title": "Carton Box", 
    "description": "Paper waste", 
    "image": "img/caja.png", 
    "bin": "paper", 
    "value": 10 
    },
    { "title": "perfume", 
    "description": "botella perfume", 
    "image": "img/perfume.png", 
    "bin": "glass", 
    "value": 10 
    },
    { "title": "leave", 
    "description": "leave", 
    "image": "img/hoja.png", 
    "bin": "organic", 
    "value": 10 
    },
    { "title": "Broken Phone", 
    "description": "Electronic waste", 
    "image": "img/colilla.png", 
    "bin": "electronic", 
    "value": 10 
    },
    { "title": "copa", 
    "description": "copa", 
    "image": "img/vidrio.png",
    "bin": "glass", 
    "value": 10 
    },
    { "title": "botella vidrio", 
    "description": "botella vidrio", 
    "image": "img/botella-vidrio.png", 
    "bin": "glass", 
    "value": 10 
    },
    { "title": "cepillo dientes", 
    "description": "cepillo dientes", 
    "image": "img/cepillo-de-dientes.png", 
    "bin": "electronic", 
    "value": 10 
    },
    { "title": "Glass Bottle Green", 
    "description": "Glass waste", 
    "image": "img/botellas.png", 
    "bin": "glass", 
    "value": 10 
    },
    { "title": "Glass Bottl White/Brown", 
    "description": "Glass waste", 
    "image": "img/juguetes.png", 
    "bin": "electronic", 
    "value": 10 
    },
    { "title": "Broken Computer", 
    "description": "Electronic waste",
    "image": "img/panal-de-bebe.png", 
    "bin": "electronic", 
    "value": 10 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    let dropped = false;
    let discardedCount = 0;
    let totalItems = 0;

    const itemsContainer = document.getElementById('items-container');
    const bins = document.querySelectorAll('.bin');
    const scoreDisplay = document.getElementById('score');
    const resetButton = document.getElementById('resetButton');

    const back = document.querySelector('.volver');


    let score = 0;

    function loadItems() {
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            img.draggable = true;
            img.dataset.bin = item.bin;
            img.title = `${item.title}: ${item.description}`;

            img.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.bin);
                e.dataTransfer.setData('text/item', JSON.stringify(item));
            });

            // Touch events
            img.addEventListener('touchstart', handleTouchStart, { passive: true });
            img.addEventListener('touchmove', handleTouchMove, { passive: false });
            img.addEventListener('touchend', handleTouchEnd, { passive: true });

            itemsContainer.appendChild(img);
        });
        totalItems = items.length;
    }

    let touchItem = null;
    let touchOffsetX = 0;
    let touchOffsetY = 0;

    function handleTouchStart(e) {
        if (e.target.tagName === 'IMG') {
            touchItem = e.target;
            const rect = touchItem.getBoundingClientRect();
            touchOffsetX = e.touches[0].clientX - rect.left;
            touchOffsetY = e.touches[0].clientY - rect.top;
            touchItem.style.position = 'absolute';
            touchItem.style.zIndex = '1000';
        }
    }

    function handleTouchMove(e) {
        if (touchItem) {
            e.preventDefault();
            const touchX = e.touches[0].clientX - touchOffsetX;
            const touchY = e.touches[0].clientY - touchOffsetY;
            touchItem.style.left = `${touchX}px`;
            touchItem.style.top = `${touchY}px`;
        }
    }

    function handleTouchEnd(e) {
        if (touchItem && !touchItem.classList.contains('discarded')) {
            const touchX = e.changedTouches[0].clientX;
            const touchY = e.changedTouches[0].clientY;
            const bin = document.elementFromPoint(touchX, touchY);

            if (bin && bin.classList.contains('bin')) {
                const itemData = items.find(item => item.title === touchItem.alt);
                if (bin.dataset.bin === itemData.bin) {
                    score += itemData.value;
                    showScoreChange(itemData.value, true);
                } else {
                    score -= itemData.value;
                    showScoreChange(itemData.value, false);
                }
                scoreDisplay.textContent = score;

                const discardedContainer = document.getElementById(`discarded-${bin.dataset.bin}`);
                discardedContainer.appendChild(touchItem);
                touchItem.classList.add('discarded-item', 'discarded');
                touchItem.draggable = false;

                discardedCount++;
                if (discardedCount === totalItems) {
                    setTimeout(() => {
                        window.location.href = 'felicitaciones.html';
                    }, 1000);
                }
            } else {
                touchItem.style.position = 'static';
                touchItem.style.zIndex = 'auto';
            }
            touchItem = null;
        }
    }

    function showScoreChange(value, correct) {
        const scoreChange = document.createElement('div');
        scoreChange.classList.add('score-change');
        scoreChange.textContent = `${correct ? '+' : '-'}${value}`;
        scoreChange.style.color = correct ? 'green' : 'red';
        document.body.appendChild(scoreChange);

        const rect = scoreDisplay.getBoundingClientRect();
        scoreChange.style.top = `${rect.top - 30}px`;
        scoreChange.style.left = `${rect.left + rect.width / 2}px`;

        scoreChange.classList.add('animate');
        setTimeout(() => {
            scoreChange.remove();
        }, 1000);
    }

    back.addEventListener('click', () => {
        window.history.back();

    }
    
    
    
    
    )

    // DRAG & DROP
    bins.forEach(bin => {
        bin.addEventListener('dragover', e => e.preventDefault());

        bin.addEventListener('dragenter', () => {
            gsap.to(bin, { scale: 1.09, duration: 0.2, ease: "power2.out" });
        });

        bin.addEventListener('dragleave', () => {
            gsap.to(bin, { scale: 1, duration: 0.2, ease: "power2.in" });
        });

        bin.addEventListener('drop', (e) => {
            e.preventDefault();
            if (dropped) return;
            dropped = true;

            const binType = e.dataTransfer.getData('text/plain');
            const itemData = JSON.parse(e.dataTransfer.getData('text/item'));

            if (bin.dataset.bin === binType) {
                score += itemData.value;
                showScoreChange(itemData.value, true);
            } else {
                score -= itemData.value;
                showScoreChange(itemData.value, false);
            }
            scoreDisplay.textContent = score;

            gsap.to(bin, { scale: 1, duration: 0.2, ease: "power2.in" });

            const img = itemsContainer.querySelector(`img[alt="${itemData.title}"]`);
            if (img && !img.classList.contains('discarded')) {
                img.draggable = false;
                img.classList.add('discarded-item', 'discarded');
                const discardedContainer = document.getElementById(`discarded-${bin.dataset.bin}`);
                discardedContainer.appendChild(img);

                discardedCount++;
                if (discardedCount === totalItems) {
                    setTimeout(() => {
                        window.location.href = 'felicitaciones.html';
                    }, 1000);
                }
            }

            setTimeout(() => {
                dropped = false;
            }, 100);
        });
    });

    resetButton.addEventListener('click', () => {
        score = 0;
        discardedCount = 0;
        scoreDisplay.textContent = score;
        bins.forEach(bin => {
            const discardedContainer = document.getElementById(`discarded-${bin.dataset.bin}`);
            discardedContainer.innerHTML = '';
        });
        loadItems();
    });

    loadItems();
});

