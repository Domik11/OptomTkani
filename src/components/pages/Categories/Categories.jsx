import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import { categories } from '../../../data/data';
import CategoryCard from '../../CategoryCard/CategoryCard';
import searchIcon from '../../../assets/images/search-icon.png'
import './Categories.scss';

function Categories() {


	return (
		<div className='cat-page'>
			{window.innerWidth < 720 ? showCatHeader() : <Header />}
			<div className="content-wrapper">
				<Sidebar list={[]} title={'Категории'} toPath="/categories" />
				<div className="cat-grid">
					{categories.map((item, index) => {
						return <CategoryCard key={index} title={item.name} image={item.imageUrl} />;
					})}
				</div>
			</div>
			{window.innerWidth < 720 ? null : <Footer />}
		</div>
	);

	function showCatHeader() {
		return (
			<div style={{
                maxWidth: '360px',
                margin: '0 auto 20px',
                padding: '0 20px',
            }}>
                <h1 className='cat-page-title'>Категории</h1>
				<div className="header__search">
					<img className="header__search-icon" src={searchIcon} alt="" />
					<input
						className="header__search-input"
						type="text"
						placeholder="поиск по тканям"
					/>
				</div>
			</div>
		);
	}

	function CategoriesListTaker() {
		
	}
}

export default Categories;
