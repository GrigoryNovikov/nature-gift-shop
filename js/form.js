;(function () {
    let forms = document.querySelectorAll('.form-send');

    if (forms.length === 0) {
        return;
    }

    let serialize = function (form) {
        let items = form.querySelectorAll('input, select, textarea');
        let str = '';
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let name = item.name;
            let value = item.value;
            let separator = i === 0 ? '' : '&';

            if (value) {
                str += separator + name + '=' + value;
            }
        }
        return str;
    }

    let formSend = function (form) {
        let data = serialize();

        return;
        let xhr = new XMLHttpRequest();
        let url = 'mail/mail.php';

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function () {
            console.log(xhr.response);
        };

        xhr.send();
    }

    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            let form = e.currentTarget;
            formSend(form);
        })
    }
})();