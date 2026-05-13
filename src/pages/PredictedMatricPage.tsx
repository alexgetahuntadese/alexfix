import { useNavigate, Link } from 'react-router-dom';
import { memo, useMemo, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Sparkles, Target, BookOpen, Clock, CheckCircle, HeartHandshake } from 'lucide-react';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import PINLock from '@/components/PINLock';

// Lazy load question data to reduce initial bundle size
const getPredictedQuestions = () => {
  return import('@/data/predicted2018MatricQuestions').then(module => ({
    naturalMath: module.predicted2018NaturalMathQuestions || [],
    naturalPhysics: module.predicted2018NaturalPhysicsQuestions || [],
    naturalChemistry: module.predicted2018NaturalChemistryQuestions || [],
    naturalBiology: module.predicted2018NaturalBiologyQuestions || [],
    naturalEnglish: module.predicted2018NaturalEnglishQuestions || [],
    naturalCivics: module.predicted2018NaturalCivicsQuestions || [],
    naturalScholastic: module.predicted2018NaturalScholasticAptitudeQuestions || [],
    socialMath: module.predicted2018SocialMathQuestions || [],
    socialEnglish: module.predicted2018SocialEnglishQuestions || [],
    socialHistory: module.predicted2018SocialHistoryQuestions || [],
    socialGeography: module.predicted2018SocialGeographyQuestions || [],
    socialEconomics: module.predicted2018SocialEconomicsQuestions || [],
    socialCivics: module.predicted2018SocialCivicsQuestions || [],
    socialScholastic: module.predicted2018SocialScholasticAptitudeQuestions || [],
  }));
};

// Subject metadata (lightweight, doesn't include question data)
const naturalSubjectsMetadata = [
  { subject: 'Mathematics', icon: '📐' },
  { subject: 'Physics', icon: '⚛️' },
  { subject: 'Chemistry', icon: '🧪' },
  { subject: 'Biology', icon: '🧬' },
  { subject: 'English', icon: '📚' },
  { subject: 'Civics', icon: '⚖️' },
  { subject: 'Scholastic Aptitude Test', icon: '🧠' },
] as const;

const socialSubjectsMetadata = [
  { subject: 'Mathematics', icon: '📐' },
  { subject: 'English', icon: '📚' },
  { subject: 'History', icon: '🏛️' },
  { subject: 'Geography', icon: '🌍' },
  { subject: 'Economics', icon: '💰' },
  { subject: 'Civics', icon: '⚖️' },
  { subject: 'Scholastic Aptitude Test', icon: '🧠' },
] as const;

