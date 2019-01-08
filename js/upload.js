var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML =
            'Lien : ' + '<br><p>' + get_link + '</p>';
    }
};

//Remplacez ici
new Imgur({
    clientid: '9c54516b463ff41', //Votre clientId
    callback: feedback
});