import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Sidebar({ title, list, toPath }) {
	// Определитель url страницы
	const location = useLocation().pathname;

	// Переключатель выбранной категории
	const [active, setActive] = useState('');
	const handleCategoryClick = (cat) => {
		setActive(cat);
	};

	return (
		<div className="sidebar">
			<Link to={toPath}>
				<div className="sidebar__title">
					<h4
						className={
							location === '/'
								? 'sidebar__title-name'
								: 'sidebar__title-name sidebar__title-name-paged'
						}
					>
						{title}
					</h4>

					<svg
						className={location === '/' ? 'chevron' : 'chevron-disabled'}
						width="20"
						height="27"
						viewBox="0 0 8 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M-4.67459e-06 10.9273L1.07878 12L7.07272 6L1.07272 -5.24537e-07L-3.81308e-06 1.07273L4.92727 6L-4.67459e-06 10.9273Z"
							fill="#BB1FD4"
						/>
					</svg>
				</div>
			</Link>

			<div className="sidebar__types-block">
				{list.map((item, index) => {
					return (
						<Link key={index} to={item.path}>
							<span
								className={active == item.name ? 'active' : ''}
								onClick={() => handleCategoryClick(item.name)}
							>
								{item.name}
							</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
