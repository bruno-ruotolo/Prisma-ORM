import { Question } from "@prisma/client";
import { prisma } from "../config/database.js"

import { CreateQuestionData } from "../services/questionService.js";

async function create(question: CreateQuestionData) {
  await prisma.question.create({ data: question });
};

async function getAll() {
  return prisma.question.findMany();
};

async function getById(id: number) {
  return prisma.question.findUnique({
    where: { id },
    select: {
      id: true,
      question: true,
      answers: {
        select: {
          answer: true
        },
      },
    },
  });
};

const questionRepository = {
  create,
  getAll,
  getById
}

export default questionRepository;