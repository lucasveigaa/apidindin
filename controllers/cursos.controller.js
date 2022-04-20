const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");

const CursoController = {
  cadastrarCurso(req, res) {
    const { titulo, descricao, professor } = req.body;

    if (!titulo || !descricao || !professor) {
      return res
        .status(400)
        .json({ error: "Você precisa passar os atributos corretamente" });
    }

    listaDeCursos.push({
      titulo,
      descricao,
      professor,
    });

    fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

    res.status(201).json({ message: "Cadastro efetuado com sucesso!" });
  },

  listarCursos(req, res) {
    res.json(listaDeCursos)
    res.status(200)
  },

  deletarCursos(req, res){
    const { titulo } = req.params

    const novaLista = listaDeCursos.filter(curso => {
      return curso.titulo != titulo;
    });
    
    fs.writeFileSync("./models/cursos.json", JSON.stringify(novaLista));
    
    res.status(201).json({ message: "Curso deletado com sucesso!" });

  },
    

  }


module.exports = CursoController;
