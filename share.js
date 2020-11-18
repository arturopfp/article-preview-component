const footer = document.getElementById('footer-container');
const shareContainer = document.getElementById('shareContainer');
const w = window.innerWidth;

const share = () => {
    if(w < 600) {
    footer.classList.add('display-none');
    shareContainer.classList.remove('display-none');
    } else {
      shareContainer.classList.remove('display-none');
    }
}

