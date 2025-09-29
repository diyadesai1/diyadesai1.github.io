export function Header() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Diya Desai</h1>
        <nav className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
