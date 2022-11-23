function logged()
{
    const token = localStorage.getItem('token');
    return !!token;
}

function get_token()
{
    return localStorage.getItem('token');
}
function set_token(token)
{
    localStorage.setItem('token', token);
}

document.addEventListener('DOMContentLoaded', () => {

    if(logged())
    {
        const elements_to_remove = document.querySelectorAll('.auth');
        const elements_to_show = document.querySelectorAll('.unauth');

        elements_to_remove.forEach((elem) => {
            elem.remove();
        });

        elements_to_show.forEach((elem) => {
            elem.classList.remove('unauth');
        });
    }else{
        const elements_to_remove = document.querySelectorAll('.unauth');
        const elements_to_show = document.querySelectorAll('.auth');

        elements_to_remove.forEach((elem) => {
            elem.remove();
        });

        elements_to_show.forEach((elem) => {
            elem.classList.remove('auth');
        });
    }
});
