const employee = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 4,
      newTask: 3,
      completed: 3,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Customer Feedback",
        taskDescription: "Analyze customer survey responses.",
        taskDate: "2026-07-29",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Ad Performance Report",
        taskDescription: "Prepare a report on ad campaign performance.",
        taskDate: "2026-07-30",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    firstName: "Arjun",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Backup Database",
        taskDescription: "Take a complete backup of the production database.",
        taskDate: "2026-07-27",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Firewall Update",
        taskDescription: "Update firewall rules for new servers.",
        taskDate: "2026-07-29",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway APIs.",
        taskDate: "2026-07-24",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Performance Testing",
        taskDescription: "Run load tests on the application.",
        taskDate: "2026-07-26",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Logo Redesign",
        taskDescription: "Create three logo concepts for the client.",
        taskDate: "2026-07-24",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prototype Review",
        taskDescription: "Present the Figma prototype to the team.",
        taskDate: "2026-07-25",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Team Standup",
        taskDescription: "Attend the daily scrum meeting.",
        taskDate: "2026-07-26",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Generate Invoice",
        taskDescription: "Prepare invoices for July clients.",
        taskDate: "2026-07-28",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Generate Invoice",
        taskDescription: "Prepare invoices for July clients.",
        taskDate: "2026-07-28",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("Admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const admin = JSON.parse(localStorage.getItem("Admin"));
  const employee = JSON.parse(localStorage.getItem("employee"));

  return { admin, employee };
};
