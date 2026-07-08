const form = document.getElementById('contact-form');
const modal = document.getElementById('thankyou-modal');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.reset();
        modal.classList.remove('hidden');


      lottie.loadAnimation({
        container: document.getElementById('success-icon'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json'
      });
      
    } else {
        alert("Hubo un problema al enviar el mensaje. Intenta de nuevo.");
    }
});

closeBtn.onclick = function () {
    modal.classList.add('hidden');
}

window.onclick = function (event) {
    if(event.target == modal) {
        modal.classList.add('hidden');
    }
}
