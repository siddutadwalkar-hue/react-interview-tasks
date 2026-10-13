import { useState } from 'react'
import './App.css'
//import PaymentValidation from './paymentValidation'
import Main from './react-componentA-componentB-state-management/Main'
import DynamicTable from './wipro-dynamic-table-with-search-and-pagination/DynamicTable'
function App() {
  const [count, setCount] = useState(0)
  const employeeData = [
  {
    "id": 1,
    "name": "John Smith",
    "email": "john.smith@company.com",
    "department": "Engineering",
    "designation": "Senior Software Engineer",
    "city": "New York",
    "salary": 95000
  },
  {
    "id": 2,
    "name": "Emma Johnson",
    "email": "emma.johnson@company.com",
    "department": "Engineering",
    "designation": "Frontend Developer",
    "city": "Chicago",
    "salary": 85000
  },
  {
    "id": 3,
    "name": "Liam Brown",
    "email": "liam.brown@company.com",
    "department": "Product",
    "designation": "Product Manager",
    "city": "Seattle",
    "salary": 105000
  },
  {
    "id": 4,
    "name": "Olivia Davis",
    "email": "olivia.davis@company.com",
    "department": "HR",
    "designation": "HR Manager",
    "city": "Boston",
    "salary": 88000
  },
  {
    "id": 5,
    "name": "Noah Wilson",
    "email": "noah.wilson@company.com",
    "department": "Engineering",
    "designation": "Backend Developer",
    "city": "Austin",
    "salary": 90000
  },
  {
    "id": 6,
    "name": "Sophia Miller",
    "email": "sophia.miller@company.com",
    "department": "Finance",
    "designation": "Financial Analyst",
    "city": "Dallas",
    "salary": 78000
  },
  {
    "id": 7,
    "name": "James Moore",
    "email": "james.moore@company.com",
    "department": "Engineering",
    "designation": "Tech Lead",
    "city": "San Francisco",
    "salary": 120000
  },
  {
    "id": 8,
    "name": "Ava Taylor",
    "email": "ava.taylor@company.com",
    "department": "Marketing",
    "designation": "Marketing Specialist",
    "city": "Atlanta",
    "salary": 72000
  },
  {
    "id": 9,
    "name": "William Anderson",
    "email": "william.anderson@company.com",
    "department": "Engineering",
    "designation": "DevOps Engineer",
    "city": "Denver",
    "salary": 98000
  },
  {
    "id": 10,
    "name": "Mia Thomas",
    "email": "mia.thomas@company.com",
    "department": "Design",
    "designation": "UX Designer",
    "city": "Portland",
    "salary": 82000
  },
  {
    "id": 11,
    "name": "Benjamin Jackson",
    "email": "ben.jackson@company.com",
    "department": "Engineering",
    "designation": "Software Engineer",
    "city": "Phoenix",
    "salary": 87000
  },
  {
    "id": 12,
    "name": "Charlotte White",
    "email": "charlotte.white@company.com",
    "department": "Sales",
    "designation": "Sales Executive",
    "city": "Miami",
    "salary": 76000
  },
  {
    "id": 13,
    "name": "Lucas Harris",
    "email": "lucas.harris@company.com",
    "department": "Product",
    "designation": "Business Analyst",
    "city": "Houston",
    "salary": 83000
  },
  {
    "id": 14,
    "name": "Amelia Martin",
    "email": "amelia.martin@company.com",
    "department": "Engineering",
    "designation": "QA Engineer",
    "city": "San Diego",
    "salary": 81000
  },
  {
    "id": 15,
    "name": "Henry Thompson",
    "email": "henry.thompson@company.com",
    "department": "Support",
    "designation": "Support Lead",
    "city": "Las Vegas",
    "salary": 73000
  },
  {
    "id": 16,
    "name": "Evelyn Garcia",
    "email": "evelyn.garcia@company.com",
    "department": "Engineering",
    "designation": "Full Stack Developer",
    "city": "Philadelphia",
    "salary": 94000
  },
  {
    "id": 17,
    "name": "Daniel Martinez",
    "email": "daniel.martinez@company.com",
    "department": "Engineering",
    "designation": "Architect",
    "city": "Los Angeles",
    "salary": 135000
  },
  {
    "id": 18,
    "name": "Harper Robinson",
    "email": "harper.robinson@company.com",
    "department": "Operations",
    "designation": "Operations Manager",
    "city": "Nashville",
    "salary": 92000
  },
  {
    "id": 19,
    "name": "Michael Clark",
    "email": "michael.clark@company.com",
    "department": "Engineering",
    "designation": "Principal Engineer",
    "city": "San Jose",
    "salary": 145000
  },
  {
    "id": 20,
    "name": "Ella Rodriguez",
    "email": "ella.rodriguez@company.com",
    "department": "Design",
    "designation": "UI Designer",
    "city": "Orlando",
    "salary": 79000
  }
];

  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Main />
        <div style={styles.main}>
          <h2>Employee Data</h2>
          <DynamicTable data={employeeData} />
        </div>
      </section>
      
    </>
  )
}

export default App
