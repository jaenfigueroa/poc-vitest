import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  // test('Se deben sumar', () => {
  //   expect(1 + 1).toBe(2)
  // })

  beforeEach(() => { // renderizar el componente antes de cada prueba
    render(
      <Accordion title='Los 3 cerditos'>
        <h3>descripcion breve</h3>
        <p>contenido completo</p>
      </Accordion>
    )
  })

  afterEach(() => {
    cleanup(); // Limpiar el DOM despues de cada prueba
  });

  test('El acordeon debe estar cerrado por defecto', () => {
    expect(screen.queryByText(/descripcion breve/i)).toBeNull()
    expect(screen.queryByText(/contenido completo/i)).toBeNull()
  })

  test('Al hacer click en el boton se debe abrir el acordeon', () => {
    const button = screen.getByText(/abrir/i)
    fireEvent.click(button)

    expect(screen.getByText(/descripcion breve/i)).toBeDefined()
    expect(screen.getByText(/contenido completo/i)).toBeDefined()
  })

  test('Al hacer doble click en el boton se debe cerrar el acordeon', () => {
    fireEvent.click(screen.getByText(/abrir/i))
    fireEvent.click(screen.getByText(/cerrar/i))

    expect(screen.queryByText(/descripcion breve/i)).toBeNull()
    expect(screen.queryByText(/contenido completo/i)).toBeNull()
  })
})