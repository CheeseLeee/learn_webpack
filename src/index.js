function createRoot(){
    var button = document.createElement('button')
    var body = document.body
    button.innerText = 'button'
    body.appendChild(button)
    button.addEventListener('click',() => {
        import(/* webpackPrefetch: true */ './math').then(ele => {
            console.log(ele)
            body.appendChild(ele.createApp())
        })
    })
}
createRoot()