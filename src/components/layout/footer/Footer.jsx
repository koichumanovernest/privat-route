import scss from "./Footer.module.scss";
const Footer = () => {
	return (
		<footer className="container">
			<div className={scss.container3}>
				<div>
					<span>
						Meta Информация Блог Вакансии Помощь API Конфиденциальность Условия
						Места Instagram <br />	 Lite Threads 
						Загрузка контактов и лица, не являющиеся пользователями Meta
						Verified
					</span>
				</div>
				<div>
					<p>© 2024 Instagram from Meta</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
