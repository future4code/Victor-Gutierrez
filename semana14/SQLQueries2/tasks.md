## Exercício 1

a)

```SQL
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
)
```

Adiciona uma coluna "type" com o valor default "NotDirector"

b)

```SQL
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
)
```

Altera a coluna gender para sex VARCHAR(6)

c)

```SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(255)
```

Altera a coluna gender para gender VARCHAR(255) [Altera apenas a quantidade de caracteres]

d)

```SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```

## Exercício 2

a)

```SQL
UPDATE Actor
SET actor_name="Moacyr do Guaraná", birth_date="1969/09/14", gender="male"
WHERE id="003"
```

b)

```SQL
UPDATE Actor
SET actor_name="JULIANA PÃES"
WHERE id="005"

UPDATE Actor
SET actor_name="Juliana Paes"
WHERE id="005"
```

c)

```SQL
UPDATE Actor
SET actor_name="Juliana Paes", birth_date="1991/12/01", salary=1000000
WHERE id="005"
```

d)

```SQL
UPDATE Actor
SET actor_name="Juliana Paes", birth_date="1991/12/01", salary=1000000
WHERE id="101"
```

A query roda sem problemas mas o "Action output" aponta que nenhuma linha foi alterada

## Exercício 3

a)

```SQL
DELETE FROM Actor
WHERE actor_name="Fernanda Montenegro"
```

b)

```SQL
DELETE FROM Actor
WHERE salary>1000000 AND gender="male"
```

## Exercício 4

a)

```SQL
SELECT MAX(salary) FROM Actor
```

b)

```SQL
SELECT MIN(salary) FROM Actor WHERE gender = 'female'
```

C)

```SQL
SELECT COUNT(gender) FROM Actor WHERE gender = "female"
```

d)

```SQL
SELECT SUM(salary) FROM Actor
```

## Exercicio 5

a)

```SQL
SELECT COUNT(*) AS "Quantidade", gender
FROM Actor
GROUP BY gender
```

Conte todos os generos como quantidade da tabela Actor e agrupe por gênero

b)

```SQL
SELECT id, actor_name FROM Actor
ORDER BY actor_name DESC
```

c)

```SQL
SELECT salary, actor_name FROM Actor
ORDER BY salary
```

d)

```SQL
SELECT salary, actor_name FROM Actor
ORDER BY salary DESC
LIMIT 3
```

e)

```SQL
SELECT AVG(salary), gender FROM Actor
GROUP BY gender
```

## EXERCICIO 6

a)

```SQL
ALTER TABLE Movies ADD playing_limit_date DATE
```

b)

```SQL
ALTER TABLE Movies CHANGE rating rating FLOAT  NOT NULL CHECK(rating BETWEEN 0 AND 10)
```

c)

```SQL
SELECT * FROM Movies WHERE rating>7
```

## EXERCICIO 7

a)

```SQL
SELECT * FROM Movies WHERE rating > 7.5 AND playing_limit_date > CURDATE()

```

b)

```SQL
SELECT AVG(rating) FROM Movies
```

c)

```SQL
SELECT COUNT(*) FROM Movies WHERE CURDATE() < playing_limit_date
```

d)

```SQL
SELECT COUNT(*) FROM Movies WHERE CURDATE() < premiere_date

```

e)

```SQL
SELECT MAX(rating) FROM Movies
```

f)

```SQL
SELECT MIN(rating) FROM Movies
```

SELECT \* FROM Movies ORDER BY title

## EXERCICIO 8

a)

```SQL

SELECT * FROM Movies ORDER BY title

```

b)

```SQL
SELECT *
FROM Movies
ORDER BY title DESC
LIMIT 5
```

c)

```SQL
SELECT * FROM Movies
ORDER BY premiere_date DESC
LIMIT 3
```

d)

```SQL
SELECT * FROM Movies
ORDER BY rating DESC
LIMIT 3

```
