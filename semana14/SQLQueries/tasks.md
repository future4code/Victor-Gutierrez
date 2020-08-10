## Exercício 1

a)

1. VARCHAR: <b>Trata-se de um tipo de dados de caractere</b> de tamanho variável, o argumento da função é o máximo de caracteres permitidos expresso em <i>bytes</i><br>

2. PRIMARY KEY: <b> Trata-se de um <i>constraint</i>,</b> ou seja, é utilizado para especificar regras para os dados na tabela. O PRIMARY KEY é um parâmetro único por tabela e geralmente é atribuído como regra para um identificador. Deve ser único e não nulo.<br>

3. FLOAT: <b>Trata-se de um tipo de dados de caractere</b> utilizado para armazenar números decimais<br>

4. DATE: <b>Trata-se de um tipo de dados de caractere</b> utilizado para armazenar datas

Código usado:

```SQL
CREATE TABLE IF NOT EXISTS Actor (
id VARCHAR(255) PRIMARY KEY,
actor_name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
)
```

b) Ao usar `SHOW DATABASES` recebi a lista com as schemas e ao usar `SHOW TABLE` recebi as tables existentes no ambiente

c) `DESCRIBE` retorna a estrutura da table descrita após o comando

## Exercício 2

a)

```SQL
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 400000, "1963/08/23", "female")`
```

b) `Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'` : PRIMARY KEY devem ser únicas por tabela <br>

c)

```SQL
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

d)

```SQL
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "004",
  "Victor Gutierrez",
  400000,
  "1949-04-18",
  "male"
);
```

e)

```SQL
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  "719333.33",
  "1979-03-26",
  "female"
);
```

f)

```SQL
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "006",
  "Roberta Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

## Exercício 3

a)

```SQL
SELECT id, actor_name FROM Actor WHERE gender="female"
```

b)

```SQL
SELECT actor_name, salary FROM Actor WHERE actor_name="Tony Ramos"
```

c) Resultado vazio pois não existem valores com esse critério

d)

```SQL
SELECT id, actor_name, salary FROM Actor WHERE salary<500000
```

e) Não retornou erros.

```SQL
SELECT id, actor_name from Actor WHERE id = "002"
```

## Exercício 4

a) "Selecione todas as colunas da tabela 'Actor' onde os nomes comecem com A ou com J e o salário seja menor que 300 mil"

b)

```SQL
SELECT * FROM Actor WHERE actor_name NOT LIKE "%A" AND actor_name LIKE "%G%" OR "%g%"
```

C)

```SQL
SELECT * FROM Actor WHERE actor_name LIKE "%G%" OR "%g%" OR "%A%" OR "%G%" AND salary BETWEEN 350000 AND 900000
```

## Exercicio 5

a)

```SQL
CREATE TABLE IF NOT EXISTS Movies (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
premiere_date DATE NOT NULL,
rating INT NOT NULL CHECK(rating BETWEEN 0 AND 10),
PRIMARY KEY (id)
)
```

b)

```SQL
INSERT INTO Movies (title, synopsis, premiere_date, rating)
VALUES("Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006/01/06", 7)
```

c)

```SQL
NSERT INTO Movies (title, synopsis, premiere_date, rating)
VALUES("Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2006/12/27", 10)
)
```

d)

```SQL
INSERT INTO Movies (title, synopsis, premiere_date, rating)
VALUES("Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", 8)
```

e)

```SQL
INSERT INTO Movies (title, synopsis, premiere_date, rating)
VALUES("Central do Brasil", "Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, que ditam o que querem contar às suas famílias. Ela embolsa o dinheiro sem sequer postar as cartas. Um dia, Josué, o filho de nove anos de idade de uma de suas clientes, acaba sozinho quando a mãe é morta em um acidente de ônibus. Ela reluta em cuidar do menino, mas se junta a ele em uma viagem pelo interior do Nordeste em busca do pai de Josué, que ele nunca conheceu.", "1998/04/03", 10)
```

## EXERCICIO 6

a)

```SQL
SELECT id, title, rating FROM Movies WHERE id=1
```

b)

```SQL
SELECT * FROM Movies WHERE title="Dona Flor e Seus Dois Maridos"
```

c)

```SQL
SELECT * FROM Movies WHERE rating>7
```

## EXERCICIO 7

a)

```SQL
SELECT * FROM Movies WHERE title LIKE "%vida%"

```

b)

```SQL
SELECT * FROM Movies WHERE title OR synopsis LIKE "%vida%"
```

c)

```SQL
SELECT * FROM Movies WHERE premiere_date < CURDATE()
```

d)

```SQL
SELECT * FROM MOVIE
WHERE release_date < CURDATE() AND
      (title LIKE "%vida%" OR
      synopsis LIKE "%vida%");

```
