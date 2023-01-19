const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/homepage');
    } else {
        next();
    }
};

module.exports = withAuth;