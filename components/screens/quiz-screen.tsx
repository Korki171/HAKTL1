import QuizEngine, { QuizQuestion } from '../ui/QuizEngine'
import Card from '../ui/Card'

const sample: QuizQuestion[] = [
  { id: 'q1', question: 'Was ist 2 + 2?', options: ['3','4','5'], correctIndex: 1 },
  { id: 'q2', question: 'HTML ist eine __', options: ['Programmiersprache','Auszeichnungssprache','Datenbank'], correctIndex: 1 },
]

export default function QuizScreen(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Quiz</h1>
      <Card>
        <QuizEngine questions={sample} />
      </Card>
    </div>
  )
}
