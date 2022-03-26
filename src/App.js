
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import Products from './Products/Products'
import QuestionPart from './QuestionParts/QuestionPart'

function App() {
  return (
    <div className="width">
      <Header />
      <Products />
      <QuestionPart></QuestionPart>
    </div>
  )
}

export default App
