import { Context } from "./context";

export const resolvers = {
  Query: {
    async users(_parent: any, _args: any, context: Context) {
      return await context.prisma.user.findMany();
    },
    async user(_parent: any, args: any, context: Context) {
      return await context.prisma.user.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    async subjects(_parent: any, _args: any, context: Context) {
      return await context.prisma.subject.findMany();
    },
    async subject(_parent: any, args: any, context: Context) {
      return await context.prisma.subject.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    async tasks(_parent: any, _args: any, context: Context) {
      return await context.prisma.task.findMany();
    },
    async task(_parent: any, args: any, context: Context) {
      return await context.prisma.task.findFirst({
        where: {
          id: args.id,
        },
      });
    },
  },
  User: {
    //The separate resolver for nested querying
    async subjects(parent: any, _args: any, context: Context) {
      return await context.prisma.subject.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    async tasks(parent: any, _args: any, context: Context) {
      return await context.prisma.task.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
  Subject: {
    //The separate resolver for nested querying
    async tasks(parent: any, _args: any, context: Context) {
      return await context.prisma.task.findMany({
        where: {
          subjectId: parent.id,
        },
      });
    },
  },
  // Optional might not be used
  // Task: {
  //    subject(parent: any, _args: any, context: Context) {
  //     return await context.prisma.subject.findFirst({
  //       where: {

  //       }
  //     })
  //    }
  // },
  Mutation: {
    async addUser(_parent: any, args: any, context: Context) {
      return await context.prisma.user.create({
        data: {
          name: args.user.name,
          email: args.user.email,
        },
        // ...args.user - instead of name and email is also possible using spread operator much faster
      });
    },
    async deleteUser(_parent: any, args: any, context: Context) {
      return await context.prisma.user.delete({
        where: { id: args.id },
      });
    },
    async updateUser(_parent: any, args: any, context: Context) {
      return await context.prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
    async addSubject(_parent: any, args: any, context: Context) {
      return await context.prisma.subject.create({
        data: {
          ...args.subject,
        },
      });
    },
    async deleteSubject(_parent: any, args: any, context: Context) {
      return await context.prisma.subject.delete({
        where: {
          id: args.id,
        },
      });
    },
    async updateSubject(_parent: any, args: any, context: Context) {
      return await context.prisma.subject.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
    async addTask(_parent: any, args: any, context: Context) {
      return await context.prisma.task.create({
        data: {
          ...args.task,
        },
      });
    },
    async deleteTask(_parent: any, args: any, context: Context) {
      return await context.prisma.task.delete({
        where: {
          id: args.id,
        },
      });
    },
    async updateTask(_parent: any, args: any, context: Context) {
      return await context.prisma.task.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
  },
};
