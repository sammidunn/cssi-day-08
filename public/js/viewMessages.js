const getMessages = () => {
    const passcode = document.querySelector("#passcode");

    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        for(let key in data) {
            if(passcode.value === key) {
                console.log("match found")
            }
        }
    })
}
