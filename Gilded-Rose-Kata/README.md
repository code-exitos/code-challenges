# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

## Gilded Rose Refactoring Kata
Hola y bienvenidos al equipo de Gilded Rose. Como sabes, somos una pequeña posada con una ubicación privilegiada en una ciudad prominente dirigida por un amable posadero llamado Allison. También compramos y vendemos solo los mejores productos. Lamentablemente, nuestros bienes se degradan constantemente en calidad a medida que se acercan a su fecha de venta. Tenemos un sistema que actualiza nuestro inventario para nosotros. Era desarrollado por un tipo sin sentido del humor llamado Leeroy, que se mudó a un nuevo lugar para seguir nuevas aventuras. Tu tarea es agregar una nueva característica a nuestro sistema para que podamos comenzar a vender una nueva categoría de artículos. Primero una introducción a nuestro sistema:

- Todos los artículos tienen un valor SellIn que indica la cantidad de días que tenemos para vender el artículo
- Todos los artículos tienen un valor de Quality que indica lo valioso que es el artículo
- Al final de cada día, nuestro sistema reduce ambos valores para cada artículo

Bastante simple, ¿verdad? Bueno, aquí es donde se pone interesante:

- Una vez que la fecha de caducidad ha pasado, la Quality se degrada el doble de rápido
- La Quality de un artículo nunca es negativa
- “Agied Brie” en realidad aumenta en calidad cuanto más viejo se hace
- La calidad de un artículo nunca supera los 50
- “Sulfuras”, siendo un artículo legendario, nunca tiene que ser vendido o disminuye en calidad
- “Los Backstages passes”, como el queso “Agied Brie”, aumentan la calidad a medida que se acerca la fecha de venga, aumenta en 2 cuando hay 10 días o menos y en 3 cuando hay 5 días o menos, pero la calidad cae a 0 después del concierto

Recientemente hemos firmado un acuerdo con un mago que actua como proveedor de artículos conjurados. Esto requiere un actualizar a nuestro sistema:

Los elementos “Conjured” se degradan en Calidad dos veces más rápido que los elementos normales
Siéntase libre de hacer cualquier cambio en el método `UpdateQuality` y agregar cualquier nuevo código siempre y cuando todo siga funcionando correctamente. Sin embargo, no puede alterar la clase Item o la propiedad Items ya que pertenecen al duende en la esquina, quien te ira y te disparará ya que no cree en la propiedad del código compartido.

Solo para aclarar, un artículo nunca puede tener una calidad por encima de 50, sin embargo, “Sulfuras” es un elemento legendario y como tal su calidad es 80 y nunca se altera.
