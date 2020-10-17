var ViewDemo = Backbone.View.extend({
    defaults: {
        sessionData: {}
    },
    events: {
        'click button': 'login',
        'blur input[name="username"]': 'getUsername',
        'blur input[name="password"]': 'getPassword'
    },
    getSessionData: function() {
         
        let sessiondata = window.sessionStorage.getItem('data');
        this.sessionData = sessiondata;
        if(this.sessionData != null || this.sessionData != undefined) {
            document.getElementById('output').innerHTML = 'Username: ' + JSON.parse(this.sessionData).username + " Password: " + JSON.parse(this.sessionData).password;
        }
    },
    render: function() {
        this.$el.html('<div class="output" id="output"></div>');
        this.getSessionData();
    },
    initialize: function () { this.render(); }
});
var myview1 = new ViewDemo({ el: '#mainData' });
