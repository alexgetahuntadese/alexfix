import { Fragment, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle2, XCircle, ChevronRight, Clock, Target, Brain, Lightbulb, RotateCcw, Eye, Sparkles } from 'lucide-react';
import { MatricExamQuestion } from '@/data/matricExams';
import {
  predicted2018NaturalMathQuestions,
  predicted2018NaturalPhysicsQuestions,
  predicted2018NaturalChemistryQuestions,
  predicted2018NaturalBiologyQuestions,
  predicted2018NaturalEnglishQuestions,
  predicted2018SocialMathQuestions,
  predicted2018SocialEnglishQuestions,
  predicted2018SocialHistoryQuestions,
} from '@/data/predicted2018MatricQuestions';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';

const getPredictedQuestions = (stream: string, subject: string): MatricExamQuestion[] => {
  const streamKey = stream.toLowerCase();
  const subjectLower = subject.toLowerCase();

  if (streamKey === 'natural') {
    switch (subjectLower) {
      case 'mathematics':
        return predicted2018NaturalMathQuestions;
      case 'physics':
        return predicted2018NaturalPhysicsQuestions;
      case 'chemistry':
        return predicted2018NaturalChemistryQuestions;
      case 'biology':
        return predicted2018NaturalBiologyQuestions;
      case 'english':
        return predicted2018NaturalEnglishQuestions;
      default:
        return [];
    }
  } else if (streamKey === 'social') {
    switch (subjectLower) {
      case 'mathematics':
        return predicted2018SocialMathQuestions;
      case 'english':
        return predicted2018SocialEnglishQuestions;
      case 'history':
        return predicted2018SocialHistoryQuestions;
      default:
        return [];
    }
  }
  return [];
};

