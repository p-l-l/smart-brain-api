BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) values ('Jessie', 'jessie@gmail.com', 5, '2018-01-01');
INSERT INTO login (hash, email) values ('$2a$10$rtOtnIcNPE5qRXNz4KKcCOEXchPalpGfCsAnQhzpB5f.je0a6SsMO', 'jessie@gmail.com');

COMMIT;