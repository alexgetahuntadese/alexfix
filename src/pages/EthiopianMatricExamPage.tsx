import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, TrendingUp, Award, CheckCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import { usePageTitle } from '@/hooks/usePageTitle';

const EthiopianMatricExamPage = () => {
  const navigate = useNavigate();
  usePageTitle('Ethiopian Matric Exam Guide');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />

      <div className="max-w-4xl mx-auto relative z-10">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-white/70 hover:text-white hover:bg-white/5 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ethiopian Matric Exam Complete Guide
          </h1>
          <p className="text-xl text-white/70">
            Everything you need to know about the Ethiopian University Entrance Exam (EUEE)
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-amber-400" />
                What is the Ethiopian Matric Exam?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                The Ethiopian Matric Exam, officially known as the Ethiopian University Entrance Examination (EUEE), is a standardized test taken by Grade 12 students in Ethiopia. It determines university admission and is a crucial milestone in Ethiopian education.
              </p>
              <p>
                The exam covers core subjects including Mathematics, Physics, Chemistry, Biology, English, and Civics for Natural Science stream, and Mathematics, English, History, Geography, Economics, and Civics for Social Science stream.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-400" />
                Exam Structure and Format
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <span><strong>Duration:</strong> Usually 3-4 hours per subject</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <span><strong>Scoring:</strong> Maximum 700 points across all subjects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <span><strong>Streams:</strong> Natural Science and Social Science</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <span><strong>University Admission:</strong> Minimum score requirements vary by university</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-cyan-400" />
                Preparation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <div className="space-y-4">
                <div className="border-l-2 border-amber-400 pl-4">
                  <h4 className="font-semibold text-amber-200">Grade 11 (Foundation Year)</h4>
                  <p className="text-sm">Focus on understanding core concepts and building strong fundamentals</p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h4 className="font-semibold text-emerald-200">Grade 12 (Exam Year)</h4>
                  <p className="text-sm">Intensive practice with past papers and mock exams</p>
                </div>
                <div className="border-l-2 border-violet-400 pl-4">
                  <h4 className="font-semibold text-violet-200">Final Months</h4>
                  <p className="text-sm">Review, revision, and timed practice tests</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-rose-400" />
                Success Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-rose-400 mt-0.5" />
                  <span>Practice with past papers from 2015-2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-rose-400 mt-0.5" />
                  <span>Focus on weak subjects identified through practice tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-rose-400 mt-0.5" />
                  <span>Join study groups and discuss difficult concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-rose-400 mt-0.5" />
                  <span>Use SuccessDoor for interactive quizzes and notes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => navigate('/matric')}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white"
            >
              Practice with Past Papers
            </Button>
            <Button
              onClick={() => navigate('/predicted-matric')}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Try Predicted Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthiopianMatricExamPage;
