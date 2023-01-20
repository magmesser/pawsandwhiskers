const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/homepage');
    } else {
        next();
    }
};

const adminAuth = (req, res, next) => {
    const admin = req.body.admin;

    if(admin) {
        next();
    } else {
        return res.status(401).json('You do not have permission!')
    }

};

module.exports = { withAuth, adminAuth };