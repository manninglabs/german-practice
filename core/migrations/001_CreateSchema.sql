CREATE TABLE exercises (
  id bigserial NOT NULL PRIMARY KEY,
  title character varying(255) NOT NULL DEFAULT '',
  topic character varying(255) NOT NULL DEFAULT '',
  inserted_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);

CREATE TABLE questions (
  id bigserial NOT NULL PRIMARY KEY,
  exercise_id bigserial REFERENCES exercises (id) ON DELETE CASCADE,
  text text NOT NULL DEFAULT '',
  answer character varying(255) NOT NULL DEFAULT '',
  inserted_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);
