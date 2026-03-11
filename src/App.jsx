import { useState } from 'react'
import Animation from './Components/Animation.jsx';
import Envelope from './Components/Envelope.jsx';
import Letter from './Components/Letter.jsx';
import Welcome from './Components/Welcome.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      {currentPage === 1 && (
        <Welcome onNext={handleNextPage} />
      )}
      {currentPage === 2 && (
        <Animation onNext={handleNextPage} />
      )}

      {currentPage === 3 && (
        <Envelope onNext={handleNextPage} />
      )}

      {currentPage === 4 && (
        <Letter />
      )}

      {/* We will add Page 4 here later! */}
    </div>
  )
}

export default App