const PredictedMatricPage = () => {
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState<any>(null);
  const [showPINLock, setShowPINLock] = useState(false);
  const [pendingSubject, setPendingSubject] = useState<{ stream: string; subject: string } | null>(null);
  const [pinError, setPinError] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    getPredictedQuestions()
      .then(data => setQuestionData(data))
      .catch(err => {
        console.error('Error loading question data:', err);
        setLoadingError('Failed to load question data');
      });
  }, []);

  const handleSubjectClick = (stream: string, subject: string) => {
    const subjectLower = subject.toLowerCase();
    
    // Skip PIN for Mathematics and History
    if (subjectLower === 'mathematics' || subjectLower === 'history') {
      navigate(`/predicted-matric/${stream}/${subject}`);
    } else {
      setPendingSubject({ stream, subject });
      setPinError(false);
      setShowPINLock(true);
    }
  };

  const handlePINUnlock = (pin: string) => {
    if (!pendingSubject) {
      setPinError(true);
      return;
    }

    setPinError(false);
    setShowPINLock(false);
    navigate(`/predicted-matric/${pendingSubject.stream}/${pendingSubject.subject}`);
    setPendingSubject(null);
  };

  const handlePINCancel = () => {
    setShowPINLock(false);
    setPendingSubject(null);
  };

  const naturalSubjects = useMemo(() => {
    if (!questionData) return [];
    return [
      { subject: 'Mathematics', questions: questionData.naturalMath, icon: '📐' },
      { subject: 'Physics', questions: questionData.naturalPhysics, icon: '⚛️' },
      { subject: 'Chemistry', questions: questionData.naturalChemistry, icon: '🧪' },
      { subject: 'Biology', questions: questionData.naturalBiology, icon: '🧬' },
      { subject: 'English', questions: questionData.naturalEnglish, icon: '📚' },
      { subject: 'Civics', questions: questionData.naturalCivics, icon: '⚖️' },
      { subject: 'Scholastic Aptitude Test', questions: questionData.naturalScholastic, icon: '🧠' },
    ];
  }, [questionData]);

  const socialSubjects = useMemo(() => {
    if (!questionData) return [];
    return [
      { subject: 'Mathematics', questions: questionData.socialMath, icon: '📐' },
      { subject: 'English', questions: questionData.socialEnglish, icon: '📚' },
      { subject: 'History', questions: questionData.socialHistory, icon: '🏛️' },
      { subject: 'Geography', questions: questionData.socialGeography, icon: '🌍' },
      { subject: 'Economics', questions: questionData.socialEconomics, icon: '💰' },
      { subject: 'Civics', questions: questionData.socialCivics, icon: '⚖️' },
      { subject: 'Scholastic Aptitude Test', questions: questionData.socialScholastic, icon: '🧠' },
    ];
  }, [questionData]);

  if (loadingError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl mb-4">Error loading questions</p>
          <p className="text-white/50">{loadingError}</p>
        </div>
      </div>
    );
  }

  if (!questionData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/matric')}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">90% Predicted Questions</h1>
            </div>
            <p className="text-white/50 text-sm">Next year's matric exam predictions based on analysis</p>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">2018 E.C. Predicted Questions</h2>
              <p className="text-white/70 text-sm mb-4">
                These questions have a 90% probability of appearing in the next matric exam based on analysis of previous years' patterns, frequently tested topics, and exam trends.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs">
                  <CheckCircle className="h-3 w-3" />
                  <span>50+ Questions</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs">
                  <TrendingUp className="h-3 w-3" />
                  <span>High Probability</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs">
                  <BookOpen className="h-3 w-3" />
                  <span>All Streams</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          role="region"
          aria-label="Discounted PIN information"
          className="relative mb-8 overflow-hidden rounded-2xl border-[3px] border-amber-400 bg-gradient-to-br from-amber-500/35 via-amber-600/25 to-orange-600/30 p-1 shadow-[0_0_0_1px_rgba(251,191,36,0.4),0_8px_40px_rgba(251,191,36,0.25)] ring-2 ring-amber-300/60 md:rounded-3xl"
        >
          <div className="rounded-[14px] bg-slate-950/80 px-4 py-5 backdrop-blur-sm md:rounded-[22px] md:px-6 md:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-amber-950 shadow-lg shadow-amber-500/40 ring-2 ring-amber-200">
                <HeartHandshake className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-2 inline-block rounded-md bg-amber-400 px-2.5 py-1 text-xs font-black uppercase tracking-widest text-amber-950 shadow-sm">
                  Important
                </p>
                <h3 className="text-balance text-2xl font-black leading-tight tracking-tight text-white drop-shadow-sm md:text-3xl">
                  If paying full price is hard right now â€” you can still get a PIN
                </h3>
                <p className="mt-3 text-base font-bold leading-relaxed text-amber-50 md:text-lg">
                  Message or call us, mention <span className="text-white">Predicted Matric</span>, and ask for a{" "}
                  <span className="rounded bg-amber-400 px-1.5 py-0.5 font-black uppercase tracking-wide text-amber-950">
                    PIN with a discount
                  </span>
                  . Same team, private and fair â€” no judgment.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button
                    asChild
                    className="h-12 border-2 border-amber-300 bg-amber-400 px-6 text-base font-black text-amber-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 hover:text-amber-950"
                  >
                    <Link to="/contact">Contact us for a discount</Link>
                  </Button>
                  <p className="text-sm font-bold text-amber-100/95 sm:max-w-xs">
                    Say you need a <span className="text-white">reduced-price PIN</span> before you pay the full fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Natural Science Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
              <BookOpen className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Natural Science Stream</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {naturalSubjects.map((item, index) => (
              <div
                key={item.subject}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <Card
                  className="relative bg-white/[0.04] backdrop-blur-xl border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => handleSubjectClick('natural', item.subject)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-1">{item.subject}</CardTitle>
                        <CardDescription className="text-white/40">{item.questions.length} questions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <TrendingUp className="h-4 w-4" />
                        <span>90% probability</span>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubjectClick('natural', item.subject);
                        }}
                      >
                        Practice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Social Science Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
              <BookOpen className="h-5 w-5 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Social Science Stream</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialSubjects.map((item, index) => (
              <div
                key={item.subject}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <Card
                  className="relative bg-white/[0.04] backdrop-blur-xl border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => handleSubjectClick('social', item.subject)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-1">{item.subject}</CardTitle>
                        <CardDescription className="text-white/40">{item.questions.length} questions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <TrendingUp className="h-4 w-4" />
                        <span>90% probability</span>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubjectClick('social', item.subject);
                        }}
                      >
                        Practice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20">
              <Clock className="h-5 w-5 text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-amber-300 font-semibold mb-1">Important Note</h3>
              <p className="text-amber-200/70 text-sm">
                These predictions are based on analysis of previous exam patterns and should be used as a study guide. Always study the complete curriculum for best results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showPINLock && (
        <PINLock
          onUnlock={handlePINUnlock}
          onCancel={handlePINCancel}
          subjectName={pendingSubject?.subject}
          isSocialStream={pendingSubject?.stream === 'social'}
          error={pinError}
        />
      )}
    </div>
  );
};

export default memo(PredictedMatricPage);

