new Vue({
    el: '#app',
    data: {
        title: 'Hello Boost!'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
});