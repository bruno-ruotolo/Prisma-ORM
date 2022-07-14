import { Question } from "@prisma/client";
import questionRepository from "../repositories/questionRepository.js"

export type CreateQuestionData = Omit<Question, "id">

async function createQuestion(question: CreateQuestionData) {
  await questionRepository.create(question)
};

async function getAllQuestions() {
  const questions = await questionRepository.getAll();
  return { questions };
};

async function getQuestionById(id: number) {
  const question = await questionRepository.getById(id);
  return (question);
};


const questionService = { createQuestion, getAllQuestions, getQuestionById };
export default questionService;