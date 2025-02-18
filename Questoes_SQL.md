# Questões SQL

Para as perguntas a seguir considere as seguintes tabelas:

## Tabela Pessoas
| Codigo | Nome    | Idade | Pais_Origem |
|--------|---------|-------|-------------|
| 01     | Alan    | 30    | Espanha     |
| 02     | Claudia | 25    | Portugal    |
| 03     | John    | 12    | Canadá      |
| 04     | Felipe  | 23    | Brasil      |
| 05     | Pedro   | 17    | Portugal    |
| 06     | Isabela | 27    | Espanha     |
| 07     | Ana     | 22    | Portugal    |
| 08     | Marcos  | 35    | Brasil      |
| 09     | Igor    | 30    | Argentina   |
| 10     | Flávia  | 15    | França      |

---

## Tabela Paises_Visitados

| Codigo_Pessoa | Pais_Visitado |
|---------------|---------------|
| 01            | França        |
| 03            | Espanha       |
| 03            | Portugal      |
| 01            | Polônia       |
| 02            | Brasil        |
| 04            | Marrocos      |
| 05            | Brasil        |
| 07            | Espanha       |
| 09            | Brasil        |
| 09            | Equador       |
| 04            | Turquia       |
| 10            | França        |

---

Com base nas tabelas:

1. Monte uma consulta que retorne o nome e idade das pessoas maiores de idade ordenado pela idade em ordem decrescente;
``` 
    SELECT Nome, Idade 
    FROM Pessoas 
    WHERE Idade>18 
    ORDER BY Idade DESC

```
2. Monte uma consulta que retorne a idade mais alta na tabela;
``` 
    SELECT MAX(Idade) 
    FROM Pessoas

```
3. Atualize o nome de todas as pessoas que são menores de idades adicionando “ ( menor de idade ) “ ao nome dela;
```
    UPDATE Pessoas 
    SET  Nome = Nome + ' ( menor de idade ) ' 
    WHERE Idade < 18

```
4. Monte o comando para remover da tabela todas as pessoas que são do Brasil;
```
    DELETE FROM Pessoas 
    WHERE Pais_Origem = 'Brasil'

```
5. Quais pessoas já visitaram a França? Monte a consulta que retornará o nome delas;
```
    As pessoas que já vizitaram a França são o Alan e a Flavia. Podemos vizualizar isso com a seguinte consulta:

        SELECT Nome 
        FROM Pessoas FULL OUTER JOIN Paises_Visitados 
        ON Pessoas.Codigo = Paises_Visitados.Codigo_Pessoa 
        WHERE Pais_Visitado = 'França'

```
6. Quais são as pessoas que não visitaram nenhum pais? Monte a consulta retornando o nome delas;
```
    As pessoas que não visitaram nenhum pais são a Isabela e o Marcos. Podemos vizualizar isso com a seguinte consulta:

        SELECT Nome 
        FROM Pessoas FULL OUTER JOIN Paises_Visitados 
        ON Pessoas.Codigo = Paises_Visitados.Codigo_Pessoa 
        WHERE Pais_Visitado IS NULL

```


## Observações
Utilize os espaços para escrever os comandos SQL.
