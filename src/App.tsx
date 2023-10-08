import './App.css'

function App() {

  return (
    <>
      <div className="hero min-h-screen bg-base-200 bg-neutral-focus">
        <div className="hero-content flex-col lg:flex-row">
          <img src="src\assets\bucketMascot.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-accent">Bucket Map</h1>
            <p className="py-6 text-accent">Scratch items off your bucket list with every trip!</p>
            <a href="https://www.w3schools.com" role="button" className="btn btn-accent text-black">BEGIN</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
