import { supabase } from '../connection/supabaseClient.js';

export async function getMissions(req, res) {

    // Buscar todos os alimentos
    const { data, error } = await supabase
        .from('missao')
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

export async function getMissionParameters(req, res) {

    // Buscar todos os alimentos
    const { id } = req.params; // id do usuário vindo da rota

    const { data, error } = await supabase
        .from('questao_missao')
        .select(`
        id_questao,
        enunciado,
        alternativa_missao (
        id_alternativa,
        texto
    )
  `)
        .eq('id_missao', id)
        .single();

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

