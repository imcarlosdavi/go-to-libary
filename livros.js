class Livro{
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true
    constructor(titulo,autor,editora,anoPublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
    }
}

//Objetos para classe livro
let livros = []
livros.push(new Livro("Livro","mark","zuck",2006))
livros.push(new Livro("Livro2","antony","hit",2008))
livros.push(new Livro("Livro3","klark","marvis",2010))

//Classe para Biblioteca
class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome,endereco,telefone,acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    buscarLivroPeloNome(titulo){
       this.AcervoLivros.forEach(livro =>{
        if(livro.Titulo == titulo){
            document.body.innerHTML += `${livro}`
        }
       })
    }


    emprestimoLivro(titulo){
        let emprestimo = false
        livros.forEach(Livro=>{
            if(Livro.Titulo == titulo){
                if(Livro.Disponibilidade == true){
                    Livro.Disponibilidade = false
                    emprestimo = true
                }
            }
        })
        return emprestimo;
    }


    devolucaoLivro(titulo){
        livros.forEach(Livro=>{
            if(Livro.Titulo == titulo){
                Livro.Disponibilidade = true
                document.body.innerHTML += `Lívro devolvido`
            }
        })
    }
}

let biblioteca = new Biblioteca("Biblioteca Hope","Rua 84","8899224568",livros)

document.body.innerHTML += `${biblioteca}`
biblioteca.buscarLivroPeloNome("Livro2")
biblioteca.emprestimoLivro("Livro")
biblioteca.devolucaoLivro("Livro")