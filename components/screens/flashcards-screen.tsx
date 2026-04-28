import Flashcard from '../ui/Flashcard'
import Card from '../ui/Card'
import ShinyButton from '../ui/shiny-button'

export default function FlashcardsScreen(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Flashcards</h1>

      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Flashcard front={<div className="text-xl">Was ist OOP?</div>} back={<div>Objektorientierte Programmierung</div>} />
          <Flashcard front={<div className="text-xl">HTTP Status 200 bedeutet?</div>} back={<div>OK - Anfrage erfolgreich</div>} />
        </div>
      </Card>

      <div className="mt-6">
        <ShinyButton variant="primary">Neue Karte hinzufügen</ShinyButton>
      </div>
    </div>
  )
}
