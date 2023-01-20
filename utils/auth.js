const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/homepage');
    } else {
        next();
    }
};

const adminAuth = (req, res, next) => {

    if(req.session.admin && req.session.logged_in) {
        next();
    } else {
        return res.status(401).json('You do not have permission!')
    };
};

module.exports = { withAuth, adminAuth };