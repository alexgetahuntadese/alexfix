import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, GraduationCap, TrendingUp, Award, CheckCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import { usePageTitle } from '@/hooks/usePageTitle';

const Grade12EUEEPage = () => {
  const navigate = useNavigate();
  usePageTitle('Grade 12 EUEE Exam Guide');

  const naturalSubjects = [
    { name: 'Mathematics', weight: 'High', icon: '📐' },
    { name: 'Physics', weight: 'High', icon: '⚡' },
    { name: 'Chemistry', weight: 'High', icon: '🧪' },
    { name: 'Biology', weight: 'Medium', icon: '🧬' },
    { name: 'English', weight: 'Medium', icon: '📚' },
    { name: 'Civics', weight: 'Low', icon: '⚖️' },
  ];

  const socialSubjects = [
    { name: 'Mathematics', weight: 'High', icon: '📐' },
    { name: 'English', weight: 'High', icon: '📚' },
    { name: 'History', weight: 'Medium', icon: '🏛️' },
    { name: 'Geography', weight: 'Medium', icon: '🌍' },
    { name: 'Economics', weight: 'Medium', icon: '💰' },
    { name: 'Civics', weight: 'Low', icon: '⚖️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
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
            Grade 12 EUEE Exam Structure
          </h1>
          <p className="text-xl text-white/70">
            Complete breakdown of the Ethiopian University Entrance Examination for Grade 12 students
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-amber-400" />
                Understanding EUEE Scoring
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                The Grade 12 EUEE is scored out of 700 total points. Each subject contributes to your final score, with some subjects carrying more weight than others based on university requirements.
              </p>
              <div className="bg-white/[0.05] p-4 rounded-lg">
                <h4 className="font-semibold text-amber-200 mb-2">Score Distribution</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Each subject: Maximum 100 points</li>
                  <li>• Total: 7 subjects × 100 = 700 points</li>
                  <li>• Passing threshold: Varies by university (typically 350-400+)</li>
                  <li>• Top universities: Require 500+ points</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-400" />
                Natural Science Stream Subjects
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {naturalSubjects.map((subject) => (
                  <div key={subject.name} className="flex items-center gap-3 p-3 bg-white/[0.05] rounded-lg">
                    <span className="text-2xl">{subject.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold">{subject.name}</div>
                      <div className="text-xs text-white/60">Weight: {subject.weight}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-cyan-400" />
                Social Science Stream Subjects
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {socialSubjects.map((subject) => (
                  <div key={subject.name} className="flex items-center gap-3 p-3 bg-white/[0.05] rounded-lg">
                    <span className="text-2xl">{subject.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold">{subject.name}</div>
                      <div className="text-xs text-white/60">Weight: {subject.weight}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="h-5 w-5 text-rose-400" />
                University Admission Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <div className="space-y-3">
                <div className="border-l-2 border-amber-400 pl-4">
                  <h4 className="font-semibold text-amber-200">Top Universities (Addis Ababa, etc.)</h4>
                  <p className="text-sm">Require 500+ points, with strong performance in core subjects</p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h4 className="font-semibold text-emerald-200">Mid-tier Universities</h4>
                  <p className="text-sm">Require 400-500 points, balanced performance across subjects</p>
                </div>
                <div className="border-l-2 border-violet-400 pl-4">
                  <h4 className="font-semibold text-violet-200">Regional Universities</h4>
                  <p className="text-sm">Require 350-400 points, minimum passing in all subjects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Preparation Strategy by Subject
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span><strong>Mathematics:</strong> Practice daily, focus on calculus and algebra</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span><strong>Sciences:</strong> Understand concepts, solve past papers systematically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span><strong>English:</strong> Read extensively, practice comprehension and writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span><strong>Social Subjects:</strong> Memorize key facts, understand current affairs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => navigate('/matric')}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white"
            >
              Start Practicing
            </Button>
            <Button
              onClick={() => navigate('/ethiopian-matric-exam')}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Full Exam Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade12EUEEPage;
