export default class UserService {
    /**
     * 
     * CREATE
     * RETRIEVE
     * UPDATE
     */
    users = [
        {
            firstname: 'Sophie',
            lastname: 'Tagada',
            username: 'soso',
            email: 'sophie@tag.com',
            password: 'sophie'
        },
        {
            firstname: 'Kevin',
            lastname: 'Burt',
            username: 'kevin.burt',
            email: 'kevin@burt.com',
            password: 'kevin'
        },
        {
            firstname: 'Jeremy',
            lastname: 'Cross',
            username: 'jeremy.cross',
            email: 'jeremy@cross.com',
            password: 'jeremy'
        }
    ];

    list() {
        return this.users;
    }

    get(requestedUsername) {
        const filteredUsers = this.users.filter(user => user.username == requestedUsername);
        return filteredUsers.length <= 0 ? null : filteredUsers[0];
    }

    create(firstname, lastname, username, email, password) {
        const foundUser = this.get(username);
        if (foundUser == null) {
            this.users.push({
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: password
            })
        }
    }

    /**
     * 
     * key = "email", "firstname", "lastname"
     */
    update(username, key, value) {
        const user = this.get(username);
        if (key === 'username') {
            return;
        }
        user[key] = value;
    }
}