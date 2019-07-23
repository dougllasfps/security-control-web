import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export default class Messages {

    static add(type, message){
        toastr[type](message)
    }

    static error( message){
       this.add('error', message)
    }

    static success( message){
        this.add('success', message)
    }

    static warn( message){
        this.add('warning', message)
    }

    static info( message){
        this.add('info', message)
    }
}