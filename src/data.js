export const EMPLOYEES = [
    {
        id: 1,
        name: "Aadesh"
    },
    {
        id: 2,
        name: "Yash"
    },
    {
        id: 3,
        name: "Ashwin"
    },
    {
        id: 4,
        name: "Ross"
    },
    {
        id: 5,
        name: "Taylor"
    },
    {
        id: 6,
        name: "Fred"
    },
]

export const MANAGERS = [
    {
        id: 1,
        name: "Chris Brown",
        role: "manager",
    },
]

export const TASKS = [
    {
        id: 1,
        title: 'TASK 1',
        desc: 'TASK 1 DESC',
        status: 1,
        emp: {
          id: 1,
          name: "Aadesh"
        }
      },
      {
        id: 2,
        title: 'TASK 2',
        desc: 'TASK 2 DESC',
        status: 1,
        emp: {
          id: 1,
          name: "Aadesh"
        }
      },
      {
        id: 3,
        title: 'TASK 3',
        desc: 'TASK 3 DESC',
        status: 2,
        emp: {
          id: 2,
          name: "Yash"
        }
      },
      {
        id: 4,
        title: 'TASK 4',
        desc: 'TASK 4 DESC',
        status: 3,
        emp: {
          id: 3,
          name: "Ashwin"
        }
      },
]

export const LANES = [
  {
    id: 1,
    title: "Planned"
  },
  {
    id: 2,
    title: "In Progress"
  },
  {
    id: 3,
    title: "Completed"
  },
]

export const USERS = [
  {
    id: 1,
    name: "Aadesh",
    username : "aadesh",
    password: "aadesh",
    role: "employee",
  },
  {
      id: 2,
      name: "Yash",
      username : "yash",
      password: "yash",
      role: "employee",
  },
  {
      id: 3,
      name: "Ashwin",
      username : "ashwin",
      password: "ashwin",
      role: "employee",
  },
  {
      id: 4,
      name: "Ross",
      username : "ross",
      password: "ross",
      role: "employee",
  },
  {
      id: 5,
      name: "Taylor",
      username : "taylor",
      password: "taylor",
      role: "employee",
  },
  {
      id: 6,
      name: "Fred",
      username : "fred",
      password: "fred",
      role: "employee",
  },
  {
    id: 7,
    name: "Chris Brown",
    username: "chris",
    password: "chris",
    role: "manager",
  },
]