import "./TherapistProfile.css";
import { useParams, useLocation, Link } from "react-router-dom";

function TherapistProfile() {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state || null;

  const displayName = data?.fullName || (id ? id.replace(/-/g, " ") : "Unknown Therapist");

  return (
    <div className="therapist-profile">
      <h1>{displayName}</h1>

      {data ? (
        <div className="profile-details">
          <p><strong>Specialization:</strong> {data.specialization}</p>
          <p><strong>Experience:</strong> {data.experience}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Bio:</strong> {data.bio}</p>
        </div>
      ) : (
        <div className="profile-details">
          <p>Details not available. This profile was not created via the registration form.</p>
        </div>
      )}

      <div className="profile-actions">
        <Link to="/therapistregistration">
          <button>Edit / Register</button>
        </Link>
        <Link to="/therapist">
          <button>Back to Therapists</button>
        </Link>
      </div>
    </div>
  );
}

export default TherapistProfile;
