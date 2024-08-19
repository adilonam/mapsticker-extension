


import './App.css'

function App() {

  const appUrl = import.meta.env.VITE_APP_URL;
  const size = 100

  const openApp = () => {
    
    window.open(
      appUrl,
      'AppPopup',
      'width=700,height=600,left=100,top=100,menubar=no,toolbar=no,status=no,scrollbars=no,resizable=no'
    );
  };

    
  return (
    <>
     <h1>Map Sticker</h1>
     <div>

     <img
      src={"/stickers/1.png"}
      draggable="true"
      style={{ cursor: 'grab' }}
      width={size}
    />
      <img
      src={"/stickers/2.png"}
      draggable="true"
      style={{ cursor: 'grab' }}
      width={size}
    />
    <img
      src={"/stickers/3.png"}
      draggable="true"
      style={{ cursor: 'grab' }}
      width={size}
    />
     <img
      src={"/stickers/4.png"}
      draggable="true"
      style={{ cursor: 'grab' }}
      width={size}
    />
      <img
      src={"/stickers/5.png"}
      draggable="true"
      style={{ cursor: 'grab' }}
      width={size}
    />
    <img
      src={"/stickers/6.png"}
      draggable="true"
      style={{ cursor: 'grab' }}
      width={size}
    />
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
