import { BsBookmarkCheck, BsCheck, BsGear, BsPencilSquare } from 'react-icons/bs'

interface CategorySelectorProps { 
  onSelectedCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({onSelectedCategory}) => {
  const categorys = [
    { nombre: 'PORHACER', icono: <BsCheck></BsCheck>},
    { nombre: 'ENPRODUCCION', icono: <BsGear></BsGear>},
    { nombre: 'PORTESTEAR', icono: <BsPencilSquare></BsPencilSquare>},
    { nombre: 'COMPLETADA', icono: <BsBookmarkCheck></BsBookmarkCheck>},

  ];
  
  return (
    
    <section className='container mt-3' id='selector-categorias'>
      <p className='fs-3'> Seleccione una categoria </p>
      <div className='row gap-4'>
        {categorys.map((category,index)=> (
          <div className='col d-flex justify-content-center p-0' key={index}>
              <button onClick={() => onSelectedCategory(category.nombre)}
              className='border border-1 border-black d-flex gap-1 align-items-center rounded p-1 text-decoration-none'
              style={{cursor: 'pointer'}}
              > {category.icono} {category.nombre} </button>
          </div>
        ))}
      </div>
    </section>

  )
}

export default CategorySelector