let icon = {
    success : `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    `,
    danger : `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
    `,
    warning : `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    `,
    info : `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
    `,
}

const showToast = (message = "smaple Message" , title = 'title' , toastType = "success" , duration = 3000) => {
    
    if(! Object.keys(icon).includes(toastType)){ toastType = info }

    let box = document.createElement('div');
    box.classList.add('toast' , `toast-${toastType}`)

    box.innerHTML = `
        <div class="toast-content-wrapper">
            <div class="toast-icon">${icon[toastType]}</div>
            <div class="toast-message">
                <div class="toast-message__title" >${title}</div>
                <div class="toast-message__body" >${message}<div/>
            </div>
            <div class="toast-progress"></div>
        </div>
    `

    duration = duration || 5000 
    box.querySelector('.toast-progress').style.animationDuration = `${duration/1000}s`

    let toastAlready = document.body.querySelector(".toast")
    if(toastAlready){
        toastAlready.remove()
    }

    document.body.appendChild(box)

    // if(box.classList.contains('closing')){
    //     box.classList.remove('closing')
    // }
    // setTimeout(() => {
    //     if(box.classList.contains('closing')){
    //         box.classList.remove('closing')
    //     }
    //     box.classList.add('closing')
    //     setTimeout(() => {
    //         box.classList.remove('closing')
            
    //     }, 1000);
    // }, duration);

}



