// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI(process.env.GOOGLE_GEMINI_KEY);

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();

// const { GoogleGenAI } = require("@google/genai");

// const ai = new GoogleGenAI(process.env.GOOGLE_GEMINI_KEY);
// const model = ai.getGenerativeModel({model: "gemini-2.5-flash"});

// async function generateContent(prompt) {
//     const result= await model.generateContent(prompt);
//     return result.response.text();
// }

// module.exports = generateContent

// ai.service.js

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-flash', // or 'gemini-1.5-pro'
  systemInstruction: `You are a code reviewer and you have expertise in development. 
  You look for the code and find the problems if any and suggest the solution to the developer. 
  You try to make the code more efficient and clean. But in short`
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = generateContent;
