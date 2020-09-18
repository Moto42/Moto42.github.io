/** Send a wakeup signal to a project server
 * this code is used by the 'wakeup widget'
*/
(function(){
    function keepAlive(node){
        setTimeout(() => wakupWidgetFunction(node), (1000*60*4.75));
    }
    async function wakeServer(url){
        try {
            const status = await fetch(url).then(r=>r.status);
            return status === 200 ;
        }
        catch(error){
            return false;
        }
    }  
    async function wakupWidgetFunction(node, attempts=0){
        const waking = node.querySelector('.project__wakeup__image__waking');
        const ready = node.querySelector('.project__wakeup__image__ready');
        const error = node.querySelector('.project__wakeup__image__error');
        const message = node.querySelector('.project__wakeup__message');

        waking.classList.remove('hidden');
        ready.classList.add('hidden');
        error.classList.add('hidden');

        const url = node.dataset.wakeup_url;

        const serverUp = url === 'localhost' ? true : await wakeServer(url);

        if(serverUp){    
            waking.classList.add('hidden');
            ready.classList.remove('hidden');
            message.innerText = "Server is resonding.";
            //KeepAlive disabled, it's eating up my server time.
            // keepAlive(node);
            return true;
        }
        else{
            waking.classList.add('hidden');
            error.classList.remove('hidden');
            message.innerText = "Server not responding";
            if(attempts < 10 )
            setTimeout(()=>wakupWidgetFunction(node, attempts+1),1000*5);
            return false;
        }
    }

    Array.from(document.getElementsByClassName('project__wakeup')).forEach(node => {
        wakupWidgetFunction(node);
    })
})()
