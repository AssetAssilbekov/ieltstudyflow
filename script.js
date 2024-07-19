addEventListener('scroll', e => {
    if(scrollY/innerHeight < 0.5) {
        document.getElementById('logo').style.opacity = '100%';
        document.getElementById('btn').style.opacity = '100%';
        console.log('go')
    } else {
    document.getElementById('logo').style.opacity = '0%';
    document.getElementById('btn').style.opacity = '0%';
    }
});