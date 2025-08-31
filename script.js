document.addEventListener('DOMContentLoaded', () => {
    const deployButtons = document.querySelectorAll('.btn-deploy');

    deployButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const title = card.querySelector('h3').textContent;
            const isCrypto = button.classList.contains('btn-crypto');
            
            if (isCrypto) {
                alert(`BTC payment for ${title} is not yet implemented. Please send funds to the address in the footer.`);
            } else {
                alert(`Deployment of ${title} initiated. Stand by for confirmation.`);
            }
        });
    });
});
