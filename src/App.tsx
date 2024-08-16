


import './App.css'

function App() {

  const appUrl = import.meta.env.VITE_APP_URL;

  const openApp = () => {
    
    window.open(
      appUrl,
      'AppPopup',
      'width=600,height=500,left=100,top=100,menubar=no,toolbar=no,status=no,scrollbars=no,resizable=no'
    );
  };

    
  return (
    <>
     <h1>Map Sticker</h1>
     <div>
    </div>
    
    <button
      onClick={openApp}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Open App
    </button>


    </>
  )
}

export default App
