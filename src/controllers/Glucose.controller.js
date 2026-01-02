import { supabase } from '../connection/supabaseClient.js';

export async function getGlucoseByUser(req, res) {
    const { id } = req.params; // id do usuário vindo da rota

    const { data, error } = await supabase
        .from('glicemia')
        .select('id_glicemia, valor_mgdl, classificacao, data_hora')
        .eq('id_usuario', id);

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
        id_usuario: Number(id),
        response: data
    });
}