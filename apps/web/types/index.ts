export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  rewardAmount: number;
  rewardToken: "XLM" | "USDC";
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  content: string;
  quiz: Quiz;
}

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface User {
  id: string;
  walletAddress: string;
  enrolledCourses: string[];
  completedCourses: CompletedCourse[];
}

export interface CompletedCourse {
  courseId: string;
  score: number;
  completedAt: number;
  certificateId?: string;
}

export interface Reward {
  id: string;
  userId: string;
  courseId: string;
  amount: number;
  token: "XLM" | "USDC";
  status: "pending" | "claimed";
  createdAt: number;
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  score: number;
  issuedAt: number;
  metadataUri: string;
}
