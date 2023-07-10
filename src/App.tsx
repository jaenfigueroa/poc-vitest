import Accordion from './components/Accordion'

function App() {

  return (
    <main className='app'>
      <Accordion title='El gato con botas'>
        <h3>Descripcion breve</h3>
        <p>Contenido completo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugiat?</p>
      </Accordion>
      <Accordion title='La caperucita'>
        <h3>Descripcion breve</h3>
        <p>Contenido completo Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat nostrum quaerat dolore voluptas quam.</p>
      </Accordion>
      <Accordion title='Los 3 cerditos'>
        <h3>Descripcion breve</h3>
        <p>Contenido completo Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Accordion>
    </main>
  )
}

export default App
