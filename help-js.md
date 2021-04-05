## WHILE
While significa enquanto, se trata de uma estrutura de repetição, assim como em SQL, devemos passar a condição logo no inicio e ao seu término, passar algo que afete a condição inicial.

*Por exemplo:*

```js
let tentativas = 3

while (tentativas > 0) {
    console.log(`Você está na tentativa: ${tentativas}`);

    --tentativas
}
```

`Passei acima então que meu comando deve ser executado apenas enquanto minhas tentativas forem maiores que 0, e ao final do comando, eu DECREMENTO (--) 1 da tentativas, chegando a um ponto onde ela é 0 e não sendo executada no while`

*-------------------------------------------------------------------------------------------------------------------------------------------*

## BREAK
Break é um comando à ser usado no while, que independente da sua condição inicial do bloco, se chegarmos em um determinado ponto e quisermos parar a execução desse while, usamos o break

*Por exemplo:*

```js
let tentativas = 3

while (tentativas > 0) {

    if(tentativas == 2) {
        console.log(`Chegamos no ponto de parada, sua tentativa está na posição: ${tentativas}`);
        break
    }

    console.log(`Você está na tentativa: ${tentativas}`);   
    --tentativas
}
```

`Ou seja, a única coisa que acrescentei foi que, quando o número de tentativas chegasse no número 2, a gente imediatamente parava a execução`

*-------------------------------------------------------------------------------------------------------------------------------------------*

## Math.random()
Número randômico é aquele que sempre que chamarmos, ele será aleatório entre 0 e 1, porém nunca serão exatamente 0 e 1

*Por exemplo:*

```js
console.log(Math.random());
```



*-------------------------------------------------------------------------------------------------------------------------------------------*

## ATRIBUIR VALOR EM H1
Quando queremos inserir um valor dentro de uma TAG HTML, ou seja, diferente de inserir um VALUE em uma INPUT, deveremos mudar apenas um quesito no document.getElementById

*Por exemplo:* 

```js
EM UM INPUT SERIA: 
document.getElementById('result').value = 'TESTE'

EM UMA TAG É: 
document.getElementById('result').innerHTML = 'TESTE'

```
*-------------------------------------------------------------------------------------------------------------------------------------------*

## DAR RELOAD EM PÁGINA

```JS
document.location.reload(true)
```

*-------------------------------------------------------------------------------------------------------------------------------------------*