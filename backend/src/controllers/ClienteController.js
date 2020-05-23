const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const clientes = await connection('clientes')
        .join('empresas', 'empresas.id', '=', 'clientes.empresa_id')
        . select('clientes.*', 'empresas.name_empresa');
        
        return response.json(clientes);
    },

    async create(request, response) {
        const { name_cliente, whatsapp, bairro, cidade } = request.body;
        const empresa_id = request.headers.empresa;
        
        const [id] = await connection('clientes').insert({
            name_cliente,
            whatsapp,
            bairro,
            cidade,
            empresa_id,

        });
        
        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params;
        const empresa_id = request.headers.empresa;

        const cliente = await connection('clientes')
            .where('id', id)
            .select('empresa_id')
            .first();

            if (cliente.empresa_id !== empresa_id) {
                return response.status(401).json({ error: "Operação não permitida"})
            }

            await connection('clientes').where('id', id).delete();

            return response.status(204).send();


    }

}