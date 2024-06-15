import type { FormEvent } from 'react';

import styles from './AuthPage.module.scss';

export default function AuthPage() {
	const handleSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		alert('please provide a valid input');
	};

	return (
		<main className={styles.main}>
			<div className=""></div>
			<div className={styles.side}>
				<form className="" onSubmit={handleSubmitEvent}>
					<div className="">
						<label className="">
							<span className="">Логин</span>
							<input className="" name="login" type="text" />
						</label>
					</div>
					<div className="">
						<label className="">
							<span className="">Пароль</span>
							<input className="" name="password" type="password" />
						</label>
					</div>
					<div className="">
						<label className="">
							<input className="" name="rememberMe" type="checkbox" />
							<span className="">Запомнить меня</span>
						</label>
					</div>
					<div className="">
						<button className="">Войти</button>
					</div>
				</form>
			</div>
		</main>
	);
}
