function getAdminPage(req, res) {
    //verificação da autenticação do usuário
    if (usuarioEstaAutenticado) {
        res.sendFile('admin.html', { root: './public' });
    } else {
        res.redirect('/login.html'); // Redirecionamento para a página de login
    }
}

module.exports = {
    getAdminPage
}
