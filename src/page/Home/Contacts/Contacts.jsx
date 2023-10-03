import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contacts = () => {
  const form = useRef();

  console.log(form);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dotr122",
        "template_7teg60n",
        form.current,
        `${import.meta.env.VITE_EMAIL_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          if (form.current) {
            // notified after send message
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your message has been send!',
                showConfirmButton: false,
                timer: 2500
              })

            //   Form rest after the message
            form.current.reset()
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="row items-center  bg-slate-100">
        <div className="sm:col-6 p-10 space-y-5">
          {/* Contact form */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control my-3">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control my-3">
              <label className="label">
                <span className="label-text font-semibold ">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control my-3">
              <label className="label">
                <span className="label-text font-semibold">Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Message"
                className="textarea textarea-bordered"
                required
              />
            </div>

            <div className="text-center my-5">
              <input
                className="btn btn-primary btn-wide shadow-xl"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>

{/* Maps part */}
        <div className="sm:col-6 p-0">
          {/* maps from leaflet */}
          <MapContainer
            center={[23.785401, 90.427256]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "500px" }}
          >
            <TileLayer
              attribution=" <a href='https://nieemhossen.netlify.app/'>Nieem</a> "
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[23.785401, 90.427256]}>
              <Popup>North Badda, Dhaka, Bangladesh</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
