const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const empresa = await connection('empresas')
            .where('id', id)
            .select('name')
            .first()

            if(!empresa) {
                return response.status(400).json({ error: 'A empresa com este ID não existe.'})
            }

            return response.json(empresa);
    }
}