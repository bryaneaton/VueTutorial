new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    // Computed properties is best practice
    computed: {
        output: function () {
            console.log('Computed');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
        }
    },
    // not best practice
    watch: {
        counter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function () {
            console.log('Method');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
        }
    }
});