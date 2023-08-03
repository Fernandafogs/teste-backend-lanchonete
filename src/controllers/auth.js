const adminUser = 'admin'
const adminPassword = '12345'

function login(req, res) {
    const { username, password } = req.body;

    if (username === adminUser && password === adminPassword) {
        // Redirecionando para o painel administrativo
        res.redirect('/admin');
    } else {
        res.status(401).json({ message: 'Senha invalida' });
    }
}

module.exports = {
    login
}
