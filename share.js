const footer = document.getElementById('footer-container');
const shareContainer = document.getElementById('shareContainer');

const share = () => {
    footer.classList.add('display-none');
    shareContainer.classList.remove('display-none');
}