## BOX SHADOW
Já utilizamos esse recurso para deixar uma div com sombras. Agora utilizaremos para deixa-la como se fosse uma área mais visível. 

```css
box-shadow: 0 0 1em black;
```


*--------------------------------------------------------------------------------------------------------------------------------------------*

## RETIRADA DE SETAS DE UM INPUT TYPE NUMBER

```CSS


input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
```


*--------------------------------------------------------------------------------------------------------------------------------------------*

## RETIRADA DE BORDA QUANDO UM CAMPO DO TIPO INPUT ESTÁ SELECIONADO

```css
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
```