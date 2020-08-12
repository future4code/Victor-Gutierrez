### Exercicio 1

a) A resposta bruta, da mesma forma que recebemos do MySQL

b)

```js
async function getActorBytitle(actor_title: string) {
  const res = await connection.raw(`
      SELECT * FROM Actor WHERE actor_title = '${actor_title}'
    `);
  console.log(res[0]);
  return res[0];
}
```

c)

```js
async function countActors(gender: string): Promise<any> {
  const res = await connection.raw(`
    SELECT COUNT(*), gender
    FROM Actor
    WHERE gender = '${gender}'
`);
  console.log(res[0]);
  return res[0];
}
```

---

### Exercicio 2

a)

```js
async function updateSalary(id: string, salary: number) {
  await connection('Actor').where({ id }).update({ salary });
}
```

b)

```js
async function deleteActor(id: string) {
  await connection('Actor').where({ id }).delete();
}
```

c)

```js
async function averageSalary(gender: string) {
  const res = await connection('Actor')
    .where({ gender })
    .select('gender')
    .avg('salary as average wage');
  console.log(res);
  return res;
}
```

---

### Exercicio 3

a) Ele está acessando os route params enviados na requisição
b) Enviam uma resposta em caso de sucesso e outra em caso de erro
c)

```js
app.get('/actor', async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender);
    res.status(200).send(count);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

---

### Exercicio 4

a)

```js
app.post('/actor', async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

b)

```js
app.delete('/actor/:id', async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

---

### Exercicio 5

a)

```js
async function createMovie(
  id: string,
  title: string,
  synopsis: string,
  premiere_date: Date,
  playing_limit_date: Date
) {
  await connection('movie').insert({
    id,
    title,
    synopsis,
    premiere_date,
    playing_limit_date,
  });
}
```

```js
app.post('/movie', async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.premiere_date,
      req.body.playing_limit_date
    );
    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

---

### Exercicio 6

a)

```js
async function getMovies() {
  const res = await connection('movie').limit(15);
  return res;
}
```

```js
app.get('/movie', async (req: Request, res: Response) => {
  try {
    const movies = await getMovies();
    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

---

### Exercicio 7

```js
async function searchMovies(query: any) {
  const res = await connection('movie')
    .where('title', 'LIKE', `%${query}%`)
    .orWhere('synopsis', 'LIKE', `%${query}%`)
    .orderBy('premiere_date', 'asc');
  return res;
}
```

```js
app.get('/movie/search', async (req: Request, res: Response) => {
  try {
    const movies = await searchMovies(req.query.query);
    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
