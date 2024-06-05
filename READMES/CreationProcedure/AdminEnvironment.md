# Admin 用の環境構築

## インストール

まず `Next.js` のインストールから

```

npx create-next-app@latest admin --typescript --tailwind --eslint

```

次に`Prisma`と`next-auth`の環境構築

```

npm i -D prisma

<!-- v4からは@auth/prisma-adapter -->
npm i @prisma/client @auth/prisma-adapter

```

Prisma のファイルを作ります

```
npx prisma init

```

`[prisma/schema.prisma](/admin/prisma/schema.prisma)`ができます

中身を書いていく

```ruby

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

```

`provider = "postgresql"`は`supabase`を使うので`postgresql`のままです。

環境変数を書いていきます。`.env`を開いて`DATABASE_URL`を入れます。

`DATABASE_URL`は`supabase => Project Settings => Database`を開くと`Connection stringのURI`が DATABASE_URL の中身になります。(パスワードは初期に設定したパスワードを入力)

あとはちゃんとできるか`/admin/app/api/route.ts`で PrismaClint を使い中身を書いたら Postman で`http://localhost:3001/api`でちゃんと GET できるかテストします。
