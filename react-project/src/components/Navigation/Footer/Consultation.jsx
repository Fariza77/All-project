import { useState } from 'react'
import "./consultation.scss"
import Wallpaper from "../../../assets/images/consultation-wallpaper.png"
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';

function Consultation(props) {
    const [consultationForm, setConsultationForm] = useState({
        client_name: '',
        email: '',
        phone: '',
        message: ''
    })
    function submit(e) {
        e.preventDefault()
        if (!consultationForm.client_name || !consultationForm.message) {
            toast.error('Please fill in all the fields', { theme: "dark" })
            return
        }
        let templateParams = {
            client_name: consultationForm.client_name,
            message: consultationForm.message
        }

        emailjs.send('service_8aytxhp', 'template_7tolh3p', templateParams, {
            publicKey: 'mbcCG18ZiPltCRfB-',
        })
            .then(
                (response) => {
                    toast.success('SUCCESS!', { theme: "dark" })
                },
                (err) => {
                    toast.error('FAILED! ' + err, { theme: "dark" })
                },
            )
        setConsultationForm({
            client_name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    function handleFormData(e) {
        let { name, value } = e.target
        setConsultationForm({ ...consultationForm, [name]: value })
    }

    return (
        <div className="consultation-wrapper">
            <form onSubmit={submit}>
                <div className="form-control">
                    <input id='consultation-person-fullname' type="text" name="client_name" placeholder='Full name'
                        onChange={handleFormData}
                        value={consultationForm.client_name}
                    />
                </div>
                <div className="form-control row">
                    <div className="left">
                        <input id='consultation-person-email' type="email" name="email" placeholder='Email'
                            onChange={handleFormData}
                            value={consultationForm.email}
                        />
                    </div>
                    <div className="right">
                        <input id='consultation-person-phone' type="tel" name="phone" placeholder='Phone'
                            onChange={handleFormData}
                            value={consultationForm.phone}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <textarea id="consultation-person-message" name="message" placeholder="Message"
                        onChange={handleFormData}
                        value={consultationForm.message}
                    />
                </div>
                <div className="form-control">
                    <button className='warning-btn'>Получить консультацию</button>
                </div>
            </form>
            <div className='image-wrapper'>
                <img src={Wallpaper} width={"100%"} height={550} />
            </div>
        </div>
    );
}

export default Consultation;