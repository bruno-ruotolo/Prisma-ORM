import { Request, Response } from "express";
import answerService, { CreateAnswerData } from "../services/answerService.js";
import questionService, { CreateQuestionData } from "../services/questionService.js";

interface AnswerBody {
  answer: string
}

export async function create(req: Request, res: Response) {
  const question: CreateQuestionData = req.body;

  await questionService.createQuestion(question);

  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const answer: AnswerBody = req.body;
  const questionId = parseInt(req.params.id);
  const answerData: CreateAnswerData = { ...answer, questionId };
  await answerService.create(answerData);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAllQuestions();

  res.status(200).send(questions);
};

export async function getById(req: Request, res: Response) {

  const id = parseInt(req.params.id);

  const question = await questionService.getQuestionById(id);

  res.status(200).send(question);
}
