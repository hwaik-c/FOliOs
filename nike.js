/* 
function nightday(self)
{
    let target = document.querySelector('body');
    if(this.value === 'night')
    {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        this.value = 'day';

        let links = document.querySelectorAll('a');
        let i = 0;
        while(i<links.length)
        {
            links[i].style.color='powderblue';
            i=i+1;
        }
    } 
    else 
    {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        this.value = 'night';

        let links = document.querySelectorAll('a');
        let i = 0;
        while(i<links.length)
        {
            links[i].style.color='blue';
            i=i+1; 
        }
    }
} */
