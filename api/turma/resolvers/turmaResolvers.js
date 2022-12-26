const turmas = [
  {
    id: 1,
    descricao: "Básico"

  },
  {
    id: 2,
    descricao: "Intermediário"

  }
]

const turmaResolvers = {
  Query: {
    turmas: (parent, args, context, info) => turmas
  }
}

module.exports = turmaResolvers