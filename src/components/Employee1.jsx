import "../style/Employee.css";

export const Employee = ({ image, name, role }) => (
    <div className="employee-card">

        <div className="employee-image">
            <img src={image} alt={name} />
        </div>

        <div className="employee-info">
            <h2>{name}</h2>
            <p>{role}</p>
        </div>

    </div>
);