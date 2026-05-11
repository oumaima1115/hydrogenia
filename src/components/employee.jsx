import "../style/Employee.css";

export const Employee = () => (
    <div className="employee-card">

        <div className="employee-image">
            <img
                src="https://i.pravatar.cc/150"
                alt="employee"
            />
        </div>

        <div className="employee-info">
            <h2>John Smith</h2>
            <p>Frontend Developer</p>
        </div>

    </div>
);