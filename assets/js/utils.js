let num = document.getElementById('num');
    let counter = 0;

    setInterval(() => {
        if(counter === 75){
            clearInterval();
        }
        else{
            counter +=1;
            num.innerHTML = counter+"%";
        }
    
    }, 25)

    const button = document.getElementById('dropdown-arrow');
    button.addEventListener('click', function(){
        console.log('click');
        const drop = document.getElementById('dropdown-list');
        if(drop.classList.contains('none')){
            drop.classList.remove('none');
        }
        else{
            drop.classList.add('none');
        }
    })