const form = document.getElementById('form');

form.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const labels = document.querySelectorAll('label.incompleto');
    labels.forEach(label => {
        label.classList.add('hidden');
    });

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('border-red');
    });

    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const tel = document.querySelector('input[type="tel"]').value;
    const mensagem = document.querySelector('textarea[id="mensagem"]').value;

    if (!nome || !email || !tel || !mensagem) {
        if (!nome) {
            document.querySelector('label[for="nome"]').classList.remove('hidden');
            document.getElementById('nome').classList.add('border-red');
        }
        if (!email) {
            document.querySelector('label[for="email"]').classList.remove('hidden');
            document.getElementById('email').classList.add('border-red');
        }
        if (!tel) {
            document.querySelector('label[for="tel"]').classList.remove('hidden');
            document.getElementById('tel').classList.add('border-red');
        }
        if (!mensagem) {
            document.querySelector('label[for="mensagem"]').classList.remove('hidden');
            document.getElementById('mensagem').classList.add('border-red');
        }
    } else {
        inputs.forEach(input => {
            input.classList.add('border-green');
        });
        console.log(nome, email, tel, mensagem);
    }
});