new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        buttonAlert: function (event) {
            alert("!Achtung!")
        },
        updateValue: function (event) {
            this.value = event.target.value;

        }
    }
});