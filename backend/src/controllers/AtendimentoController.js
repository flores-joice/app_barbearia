const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('atendimentos').count();

        console.log(count);

        const atendimentos = await connection('atendimentos')
        .join('clientes', 'clientes.id', '=', 'atendimentos.cliente_id')
        .join('empresas', 'empresas.id', '=', 'atendimentos.empresa_id')
        .limit(5)
        .offset((page-1) * 5)
        . select(
            'empresas.name_empresa',
            'atendimentos.servico',
            'atendimentos.value',
            'clientes.name_cliente', 
            'clientes.whatsapp', 
            'clientes.bairro', 
            'clientes.cidade', 
            );

        response.header('X-total-Count', count['count(*)']);
    
        return response.json(atendimentos);
    },

    async create(request, response) {
        const { servico, value } = request.body;
        const empresa_id = request.headers.empresa;
        const cliente_id = request.headers.cliente;

        const [id] = await connection('atendimentos').insert({
            servico,
            value,
            empresa_id,
            cliente_id,
        });

        return response.json({ id });
    }
}