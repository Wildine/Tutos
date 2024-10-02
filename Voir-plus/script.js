const plus = document.getElementById('plus');
const hidden = document.getElementById('hidden');

plus.addEventListener('click', function(){
    if (hidden.classList.contains('show')) {
        hidden.classList.remove('show');
        plus.textContent = 'Voir Plus';
    } else {
        hidden.classList.add('show');
        plus.textContent = 'Reduire';
    }
});