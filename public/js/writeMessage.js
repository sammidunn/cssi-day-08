const onSubmit = () => {
    const passcodeField = document.querySelector("#passcode");
    const passcodeInput = passcodeField.value;
    const messageField = document.querySelector("#message");
    const messageInput = messageField.value;
    
    if(checkPasscode(passcodeInput)) {
        const payload = {
            passcode: passcodeInput,
            message: messageInput
        };

        firebase.database().ref().push(payload);
    } else {
        alert("Passcode must be one word and contain a capital letter!");
    }

    passcodeField.value = "";
    messageField.value = "";
}

const checkPasscode = (input) => {
    if(input.includes(" ")) {
        return false;
    }

    for(let c of input) {
        if(c === c.toUpperCase()) {
            return true;
        }
    }
    return false;
}