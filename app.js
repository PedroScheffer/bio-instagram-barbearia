const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

const tileShareButton = document.querySelector('.tile-share-button');

const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
    tile.addEventListener('click', (event) => {
        const phone = event.currentTarget.getAttribute('data-phone');
        navigator.clipboard.writeText(phone).then(() => {
        }).catch((error) => {
            console.error('Erro ao copiar número de telefone:', error);
        });
    });
});
