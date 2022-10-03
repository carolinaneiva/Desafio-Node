import http from 'http'; //Corrigido o import

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
    new ProvaTesteComponent()
});

export class ProvaTesteComponent {
	listLivros: Array<Livro> = []
	constructor() { 
		this.initLivros()
		this.criarUmNovoLivro("Arquitetura Limpa", "Tecnologia");
		this.criarUmNovoLivro("Harry Potter e a Camara secreta", "Fantasia");
		this.criarUmNovoLivro("WildCards", "Esportes");
		this.criarUmNovoLivro("O Trono do Sol", "Fantasia")

		//this.criarUmNovoLivro('O poder da ação', "Administração")
		//A linha comentada acima foi utilizada para testar a função "buscarLivro"

		//console.log(this.listLivros)
		//A linha comentada acima foi utilizada para testar a função "criarUmNovoLivro"
		console.log(this.listarLivrosFantasia())
	}

	initLivros(){
		this.listLivros.push({ id: 0, nome: 'Código Limpo', genero: "Tecnologia" })
		this.listLivros.push({ id: 1, nome: 'Senhor do Anéis', genero: "Fantasia" })
		this.listLivros.push({ id: 2, nome: 'WildCards', genero: "Fantasia" })
		this.listLivros.push({ id: 3, nome: 'Harry Potter e o Prisioneiro de Azkaban', genero: "Fantasia" })
		this.listLivros.push({ id: 4, nome: 'Javascript de alto desempenho', genero: "Tecnologia" })
		this.listLivros.push({ id: 5, nome: 'O poder da ação', genero: "Administração" })
	}

	criarUmNovoLivro(nome: string, genero: string){
		if (this.buscarLivro(nome, genero) == -1){ //troquei o indice de 0 para -1, validando assim que o livro não está no listLivros para que possamos adiciona-lo.
			const novoLivro: Livro = {
				id: this.listLivros.length,
				nome: nome,
				genero: genero
			} 

			this.listLivros.push(novoLivro)
		} else {			
			console.log("Já existe um Livro cadastrado com esse nome e gênero") 
			//Mensagem de erro avisando que já existe um Livro cadastrado como esse nome e gênero.
		}
	}

	buscarLivro(nome: string, genero: string): number{
		let indiceLivro:number = -1
		for (let index = 0; index < this.listLivros.length; index++) {
			const livro = this.listLivros[index]

			if( livro.nome == nome && livro.genero == genero ) { //Validação do nome e gênero do Livro, comparando com os do listLivros
				indiceLivro = livro.id //Caso encontre um livro com mesmo nome e gênero no listLivros, a variável indiceLivro recebe o indice do livro no listLivros
			}
			
		}
		return indiceLivro 
		
	}

	listarLivrosFantasia():string{

		let livrosFantasia: string = ''
		for (let index = 0; index < this.listLivros.length; index++) { //Passa por todos os Livros do listLivros
			if(this.listLivros[index].genero == "Fantasia"){ //Valida se o livro é do gênero Fantasia
				livrosFantasia= livrosFantasia + this.listLivros[index].nome + ', ' //Se o livro for de fantasia, ele é adicionado na variável livrosFantasia, separado por virgula.
				
			}
		}
		 livrosFantasia = livrosFantasia.substring(0, livrosFantasia.length - 2);//Retira os dois ultimos caracteres da string, para que o texto não acabe com virgula e espaço.
		 return livrosFantasia //Retorna uma String contendo o nome de todos os Livros que são do gênero fantasia.
	}
}

export interface Livro{
	id: number,
	nome: string,
	genero: string,
}
