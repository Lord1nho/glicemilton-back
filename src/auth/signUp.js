//apenas testes

import { supabase } from '../connection/supabaseClient.js';

export async function signUp(req, res) {
    try {
        const { email, password, nome } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email e senha são obrigatórios'
            });
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    nome
                }
            }
        });

        if (error) {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(201).json({
            message: 'Usuário criado com sucesso',
            user: {
                id: data.user.id,
                email: data.user.email
            }
        });

    } catch (err) {
        return res.status(500).json({
            message: 'Erro interno',
            error: err.message
        });
    }
}
