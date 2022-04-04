window.addEventListener('load', () => {

    const btn = document.getElementById('postBtn');
    const content = document.getElementById('content');
    const color = document.getElementById('color');

    btn.addEventListener('click', async e => {

        const post = await (await fetch('/api/meeps', { method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            color: color.value.substring(1),
            body: content.value
        }) })).json();

        console.log(post);
        if(post.errors) return alert(post.errors.map(err => `${err.param} - ${err.msg}`).join('\n'))

        alert('Added meep');
        window.location.reload();

        return false;
    });

});