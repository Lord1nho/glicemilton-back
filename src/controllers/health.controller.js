import { supabase } from '../connection/supabaseClient.js';

export async function healthCheck(req, res) {
    console.log('Health check acionado ✅');

    // consulta simples no banco
    const { data, error } = await supabase
        .from('usuario')
        .select('*')
        .limit(1);

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
        message: 'API e Supabase funcionando',
        sample: data
    });
}