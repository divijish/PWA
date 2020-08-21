

window.onload = ()=>{
    
    if('serviceWorker' in navigator){
        try{
        navigator.serviceWorker.register('../sw.js');
        console.log("Service Worker registered");
        }catch(e){
            console.log(`Could not register service worker :${e}`);
        }
    }

}

window.addEventListener('appinstalled', event =>{
    console.log("App Installed", event);
})