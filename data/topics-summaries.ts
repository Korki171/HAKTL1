// Thema-Zusammenfassungen für alle 10 Fächer
// Wird später in Supabase migriert

export interface TopicSummary {
  id: string
  subject: string
  topic: string
  summary: string
  keyPoints: string[]
  difficulty: 'Anfänger' | 'Mittel' | 'Fortgeschritten'
  relatedTopics: string[]
}

export const TOPICS_SUMMARIES: TopicSummary[] = [
  // MATHEMATIK
  {
    id: 'mathe_lineare_gleichungen',
    subject: 'Mathematik',
    topic: 'Lineare Gleichungen',
    summary:
      'Eine lineare Gleichung ist eine mathematische Aussage der Form ax + b = c, wobei x die Unbekannte ist. Ziel ist es, x zu isolieren und zu lösen. Dies geschieht durch Äquivalenzumformungen auf beiden Seiten der Gleichung.',
    keyPoints: ['ax + b = c', 'Äquivalenzumformungen', 'Lösungsmenge', 'Probe durchführen'],
    difficulty: 'Anfänger',
    relatedTopics: ['quadratische_gleichungen', 'lineare_funktionen'],
  },
  {
    id: 'mathe_quadratische_gleichungen',
    subject: 'Mathematik',
    topic: 'Quadratische Gleichungen',
    summary:
      'Quadratische Gleichungen haben die Form ax² + bx + c = 0. Lösungsmethoden: Faktorisierung, quadratische Ergänzung oder die Lösungsformel (Diskriminante). Eine quadratische Gleichung hat 0, 1 oder 2 reelle Lösungen.',
    keyPoints: [
      'ax² + bx + c = 0',
      'Diskriminante D = b² - 4ac',
      'Lösungsformel',
      'Vieta\'sche Formeln',
    ],
    difficulty: 'Mittel',
    relatedTopics: ['lineare_gleichungen', 'funktionen'],
  },
  {
    id: 'mathe_differentialrechnung',
    subject: 'Mathematik',
    topic: 'Differentialrechnung',
    summary:
      'Die Differentialrechnung untersucht das Verhalten von Funktionen durch Ableitungen. Die Ableitung beschreibt die Änderungsrate einer Funktion an einem Punkt. Wichtige Regeln: Potenzregel, Produktregel, Kettenregel.',
    keyPoints: ['Ableitung f\'(x)', 'Potenzregel', 'Produktregel', 'Kettenregel', 'Extremstellen'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['funktionen', 'integralrechnung'],
  },
  {
    id: 'mathe_integralrechnung',
    subject: 'Mathematik',
    topic: 'Integralrechnung',
    summary:
      'Die Integralrechnung ist die Umkehrung der Differentialrechnung. Das bestimmte Integral berechnet die Fläche unter einer Kurve. Das unbestimmte Integral ist die Stammfunktion.',
    keyPoints: ['Stammfunktion', 'bestimmtes Integral', 'Hauptsatz der Analysis'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['differentialrechnung', 'funktionen'],
  },
  {
    id: 'mathe_trigonometrie',
    subject: 'Mathematik',
    topic: 'Trigonometrie',
    summary:
      'Trigonometrie beschäftigt sich mit Dreiecken und Winkeln. Grundfunktionen: Sinus, Kosinus, Tangens. Wichtig: Einheitskreis, Winkelbeziehungen, Sinus- und Kosinussatz.',
    keyPoints: ['sin, cos, tan', 'Einheitskreis', 'Sinus- & Kosinussatz', 'Radiant vs. Grad'],
    difficulty: 'Mittel',
    relatedTopics: ['geometrie', 'funktionen'],
  },
  {
    id: 'mathe_vektoren',
    subject: 'Mathematik',
    topic: 'Vektorrechnung',
    summary:
      'Vektoren sind Größen mit Richtung und Betrag. Grundoperationen: Addition, Skalarmultiplikation, Skalarprodukt, Kreuzprodukt. Anwendung in Geometrie und Physik.',
    keyPoints: ['Vektor', 'Addition & Subtraktion', 'Skalarprodukt', 'Kreuzprodukt', 'Betrag'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['geometrie', 'lineare_algebra'],
  },

  // PHYSIK
  {
    id: 'physik_kinematik',
    subject: 'Physik',
    topic: 'Kinematik',
    summary:
      'Kinematik beschreibt die Bewegung von Objekten ohne Kräfte. Wichtige Größen: Ort, Geschwindigkeit, Beschleunigung. Formeln: s = v·t, v = a·t, s = ½at².',
    keyPoints: ['Ort (s)', 'Geschwindigkeit (v)', 'Beschleunigung (a)', 'Freier Fall'],
    difficulty: 'Anfänger',
    relatedTopics: ['dynamik', 'energie'],
  },
  {
    id: 'physik_dynamik',
    subject: 'Physik',
    topic: 'Dynamik & Newtons Gesetze',
    summary:
      'Dynamik untersucht Kräfte und ihre Auswirkungen. Newtons drei Gesetze: 1) Trägheit, 2) F = m·a (Kraft), 3) Aktion-Reaktion. Kraft in Newton (N).',
    keyPoints: ['Newtons 1. Gesetz', 'F = m·a (2. Gesetz)', 'Aktion-Reaktion', 'Gewichtskraft'],
    difficulty: 'Anfänger',
    relatedTopics: ['kinematik', 'energie', 'arbeit'],
  },
  {
    id: 'physik_arbeit_energie',
    subject: 'Physik',
    topic: 'Arbeit & Energie',
    summary:
      'Arbeit W = F·s·cos(α). Energieformen: kinetisch (Eₖ = ½mv²) und potentiell (Ep = mgh). Energieerhaltungssatz: Gesamtenergie bleibt konstant.',
    keyPoints: ['Arbeit (W)', 'kinetische Energie', 'potentielle Energie', 'Energieerhaltung'],
    difficulty: 'Mittel',
    relatedTopics: ['dynamik', 'leistung'],
  },
  {
    id: 'physik_elektrizitaet',
    subject: 'Physik',
    topic: 'Elektrizität',
    summary:
      'Grundkonzepte: Ladung (Q), Stromstärke (I = Q/t), Spannung (U), Widerstand (R). Ohmsches Gesetz: U = I·R. Leistung: P = U·I.',
    keyPoints: ['Ladung (Q)', 'Stromstärke (I)', 'Spannung (U)', 'Ohmsches Gesetz', 'Leistung'],
    difficulty: 'Mittel',
    relatedTopics: ['magnetismus', 'elektromagnetismus'],
  },
  {
    id: 'physik_magnetismus',
    subject: 'Physik',
    topic: 'Magnetismus & Magnetfelder',
    summary:
      'Magnetische Felder entstehen um Magnete und stromführende Leiter. Magnetische Kraft: F = B·I·l. Rechte-Hand-Regel für Feldrichtung.',
    keyPoints: ['Magnetfeld (B)', 'Magnetische Kraft', 'Rechte-Hand-Regel', 'Lorentz-Kraft'],
    difficulty: 'Mittel',
    relatedTopics: ['elektrizitaet', 'elektromagnetismus'],
  },

  // INFORMATIK
  {
    id: 'info_programmiersprachen',
    subject: 'Informatik',
    topic: 'Programmiersprachen',
    summary:
      'Programmiersprachen sind Mittel zur Kommunikation mit Computern. Wichtige Paradigmen: imperativ (C, Java), funktional (Lisp), objektorientiert (OOP). Jede Sprache hat Syntax und Semantik.',
    keyPoints: ['Syntax & Semantik', 'imperative Programmierung', 'OOP', 'Paradigmen'],
    difficulty: 'Anfänger',
    relatedTopics: ['algorithmen', 'datenstrukturen'],
  },
  {
    id: 'info_algorithmen',
    subject: 'Informatik',
    topic: 'Algorithmen & Komplexität',
    summary:
      'Ein Algorithmus ist eine Schritt-für-Schritt Anleitung zur Lösung eines Problems. Zeitkomplexität (Big O): O(1), O(n), O(n²). Wichtige Algorithmen: Sortieren, Suchen.',
    keyPoints: ['Zeitkomplexität (Big O)', 'Sortieralgorithmen', 'Suchalgorithmen', 'Rekursion'],
    difficulty: 'Mittel',
    relatedTopics: ['datenstrukturen', 'programmiersprachen'],
  },
  {
    id: 'info_datenstrukturen',
    subject: 'Informatik',
    topic: 'Datenstrukturen',
    summary:
      'Datenstrukturen organisieren Daten effizient. Wichtige Typen: Array, Liste, Stack, Queue, Baum, Graph, Hash Table. Jede hat Vorteile bei bestimmten Operationen.',
    keyPoints: ['Array', 'Liste', 'Stack & Queue', 'Baum & Graph', 'Hash Table'],
    difficulty: 'Mittel',
    relatedTopics: ['algorithmen', 'datenbanken'],
  },
  {
    id: 'info_datenbanken',
    subject: 'Informatik',
    topic: 'Datenbanken & SQL',
    summary:
      'Datenbanken speichern und verwalten strukturierte Daten. SQL ist die Standard-Abfragesprache. CRUD-Operationen: Create, Read, Update, Delete. Wichtig: Primary Keys, Foreign Keys, Indizes.',
    keyPoints: ['SQL', 'CRUD', 'Primary Keys', 'Normalisierung', 'Queries'],
    difficulty: 'Mittel',
    relatedTopics: ['datenstrukturen', 'web_entwicklung'],
  },
  {
    id: 'info_netzwerke',
    subject: 'Informatik',
    topic: 'Netzwerke & Internet',
    summary:
      'Netzwerke verbinden Computer zur Datenübertragung. OSI-Modell: 7 Schichten. TCP/IP: Transportprotokoll. IP: Internet Protocol, HTTP/HTTPS für Web.',
    keyPoints: ['OSI-Modell', 'TCP/IP', 'IP & Ports', 'DNS', 'HTTP/HTTPS'],
    difficulty: 'Mittel',
    relatedTopics: ['web_entwicklung', 'sicherheit'],
  },

  // ELEKTROTECHNIK
  {
    id: 'etech_gleichstrom',
    subject: 'Elektrotechnik',
    topic: 'Gleichstromtechnik',
    summary:
      'Gleichstrom (DC) fließt in eine Richtung. Grundgesetze: Ohmsches Gesetz (U=IR), Kirchhoffsche Regeln. Schaltungen: Reihen- und Parallelschaltung.',
    keyPoints: ['Ohmsches Gesetz', 'Kirchhoffsche Regeln', 'Reihenschaltung', 'Parallelschaltung'],
    difficulty: 'Anfänger',
    relatedTopics: ['wechselstrom', 'halbleiter'],
  },
  {
    id: 'etech_wechselstrom',
    subject: 'Elektrotechnik',
    topic: 'Wechselstromtechnik',
    summary:
      'Wechselstrom (AC) ändert periodisch Richtung und Größe. Wichtig: Frequenz (f = 50 Hz in Europa), Phasenverschiebung, Impedanz (Z).',
    keyPoints: ['Frequenz', 'Phasenverschiebung', 'Impedanz (Z)', 'Effektivwert', 'Leistungsfaktor'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['gleichstrom', 'halbleiter'],
  },
  {
    id: 'etech_halbleiter',
    subject: 'Elektrotechnik',
    topic: 'Halbleiter & Dioden',
    summary:
      'Halbleiter (Si, Ge) ermöglichen Elektronenfluss unter bestimmten Bedingungen. Diode: lässt Strom in eine Richtung fließen. Transistor: verstärkt Signale.',
    keyPoints: ['p-n-Übergang', 'Diode', 'Transistor', 'LED', 'Halbleiterphysik'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['wechselstrom', 'digitale_technik'],
  },
  {
    id: 'etech_digitale_technik',
    subject: 'Elektrotechnik',
    topic: 'Digitale Technik & Logik',
    summary:
      'Digitale Elektronik nutzt binäre Werte (0, 1). Logikgatter: AND, OR, NOT. Schaltkreise: Kombinatorisch und sequenziell (z.B. Flip-Flops).',
    keyPoints: ['Logikgatter', 'Boolean Algebra', 'Flip-Flops', 'Schaltkreise', 'Binärsystem'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['halbleiter', 'mikrocontroller'],
  },

  // RECHNUNGSWESEN
  {
    id: 'rewe_grundlagen',
    subject: 'Rechnungswesen',
    topic: 'Grundlagen der Buchführung',
    summary:
      'Buchführung erfasst wirtschaftliche Vorgänge systematisch. Grundprinzip: Doppelte Buchführung (Soll/Haben). Belege und Konten sind essenziell.',
    keyPoints: ['Doppelte Buchführung', 'Soll & Haben', 'T-Konten', 'Belege', 'Bilanz'],
    difficulty: 'Anfänger',
    relatedTopics: ['bilanzierung', 'controlling'],
  },
  {
    id: 'rewe_bilanzierung',
    subject: 'Rechnungswesen',
    topic: 'Bilanzierung & Bewertung',
    summary:
      'Die Bilanz zeigt Vermögen und Schulden eines Unternehmens. Bilanzgleichung: Aktiva = Passiva. Bewertung: Anschaffungskosten, Marktwert, Abschreibungen.',
    keyPoints: ['Bilanzgleichung', 'Aktiva & Passiva', 'Bewertungsprinzipien', 'Abschreibungen'],
    difficulty: 'Mittel',
    relatedTopics: ['grundlagen', 'controlling'],
  },
  {
    id: 'rewe_controlling',
    subject: 'Rechnungswesen',
    topic: 'Controlling & Kostenrechnung',
    summary:
      'Controlling nutzt Kostendaten für Entscheidungen. Kostenarten: Material-, Personal-, Gemeinkosten. Kostenrechnung: Voll- und Teilkostenrechnung.',
    keyPoints: ['Kostenarten', 'Vollkostenrechnung', 'Teilkostenrechnung', 'Gewinn- & Verlustrechnung'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['bilanzierung', 'grundlagen'],
  },

  // BETRIEBSWIRTSCHAFT
  {
    id: 'bwl_grundlagen',
    subject: 'Betriebswirtschaft',
    topic: 'Grundlagen der Betriebswirtschaft',
    summary:
      'BWL untersucht wirtschaftliches Handeln in Betrieben. Fokus: Ressourceneinsatz, Effizienz, Gewinnerzielung. Funktionen: Produktion, Marketing, Finanzen, Personal.',
    keyPoints: ['Betrieb vs. Unternehmen', 'Funktionen', 'Wirtschaftlichkeit', 'Rentabilität'],
    difficulty: 'Anfänger',
    relatedTopics: ['management', 'marketing'],
  },
  {
    id: 'bwl_management',
    subject: 'Betriebswirtschaft',
    topic: 'Management & Organisation',
    summary:
      'Management plant, organisiert und kontrolliert Betriebsmittel. Führungsstile: autoritär, kooperativ, delegativ. Organisationsstrukturen: Linie, Matrix, Projekt.',
    keyPoints: ['Managementfunktionen', 'Führungsstile', 'Organisationsstrukturen', 'Delegation'],
    difficulty: 'Mittel',
    relatedTopics: ['grundlagen', 'personal'],
  },
  {
    id: 'bwl_marketing',
    subject: 'Betriebswirtschaft',
    topic: 'Marketing & Vertrieb',
    summary:
      'Marketing schafft Kundenbeziehungen und Verkäufe. 4 P\'s: Produkt, Preis, Platz, Promotion. Marktforschung: Kundenwünsche erkennen.',
    keyPoints: ['4 P\'s', 'Marktforschung', 'Kundensegmentierung', 'Marktpositionierung'],
    difficulty: 'Mittel',
    relatedTopics: ['grundlagen', 'volkswirtschaft'],
  },

  // VOLKSWIRTSCHAFT
  {
    id: 'vwl_grundlagen',
    subject: 'Volkswirtschaft',
    topic: 'Grundlagen der VWL',
    summary:
      'VWL untersucht gesamtwirtschaftliche Prozesse. Grundfrage: Wie nutzen Gesellschaften begrenzte Ressourcen? Knappheit, Opportunitätskosten, Wirtschaftssysteme.',
    keyPoints: ['Knappheit', 'Opportunitätskosten', 'Wirtschaftssysteme', 'Märkte'],
    difficulty: 'Anfänger',
    relatedTopics: ['mikro_oekonomie', 'makro_oekonomie'],
  },
  {
    id: 'vwl_mikro',
    subject: 'Volkswirtschaft',
    topic: 'Mikroökonomie',
    summary:
      'Mikroökonomie untersucht einzelne Märkte und Akteure. Angebot & Nachfrage: bestimmen Preis. Elastizität: Reaktion auf Preisänderungen.',
    keyPoints: ['Angebot & Nachfrage', 'Gleichgewichtspreis', 'Elastizität', 'Konsumentenrente'],
    difficulty: 'Mittel',
    relatedTopics: ['grundlagen', 'makro_oekonomie'],
  },
  {
    id: 'vwl_makro',
    subject: 'Volkswirtschaft',
    topic: 'Makroökonomie',
    summary:
      'Makroökonomie untersucht gesamte Volkswirtschaften. Wichtige Größen: BIP, Inflation, Arbeitslosigkeit. Geldpolitik und Fiskalpolitik beeinflussen Wirtschaft.',
    keyPoints: ['BIP', 'Inflation', 'Arbeitslosigkeit', 'Geldpolitik', 'Konjunktur'],
    difficulty: 'Fortgeschritten',
    relatedTopics: ['mikro_oekonomie', 'grundlagen'],
  },

  // DEUTSCH
  {
    id: 'deutsch_grammatik',
    subject: 'Deutsch',
    topic: 'Deutsche Grammatik',
    summary:
      'Grammatik ist das Regelwerk der Sprache. Teile: Wortarten, Satzglieder, Tempus. Wichtig: Nominativ, Akkusativ, Dativ, Genitiv (4 Fälle).',
    keyPoints: ['Wortarten', '4 Fälle', 'Tempus', 'Satzgliedanalyse', 'Syntaxregeln'],
    difficulty: 'Anfänger',
    relatedTopics: ['rechtschreibung', 'literatur'],
  },
  {
    id: 'deutsch_rechtschreibung',
    subject: 'Deutsch',
    topic: 'Rechtschreibung & Zeichensetzung',
    summary:
      'Orthographie regelt Schreibweise. Wichtig: Groß-/Kleinschreibung, Trennregeln, Kommas bei Nebensätzen. Neue Rechtschreibung ab 1996.',
    keyPoints: ['Groß-/Kleinschreibung', 'Konsonantenverdopplung', 'Kommaregeln', 'Trennregeln'],
    difficulty: 'Anfänger',
    relatedTopics: ['grammatik', 'schreiben'],
  },
  {
    id: 'deutsch_literatur',
    subject: 'Deutsch',
    topic: 'Literaturgeschichte & Epochen',
    summary:
      'Deutsche Literatur durchläuft Epochen: Mittelalter, Renaissance, Barock, Aufklärung, Romantik, Realismus, Moderne. Jede hat charakteristische Autoren und Werke.',
    keyPoints: ['Literaturepochenacht', 'Klassik & Romantik', 'Expressionismus', 'Moderne'],
    difficulty: 'Mittel',
    relatedTopics: ['grammatik', 'interpretation'],
  },

  // ENGLISCH
  {
    id: 'englisch_grammar',
    subject: 'Englisch',
    topic: 'English Grammar',
    summary:
      'English grammar: parts of speech, tenses, sentence structures. Present Simple, Past Simple, Present Perfect. Conditional sentences: If...then.',
    keyPoints: ['Tenses', 'Articles', 'Prepositions', 'Conditional Sentences', 'Passive Voice'],
    difficulty: 'Anfänger',
    relatedTopics: ['vocabulary', 'listening'],
  },
  {
    id: 'englisch_vocabulary',
    subject: 'Englisch',
    topic: 'English Vocabulary',
    summary:
      'Vocabulary building for academic and daily use. Word families, synonyms, antonyms. Important: Phrasal verbs, idioms, collocations.',
    keyPoints: ['Word Families', 'Phrasal Verbs', 'Idioms', 'Collocations', 'Academic Words'],
    difficulty: 'Anfänger',
    relatedTopics: ['grammar', 'writing'],
  },
  {
    id: 'englisch_culture',
    subject: 'Englisch',
    topic: 'English-Speaking Cultures',
    summary:
      'Understanding cultures of English-speaking countries: UK, USA, Australia. History, traditions, current events important for language learning.',
    keyPoints: ['British Culture', 'American Culture', 'Literature', 'History', 'Customs'],
    difficulty: 'Mittel',
    relatedTopics: ['grammar', 'vocabulary'],
  },
]

export function getTopicsBySubject(subject: string): TopicSummary[] {
  return TOPICS_SUMMARIES.filter((topic) => topic.subject === subject)
}

export function getTopicById(id: string): TopicSummary | undefined {
  return TOPICS_SUMMARIES.find((topic) => topic.id === id)
}

export function getAllSubjects(): string[] {
  const subjects = new Set(TOPICS_SUMMARIES.map((topic) => topic.subject))
  return Array.from(subjects)
}
