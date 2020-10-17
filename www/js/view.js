var $ = require('jquery');
var _ = require('underscore');
var Bakcbone = require('backbone');

var GreeterView = Bakcbone.View.extend({
    render: function() {
        this.$el.html("Hello Jordan!");
        return this;
    }
});

describe('greeter view', function() {
    it('greets the user', function() {
        var greeterView = new GreeterView().render();
        expect(greeterView.$el.html()).toBe("Hello Jordan!");
    })
})