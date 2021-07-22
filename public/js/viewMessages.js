const getMessages = () => {
    const passcode = document.querySelector("#passcode");

    const messagesRef = firebase.database().ref()
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        
        for(let key in data) {
            if(data[key].passcode === passcode.value) {
                console.log("match found")
                const message = document.querySelector("#message");
                message.innerHTML = data[key].message;
            }
        }
    })
}
