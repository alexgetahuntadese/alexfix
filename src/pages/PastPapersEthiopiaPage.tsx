import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Calendar, BookOpen, FileText, GraduationCap, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import { usePageTitle } from '@/hooks/usePageTitle';

const PastPapersEthiopiaPage = () => {
  const navigate = useNavigate();
  usePageTitle('Past Papers Ethiopia');

  const years = [
    { year: '2025', status: 'Available', subjects: 'All streams' },
    { year: '2024', status: 'Available', subjects: 'All streams' },
    { year: '2023', status: 'Available', subjects: 'All streams' },
    { year: '2022', status: 'Available', subjects: 'All streams' },
    { year: '2021', status: 'Available', subjects: 'All streams' },
    { year: '2020', status: 'Available', subjects: 'All streams' },
    { year: '2019', status: 'Available', subjects: 'All streams' },
    { year: '2018', status: 'Available', subjects: 'All streams' },
    { year: '2017', status: 'Available', subjects: 'All streams' },
    { year: '2016', status: 'Available', subjects: 'All streams' },
    { year: '2015', status: 'Available', subjects: 'All streams' },
  ];

  const streams = [
    { name: 'Natural Science', subjects: 'Math, Physics, Chemistry, Biology, English, Civics', color: 'emerald' },
    { name: 'Social Science', subjects: 'Math, English, History, Geography, Economics, Civics', color: 'cyan' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
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
            Ethiopian Matric Past Papers
          </h1>
          <p className="text-xl text-white/70">
            Download and practice with EUEE past papers from 2015-2025
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-400" />
                Why Practice with Past Papers?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                Practicing with Ethiopian matric exam past papers is one of the most effective ways to prepare for the EUEE. Past papers help you understand the exam pattern, question types, and difficulty level.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-400 mt-0.5" />
                  <span>Understand exam format and question patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-400 mt-0.5" />
                  <span>Identify frequently asked topics and questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-400 mt-0.5" />
                  <span>Practice time management under exam conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-400 mt-0.5" />
                  <span>Build confidence and reduce exam anxiety</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-400" />
                Available Exam Streams
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <div className="space-y-3">
                {streams.map((stream) => (
                  <div key={stream.name} className="p-4 bg-white/[0.05] rounded-lg">
                    <div className="font-semibold text-lg mb-1">{stream.name}</div>
                    <div className="text-sm text-white/60">{stream.subjects}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-400" />
                Past Papers by Year (2015-2025)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {years.map((item) => (
                  <div key={item.year} className="p-3 bg-white/[0.05] rounded-lg text-center hover:bg-white/[0.1] transition-colors">
                    <div className="text-2xl font-bold text-amber-200">{item.year}</div>
                    <div className="text-xs text-white/60 mt-1">{item.status}</div>
                    <div className="text-xs text-white/40 mt-1">{item.subjects}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-rose-400" />
                How to Use Past Papers Effectively
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <div className="space-y-3">
                <div className="border-l-2 border-amber-400 pl-4">
                  <h4 className="font-semibold text-amber-200">Step 1: Timed Practice</h4>
                  <p className="text-sm">Solve papers under actual exam conditions (3-4 hours per subject)</p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h4 className="font-semibold text-emerald-200">Step 2: Review Answers</h4>
                  <p className="text-sm">Check your answers against marking schemes, identify weak areas</p>
                </div>
                <div className="border-l-2 border-violet-400 pl-4">
                  <h4 className="font-semibold text-violet-200">Step 3: Focus on Weaknesses</h4>
                  <p className="text-sm">Practice more questions from topics you struggled with</p>
                </div>
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-semibold text-cyan-200">Step 4: Repeat</h4>
                  <p className="text-sm">Practice multiple papers from different years for comprehensive preparation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-purple-400" />
                SuccessDoor Features for Past Paper Practice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span>Interactive quizzes based on past paper questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span>Instant feedback and detailed explanations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span>Track your progress and identify improvement areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span>Access predicted questions based on past paper analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => navigate('/matric')}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Practice Past Papers
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

export default PastPapersEthiopiaPage;
