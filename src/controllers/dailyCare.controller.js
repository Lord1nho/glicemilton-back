import { supabase } from '../connection/supabaseClient.js';

export async function getDailyCare(req, res) {

    // Buscar todos os alimentos
    const { data, error } = await supabase
        .from('cuidados_diarios')
        .select('id, titulo, descricao, icone, ordem, ativo')

    if (error) {
        console.error('Erro no Supabase:', error.message);

        return res.status(500).json({
            status: 'error',
            message: 'Erro ao conectar com o banco',
            error: error.message
        });
    }

    return res.status(200).json({
        status: 'ok',
        response: data
    });
}