const PredictedMatricQuizPage = () => {
  const { stream, subject } = useParams<{ stream: string; subject: string }>();
  const navigate = useNavigate();
  const streamKey = stream ?? 'natural';
  const streamLabel = streamKey === 'social' ? 'Social Science' : 'Natural Science';
  const questions = getPredictedQuestions(streamKey, subject ?? '');
  const scoreableQuestions = questions.filter((question) => question.correctAnswer >= 0).length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const answeredCount = answers.filter(a => a !== null).length;
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950 pt-14 px-4 pb-4 overflow-hidden relative flex items-center justify-center">
        <StarField starCount={30} shootingCount={2} />
        <TopBar />
        <div className="text-center text-white relative z-10">
          <p className="text-xl mb-4">No predicted questions available for {subject} ({streamLabel})</p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate('/predicted-matric')}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion: MatricExamQuestion = questions[currentIndex];

  const renderRichText = (text: string, keyPrefix: string) => {
    const parts = text.split(/(\[Image:\s*[^\]]+\])/g).filter(Boolean);

    return parts.map((part, index) => {
      const match = part.match(/^\[Image:\s*([^\]]+)\]$/);
      if (!match) {
        return (
          <span key={`${keyPrefix}-text-${index}`} className="whitespace-pre-line">
            {part}
          </span>
        );
      }

      const source = match[1].trim();
      if (!/^https?:\/\//i.test(source)) {
        return (
          <span key={`${keyPrefix}-placeholder-${index}`} className="text-white/45 text-sm italic">
            {part}
          </span>
        );
      }

      return (
        <img
          key={`${keyPrefix}-image-${index}`}
          src={source}
          alt="Exam diagram"
          loading="lazy"
          className="w-full max-h-72 object-contain rounded-xl border border-white/10 bg-white p-2"
        />
      );
    });
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    
    if (currentQuestion.correctAnswer >= 0 && index === currentQuestion.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowCorrectAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer(answers[currentIndex - 1]);
      setShowExplanation(answers[currentIndex - 1] !== null);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
    setAnswers(new Array(questions.length).fill(null));
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setSelectedAnswer(answers[index]);
    setShowExplanation(answers[index] !== null);
  };

  const percentage = scoreableQuestions > 0 ? Math.round((score / scoreableQuestions) * 100) : 0;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (finished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950 pt-14 px-4 pb-4 overflow-hidden relative">
        <StarField starCount={40} shootingCount={2} />
        <TopBar />

        <div className="max-w-3xl mx-auto relative z-10 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/predicted-matric')}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <Card className="bg-white/[0.04] backdrop-blur-xl border-white/[0.08]">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
                <p className="text-white/50">{subject} - {streamLabel}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{score}</div>
                  <div className="text-xs text-white/50">Correct</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">{scoreableQuestions - score}</div>
                  <div className="text-xs text-white/50">Incorrect</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-teal-400 mb-1">{percentage}%</div>
                  <div className="text-xs text-white/50">Score</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Progress</span>
                  <span className="text-white font-medium">{answeredCount}/{questions.length} answered</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button
                  onClick={() => navigate('/predicted-matric')}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                >
                  Back to Subjects
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-emerald-400 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-emerald-300 font-semibold mb-1">90% Probability Questions</h3>
                <p className="text-emerald-200/70 text-sm">
                  These questions have a 90% probability of appearing in the next matric exam. Review your answers and focus on areas where you need improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950 pt-14 px-4 pb-4 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />

      <div className="max-w-3xl mx-auto relative z-10 mt-8">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/predicted-matric')}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
              <Sparkles className="h-3 w-3 mr-1" />
              90% Predicted
            </Badge>
            <Badge variant="outline" className="border-white/20 text-white/60">
              {currentIndex + 1} / {questions.length}
            </Badge>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-white/50">Progress</span>
            <span className="text-white font-medium">{answeredCount} answered</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="bg-white/[0.04] backdrop-blur-xl border-white/[0.08] mb-6">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                  <Brain className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Question {currentIndex + 1}</h3>
                  <p className="text-white/50 text-sm">{subject} - {streamLabel}</p>
                </div>
              </div>
              <div className="text-white text-lg leading-relaxed">
                {renderRichText(currentQuestion.question, 'question')}
              </div>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = showExplanation || showCorrectAnswer;

                let variant: 'default' | 'correct' | 'incorrect' = 'default';
                if (showResult) {
                  if (isCorrect) variant = 'correct';
                  else if (isSelected && !isCorrect) variant = 'incorrect';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                      variant === 'correct'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : variant === 'incorrect'
                        ? 'bg-red-500/20 border-red-500 text-red-300'
                        : isSelected
                        ? 'bg-white/10 border-white/20 text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        variant === 'correct'
                          ? 'border-emerald-500 bg-emerald-500 text-white'
                          : variant === 'incorrect'
                          ? 'border-red-500 bg-red-500 text-white'
                          : isSelected
                          ? 'border-white/40 bg-white/20 text-white'
                          : 'border-white/20'
                      }`}>
                        {variant === 'correct' && <CheckCircle2 className="h-4 w-4" />}
                        {variant === 'incorrect' && <XCircle className="h-4 w-4" />}
                      </div>
                      <span className="flex-1">{renderRichText(option, `option-${index}`)}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && currentQuestion.explanation && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-emerald-300 font-semibold mb-2">Explanation</h4>
                    <p className="text-emerald-200/80 text-sm leading-relaxed">
                      {renderRichText(currentQuestion.explanation, 'explanation')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="outline"
            className="flex-1 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
          >
            Previous
          </Button>
          {selectedAnswer !== null ? (
            <Button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
            >
              {currentIndex + 1 === questions.length ? 'Finish' : 'Next'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={() => setShowCorrectAnswer(true)}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              <Eye className="h-4 w-4 mr-2" />
              Show Answer
            </Button>
          )}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-emerald-400 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-emerald-300 font-semibold mb-1">90% Probability</h3>
              <p className="text-emerald-200/70 text-sm">
                This question has a 90% probability of appearing in the next matric exam based on analysis of previous years' patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictedMatricQuizPage;
