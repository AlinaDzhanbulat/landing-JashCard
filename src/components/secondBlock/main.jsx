import './main.css'
import Main from '../../image/mainImage.png'

const MainBlock = () => {
    return (
        <main className="mainCont">
            <img src={Main} alt=""></img>
            <div className='mainDiv'>
                    <h3 className='mainh3'>Имеется спорная точка зрения, гласящая примерно следующее.</h3>
                    <hr className='mainhr'></hr>
                    <p className='mainp'>В своём стремлении повысить качество жизни, они забывают, что экономическая повестка сегодняшнего дня обеспечивает.</p>
                </div>
        </main>
    )
}

export default MainBlock;