import { useState } from 'react'
import * as YUP from 'yup'
import Swal from 'sweetalert2'
import { capitalizeFirstLetter } from '../../../Utils/CapitalizeFirstLetter'
import axios from 'axios'

export default function (): JSX.Element {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const URL_ACTION_FORM =
    'https://getform.io/f/69aed8af-0636-4968-8986-e6242438a5df'

  const formSchema = YUP.object({
    name: YUP.string().required(),
    phone: YUP.string().required(),
    email: YUP.string().email().required(),
    message: YUP.string().required(),
  })

  const handleSubmit = (event) => {
    const dataToSend = {
      name,
      phone,
      email,
      message,
    }

    event.preventDefault()
    formSchema
      .validate({
        name,
        phone,
        email,
        message,
      })
      .then(() => {
        Swal.fire({
          title: 'Please confirm your email before submiting',
          text: ` email: ${email}`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0476d9',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, submit it!',
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return axios
              .post(URL_ACTION_FORM, dataToSend)
              .then(() => {
                Swal.fire({
                  title: 'Submitted!',
                  text: 'I will contact you soon!',
                  icon: 'success',
                  confirmButtonColor: '#0476d9',
                })
              })
              .catch(() => {
                Swal.fire(
                  'Something wrong!',
                  'I have a problem with the form, please try again or contact me via Telegram',
                  'error'
                )
              })
          },
        })
      })
      .catch((error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: capitalizeFirstLetter(error.errors[0]),
        })
      })
  }

  return (
    <form className="contact__form">
      <div className="contact__inputs">
        <input
          type="text"
          placeholder="Name"
          className="contact__input"
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Phone"
          className="contact__input"
          name="phone"
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />
      </div>

      <div className="contact__inputs email__container">
        <input
          type="mail"
          placeholder="Email"
          className="contact__input"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>

      <textarea
        name="message"
        id=""
        cols={0}
        rows={7}
        placeholder="Message"
        className="contact__input"
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      ></textarea>

      <input
        type="submit"
        value="Send Message"
        className="button contact__button"
        onClick={handleSubmit}
      />
    </form>
  )
}
