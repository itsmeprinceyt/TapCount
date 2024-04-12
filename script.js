let counter = Number(localStorage.getItem('counterNumber')) || 0;
document.querySelector('.counter').textContent =`${counter}`;
document.querySelector('.Tap').addEventListener('click',()=>
{
    counter += 1;
    localStorage.setItem('counterNumber',counter);
    document.querySelector('.counter').textContent =`${counter}`;
})

document.querySelector('.Reset').addEventListener('click',()=>
{
    localStorage.removeItem('counterNumber');
    counter = 0;
    document.querySelector('.counter').textContent =`${counter}`;
})