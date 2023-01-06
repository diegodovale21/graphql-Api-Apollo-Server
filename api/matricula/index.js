const matriculaSchema = require('./schema/matricula.graphql')
const matriculaResolvers = require('./resolvers/turmaResolvers')
const MatriculasAPI = require('./datasource/turma')

module.exports = {
  matriculaSchema,
  matriculaResolvers,
  MatriculasAPI
}
