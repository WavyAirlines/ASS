import React, {useState, useEffect} from "react";
function Contact () {
    useEffect(() => {
        document.title='Contact';
    }, []);
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    const showMessageAlert = () => {
        if (message === '') {
            setErrorMessage('Message is required')
        }
        else {
            alert(message);
        }
    }
    return (
        <div className="container">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleChange}></textarea>
  <span id="errorMessage" className="text-danger">{errorMessage}</span>
  <div className="form-group">
            <button className="btn btn-info mt-2" onClick={showMessageAlert}>Submit</button>
        </div>
</div>
        <p>Your message is: {message}</p>
    </div>
    );

}
export default Contact;