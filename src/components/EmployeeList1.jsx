import { Employee } from "./Employee1";

export const EmployeeList = () => {

    const employees = [
        {
            id: 1,
            image: "https://i.pravatar.cc/150?img=1",
            name: "John Smith",
            role: "Frontend Developer"
        },

        {
            id: 2,
            image: "https://i.pravatar.cc/150?img=2",
            name: "Sarah Johnson",
            role: "UI/UX Designer"
        },

        {
            id: 3,
            image: "https://i.pravatar.cc/150?img=3",
            name: "Michael Brown",
            role: "Backend Developer"
        }
    ];

    return (
        <div>

            {employees.map((employee) => (
                <Employee
                    key={employee.id}
                    image={employee.image}
                    name={employee.name}
                    role={employee.role}
                />
            ))}

        </div>
    );
};