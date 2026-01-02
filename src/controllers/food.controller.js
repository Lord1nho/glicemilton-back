import { supabase } from '../connection/supabaseClient.js';

export async function getFoods(req, res) {
    // Buscar todos os alimentos
    const { data, error } = await supabase
        .from('alimentos')
        .select('*')

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

export async function selectFoods(req, res) {
    return 'TESTE'
}