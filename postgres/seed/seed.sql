BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined, age, pet) values ('a', 'a@a.com', 5, '2018-01-01', 18, 'cat');
INSERT INTO login (hash, email) values ('$2a$10$mgWZCAtUQs4KXxqRTmuL9ueDPHHUSgz7sYi1eehZ3uJkXPZEjmK86', 'a@a.com');

COMMIT;