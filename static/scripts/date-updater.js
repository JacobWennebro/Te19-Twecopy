window.addEventListener('load', () => {
    
    const dateContainers = document.querySelectorAll('span[data-server-date]');

    for(const cont of dateContainers) {
        const timeInt = Number(cont.getAttribute('data-server-date'));
        const date = moment(timeInt);

        cont.innerHTML = `${date.fromNow()} \u2022 ${date.year()}/${date.month()}/${date.day()}`;
    }

});