import "./style.scss"
import Heading from "../common/Heading"
import mapImage from '../../assets/images/contact/map.png'
import secondMap from '../../assets/images/contact/map1.png'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



// RULE
// 1. Import any hook from 'react'
//    ex:   import { useState } from 'react';

// 2. Hooks must be called in the component body first of all meaning that
//    you should call it before anything else

// 3. useState:  when using useState hook, you get two params from it
//    - first:  variable that is used as memory of component
//    - function:  function that is used to update the variable
//                 You must use only this function but not other ones!

function Contacts() {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "+998",
    })


    function setInputValueIntoState(e) {
        // let name = e.target.name
        // let value = e.target.value
        let { name, value } = e.target
        setState({ ...state, [name]: value })
       
    }


    function submit(e) { }

    const [phoneNumber, setPhoneNumber] = useState({})
   
  
  
    const handleChange = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10}$/;
      return phoneNumberPattern.test(phoneNumber)
    }

    return (
        <main className="contacts-page-wrapper">

            <div className="left">
                <Heading size={1.2}>Контакты</Heading>
                <div>
                    <h5>Задайте нам любой вопрос</h5>
                    <p>+7 701 776 24 20</p>
                </div>
                <div>
                    <h5>Электронная почта</h5>
                    <p>client@fonte.kz</p>
                </div>
                <div>
                    <h5>Юридический адрес</h5>
                    <p style={{ width: '400px' }}>
                        050040/A15E3H4, проспект Аль-Фараби, 77/7​, 10 этаж, Алматы,
                        Казахстан Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346,
                        Астана, Казахстан
                    </p>
                </div>
                <div className="bottom">
                    <div>
                        <img src={secondMap} />
                    </div>
                    <div>
                        <img src={mapImage} />
                    </div>
                </div>
            </div>

            <div className="rigth">
          

                <form onSubmit={submit}>
                    <div>
                        <input
                            onChange={setInputValueIntoState}
                            type="text" placeholder="Name" name="name"
                            value={state.name}
                            pattern="^[a-zA-Z_ ]+$"
                        />
                    </div>
                    <div>
                        <input
                            onChange={setInputValueIntoState}
                            type="email" placeholder="Email" name="email"
                            value={state.email}
                        />
                    </div>
                    <div>
                        <PhoneInput
                        country={'uzb'}
                            onChange={handleChange}
                             placeholder="Phone" name="phone"
                            value={state.phone}
                            pattern="^\+998[0-9]{9}$"
                        />
                    </div>
                    <button className="warning-btn">Отправить</button>
                </form>
            </div>

        </main>
    );
}

export default Contacts;
