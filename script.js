const alterarImagem = document.querySelectorAll('.imagem')

alterarImagem.forEach(imagem => {
	imagem.addEventListener('click', () => {
		removerClasseAtiva()
		imagem.classList.add('ativa')
	})
})
	
function removerClasseAtiva() {
	alterarImagem.forEach(imagem => {
		imagem.classList.remove('ativa')
	})
}