// var $ = require('jquery');
// var _ = require('underscore');
// var Bakcbone = require('backbone');

var ViewDemo = Backbone.View.extend({
    defaults: {
        username: '',
        password: ''
    },
    events: {
        'click button': 'login',
        'blur input[name="username"]': 'getUsername',
        'blur input[name="password"]': 'getPassword'
    },
    getUsername: function () {
        this.username = document.getElementById('name').value;
    },
    getPassword: function () {
        this.password = document.getElementById('pwd').value;
    },
    login: function () {
        let usernameError = this.validateUsername(this.username);
        let passwordError = this.validatePassword(this.username, this.password);

        if (usernameError === true && passwordError === true) {
            window.sessionStorage.setItem('data', JSON.stringify({ username: this.username, password: this.password }));
            this.navigateToDash();
        }
        if (usernameError !== true) {
            document.getElementById('error').innerHTML = usernameError;
            document.getElementById('error').className = "showError";
        } else {
            document.getElementById('error').className = "error";
        }
        if (passwordError !== true) {
            document.getElementById('error1').innerHTML = passwordError;
            document.getElementById('error1').className = "showError";
        } else {
            document.getElementById('error1').className = "error";
        }
    },
    validatePassword(username='',password) {
        if (password == username) {
            return "Username and Password cannot be same";
        } else if (password.length <= 8) {
            return "Password must be atleast more than 8 characters";
        } else if (((password.charCode >= 65 && password.charCode <= 90) || (password.charCode >= 97 && password.charCode <= 122) || (password.charCode == 32))) {
            return "Password must be only alphabetic characters only";
        } else {
            return true
        }
    },
    validateUsername(username) {
        var repeatCheck = /([a-z])\1/;
        var oneCapital = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/;
        var repeatChecked = repeatCheck.test(username);
        var oneCapitalChecked = oneCapital.test(username);
        if (username.length > 10) {
            return "Username should be less than or equal to 10 characters";
        }
        else if (repeatChecked == true || repeatChecked == 'true') {
            return "No character can be repeated in a row for Username"
        } else if (oneCapitalChecked == false || oneCapitalChecked == 'false') {
            return "Username needs to have at least 1 capital letter"
        } else {
            return true;
        }
    },
    navigateToDash() {
        window.location = 'file:///android_asset/www/pages/dashboard/dashboard.html';
    },
    render: function () {
        this.$el.html('<div class="inputWrapper" id="inputWrapper"><input type="text" name="username" maxlength="10" id="name" placeholder="username" class="nameEle"></div>' +
            '<div class="passwordWrapper" id="passwordWrapper"><input type="password" minlength="8" name="password" onkeypress="return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))" placeholder="password" class="pwdEle" id="pwd"></div>' +
            '<div class="error" id="error"></div>' +
            '<div class="error" id="error1"></div>' +
            '<div class="submitWrapper" id="submitWrapper"><button value="Submit" class="btnEle">Submit</button></div>');
    },
    initialize: function () { this.render(); }
});
const div = (a, b) => a / b;

var myview = new ViewDemo({ el: '#loginBox' });

module.exports = { div, myview };