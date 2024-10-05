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

tileShareButton.addEventListener('click', () => {
    const phoneNumber = '+5511999999999'; // substitua pelo número de telefone desejado
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`Número de telefone copiado: ${phoneNumber}`); // exibe um aviso ao usuário
    }).catch((error) => {
        console.error('Erro ao copiar número de telefone:', error);
    });
});