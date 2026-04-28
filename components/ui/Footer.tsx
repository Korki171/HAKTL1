export default function Footer(){
  return (
    <footer className="w-full border-t border-white/5 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-400 flex justify-between">
        <div>© {new Date().getFullYear()} HAKTL</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Impressum</a>
          <a href="#" className="hover:text-white">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}
