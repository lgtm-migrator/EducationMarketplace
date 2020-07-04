var model = new Vue({
    el: '#blog',
    data: {
        title: 'You loaded this page on ' + new Date().toLocaleString(),
        description: ''
    }
});