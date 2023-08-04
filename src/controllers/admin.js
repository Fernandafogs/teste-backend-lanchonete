function getAdminPage(req, res) {
    // Verifique se o usuário está autenticado
    const isAuthenticated = req.query.auth === 'true' // Passamos auth=true na string de consulta

    if (isAuthenticated) {
        res.sendFile('admin.html', { root: './public' })
    } else {
        res.redirect('/login.html')
    }
}

module.exports = {
    getAdminPage
}

