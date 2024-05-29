# App Router で使われるレンダリング方法

## CSR

先頭に`"use client"`つける。
また、`useEffect, useState`使ったり

```ruby
"use client";

import React, { useEffect, useState } from "react";

type Product = {
  id: string;
  title: string;
};

const CsrPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>Built with CSR</h3>
      <br />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id}: {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CsrPage;

```

## SSR

`cache: "no-store",`が重要

```ruby
import React from "react";

type Product = {
  id: string;
  title: string;
};

const SsrPage = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <>
      <h3>Built with SSR</h3>
      <br />
      <ul>
        {data.products.map((product: Product) => (
          <li key={product.id}>
            {product.id}: {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SsrPage;

```

## SSG

`{ cache: "force-cache" }`を指定している（デフォルトで設定されているオプションの為、省略可）

```
import React from "react";

type Product = {
  id: string;
  title: string;
};

const SsgPage = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <>
      <h3>Built with SSG</h3>
      <br />
      <ul>
        {data.products.map((product: Product) => (
          <li key={product.id}>
            {product.id}: {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SsgPage;

```

## ISR

```ruby
import React from "react";

type Product = {
  id: string;
  title: string;
};

const IsrPage = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  return (
    <>
      <h3>Built with ISR</h3>
      <br />
      <ul>
        {data.products.map((product: Product) => (
          <li key={product.id}>
            {product.id}: {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IsrPage;

```

## まとめ

- { cache: "force-cache" } を指定している、または何も指定されてない 👉 SSG
- { cache: "no-store" } を指定している 👉 SSR
- { next: { revalidate: 10 } }（例）を指定している 👉 ISR
