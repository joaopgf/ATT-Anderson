document.addEventListener('DOMContentLoaded', () => {
    const listaDeLivros = [
        { titulo: 'Livro 1', autor: 'Autor 1', descricao: 'Descrição 1' },
        { titulo: 'Livro 2', autor: 'Autor 2', descricao: 'Descrição 2' },
        { titulo: 'Livro 3', autor: 'Autor 3', descricao: 'Descrição 3' }
    ];

    const containerListaDeLivros = document.querySelector('.book-list');

    listaDeLivros.forEach(livro => {
        const elementoLivro = document.createElement('div');
        elementoLivro.classList.add('book');
        elementoLivro.innerHTML = `
            <h3>${livro.titulo}</h3>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p>${livro.descricao}</p>
        `;
        containerListaDeLivros.appendChild(elementoLivro);
    });

    const formularioContato = document.getElementById('contact-form');
    formularioContato.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Mensagem enviada!');
    });
});
