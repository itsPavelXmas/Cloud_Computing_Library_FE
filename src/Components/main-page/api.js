export const getBooks = async () => {
    try {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/books`);
        if (resp.status === 200) {
            const data = await resp.json();
            return data.Books
        }
        return [];
    } catch (err) {
        return [];
    }

}

export const getBookDescription = async (id) => {
    try {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
        if (resp.status === 200) {
            const data = await resp.json();
            return data.description
        }
        return '';
    } catch (err) {
        return '';
    }

}

export const getAudioData = async (id) => {
    try {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
        if (resp.status === 200) {
            console.log(resp.body)
            return resp.blob();
        }
        return [];
    } catch (err) {
        return [];
    }

}

export const getTranslatedText = async (text, language) => {
    try {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/translate`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify({text:text, language:language}) 
          });
        if (resp.status === 200) {
            const {translated} = await resp.json()
            return translated;
        }
        return '';
    } catch (err) {
        return '';
    }

}

export const sendBookToMail = async (reciever, message) => {
    try {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/send-mail`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify({receiver: reciever, message: message}) 
          });
        if (resp.status === 200) {
            const {message} = await resp.json()
            return message;
        }
        return '';
    } catch (err) {
        return '';
    }

}