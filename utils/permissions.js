const actions = {
    MODIFY_FILE: "MODIFY_FILE",
    VIEW_FILE: "VIEW_FILE",
    DELETE_FILE: "DELETE_FILE",
    CREATE_FILE: "CREATE_FILE"
};

const roles = {
    ADMIN: "ADMIN",
    USER: "USER"
}

const mappings = new Map();

mappings.set(actions.MODIFY_FILE, [roles.ADMIN]);
mappings.set(actions.VIEW_FILE, [roles.ADMIN, roles.USER]);
mappings.set(actions.DELETE_FILE, [roles.ADMIN]);
mappings.set(actions.CREATE_FILE, [roles.ADMIN]);

// export {actions, roles};

const adminAuth = (req, res, next) => {
    if()
"admin": "admin" or "user"
}
// add adminAuth to CUD functions 

module.exports = adminAuth;