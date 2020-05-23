const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const empresas = await connection('empresas'). select('*');
    
        return response.json(empresas);
    },

    async create(request, response) {
        const {name_empresa} = request.body;

        const id = crypto.randomBytes(2).toString('Hex');
    
        await connection('empresas').insert({
            id,
            name_empresa,
        });
    
        return response.json({ id })
    }
}