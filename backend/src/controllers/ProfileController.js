const connection = require('../database/connection');
module.exports= {
    async index(request, response) {
        const empresa_id = request.headers.empresa;

        const atendimentos = await connection('atendimentos')
        .where('empresa_id', empresa_id)
        .select('*');

        return response.json(atendimentos);

    }
}