CREATE TABLE register(
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(150) NOT NULL,
	user_email VARCHAR(50) NOT NULL UNIQUE,
	user_password VARCHAR(250) NOT NULL,
	user_mobile NUMERIC NOT NULL
)
