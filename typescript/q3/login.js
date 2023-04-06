var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.users = [
            { username: '1', password: '1' },
            { username: 'user2', password: 'password2' },
            { username: 'user3', password: 'password3' },
        ];
    }
    LoginPage.prototype.validateLogin = function (username, password) {
        var user = this.users.find(function (u) { return u.username === username; });
        if (user && user.password === password) {
            console.log("Welcome, ".concat(user.username, "!"));
            return true;
        }
        else {
            console.log("Invalid login credentials for username ".concat(username, "."));
            return false;
        }
    };
    return LoginPage;
}());
var form = document.querySelector('form');
var usernameInput = document.querySelector('#username');
var passwordInput = document.querySelector('#password');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var loginPage = new LoginPage();
    loginPage.validateLogin(usernameInput.value, passwordInput.value);
});
