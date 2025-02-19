export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String! 
        role: String!
        # subjects: [Subject!] #Have a separate resolver for nested querying
        # tasks: [Task!] #Have a separate resolver for nested querying
    }
    type Category {
        id: ID!
        name: String!
        # year: String!
        # semester: String!
        # tasks: [Task!] #Have a separate resolver for nested querying
        # userId: ID! #Each subject has a corresponding creator user
    }
    type Product {
        id: ID!
        name: String!
        price: String!
        quantity: String!
        image: String!
        categoryId: ID! #Each product is directly under an individual category
    }
    type Customer {
        id: ID!
        name: String!
        address: String!
        email: String!
        contact: String!
    }
    type Query {
        users: [User]
        user(id: ID!): User
        subjects: [Subject]
        subject(id: ID!): Subject
        tasks: [Task]
        task(id: ID!): Task
    }
    type Mutation {
        addUser(user: AddUserInput!): User
        deleteUser(id: ID!): User
        updateUser(id: ID!, edits: EditUserInput!): User
        addSubject(subject: AddSubjectInput!): Subject
        deleteSubject(id: ID!): Subject
        updateSubject(id: ID!, edits: EditSubjectInput!): Subject
        addTask(task: AddTaskInput!): Task
        deleteTask(id: ID!): Task
        updateTask(id: ID!, edits: EditTaskInput!): Task
    }

    # Input Types
    input AddUserInput {
        name: String!
        email: String!
    }

    input EditUserInput {
        name: String
        email: String
    }

    input AddSubjectInput {
       subject: String!
       year: String!
       semester: String!
       userId:  String!
    }

    input EditSubjectInput {
       subject: String
       year: String
       semester: String
       userId:  String!
    }

    input AddTaskInput {
        task: String!
        description: String!
        isPriority: Boolean
        isPassed: Boolean
        deadline: String!
        userId:  String!
        subjectId: String!
    }

    input EditTaskInput {
        task: String
        description: String
        isPriority: Boolean
        isPassed: Boolean
        deadline: String
        userId:  String!
        subjectId: String!
    }
`;
