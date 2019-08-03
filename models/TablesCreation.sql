CREATE TABLE IF NOT EXISTS users (
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    username varchar(255),
    password varchar(255),
    email varchar(255),
    profile_pic varchar(255),
    profile_info varchar(255),
    creation_date timestamp,
    updated_date timestamp,
    
    PRIMARY KEY(id)
    );
 
CREATE TABLE IF NOT EXISTS moments (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255),
	country varchar(255),
	state varchar(255),
	city varchar(255),
	category varchar(255),
	description varchar(255),
	creation_date timestamp,
    updated_date timestamp,
	
	 # No tengo ni idea de que es todo esto, pero lo añadi tambien por si acaso.
	item_lodgin varchar(255),
	item_leisure varchar(255),
	item_food varchar(255),
	item_lodging_name varchar(255),
	item_leisure_name varchar(255),
	item_food_name varchar(255),
	item_lodging_tags varchar(255),
	item_leisure_tags varchar(255),
	item_food_tags varchar(255),
	# Yo creo que si es por el tema de tags y tal, hacer una tabla intermedia de momentsID + tagsID

	PRIMARY KEY(id)
);

# Mi suposicion desde la ignoracia

CREATE TABLE IF NOT EXISTS tags (
	id INT NOT NULL AUTO_INCREMENT,
	tag_name varchar(255),
	creation_date timestamp,
    updated_date timestamp,
    
    PRIMARY KEY (id)
);

# Y las tablas intermedias

CREATE TABLE IF NOT EXISTS tags_to_moments (
	id INT NOT NULL AUTO_INCREMENT,
	tag_id INT NOT NULL,
	moment_id INT NOT NULL,
	
	CONSTRAINT `fk_tag_moment`
		FOREIGN KEY (tag_id) REFERENCES tags (id)
		ON DELETE CASCADE
		ON UPDATE RESTRICT,
	
	CONSTRAINT `fk_moment_tag`
		FOREIGN KEY (moment_id) REFERENCES moments (id)
		ON DELETE CASCADE
		ON UPDATE RESTRICT,
	
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tags_to_users (
	id INT NOT NULL AUTO_INCREMENT,
	tag_id INT NOT NULL,
	user_id INT NOT NULL,
	
	CONSTRAINT `fk_tag_user`
		FOREIGN KEY (user_id) REFERENCES users (id)
		ON DELETE CASCADE
		ON UPDATE RESTRICT,
	
	CONSTRAINT `fk_tag_user`
		FOREIGN KEY (tag_id) REFERENCES tags (id)
		ON DELETE CASCADE
		ON UPDATE RESTRICT,
	
	PRIMARY KEY (id)
);
