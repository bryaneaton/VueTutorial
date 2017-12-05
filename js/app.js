new Vue({
    el: '#exercise',
    data: {
        counter: 0
    },
    computed: {
        result: function () {
            return this.counter < 37 ? 'not there yet' : 'done'
        }
    },
    watch: {
        counter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 5000);
        }
    }
});


//Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it

//TODO: Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000)