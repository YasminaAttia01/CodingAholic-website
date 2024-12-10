import {Route, BrowserRouter as Router , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home,Contact,Projects,Testimonials,About,Approach} from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            
                <Route 
                path='/*'
                element={
                  <>
                  <Routes>
                    < Route path='/about' element={<About/>}/>
                    <Route path='/projects' element={< Projects/>}/>
                    <Route path='/our-approach' element={<Approach/>}/>
                    <Route path='/testimonials' element={<Testimonials/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                  </Routes>
                  </>}
                  />
                
            
            </Routes>
        </Router>
        
      
    </main>
  )
}

export default App
