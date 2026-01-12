import { useNavigate } from "react-router-dom";
import "./Appointment.css";

function Appointment() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop reload
    navigate("/paymentsuccess"); // go to success page
  };

  return (
    <div className="appointment">
      <h2 className="animated-text">Your Mental Health Care</h2>

      <h1>Book an Appointment</h1>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="date" required />

        <select required>
          <option value="">Select Therapist</option>
          <option>Dr. Sarah Ahmed</option>
          <option>Dr. Rahim Khan</option>
          <option>Dr. Nusrat Jahan</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
