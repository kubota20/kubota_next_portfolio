# Portforlio

クボタのポートフォリオにようこそ！

こちらではポートフォリオの紹介とサイトの作成手順などを書いていきます。

## 作成手順

### 1. Client

- 環境構築 [ここで確認](/READMES/CreationProcedure/Next14Environment.md)

### 2.

- Navbar と Footer を作成[Navbar](/my-app//src/components/navbar.tsx)と[Footer](/my-app/src/components/footer.tsx)で確認

- Navbar の中に [MainNav](/my-app/src/components/main-nav.tsx)を作成

- Navbar と Footer を layout.tsx に追加

- レイアウトに ui に Container を作成

### 3.　

- ページを作成[about](</my-app/src/app/(routes)/about>),[projects](</my-app/src/app/(routes)/projects>),[blogs](</my-app/src/app/(routes)/blogs>),[contact](</my-app/src/app/(routes)/contact>)

- ページの動的ルートを作成[project](</my-app/src/app/(routes)/projects/[projectId]>),[blog](</my-app/src/app/(routes)/blogs/[blogId]>),

### 4.

- [project-list](/my-app//src//components/project-list.tsx)と[blog-list](/my-app//src//components/blog-list.tsx)を作成

### 5.

- 初期のポートフォリオのホームデザインとしてコーポレートサイトを作成、[ここで確認](</my-app/src/app/(homedesign)/corporate-site>)

- コーポレートサイトを作成手順は一度 ChatGPT で簡単なデザインを書いてもらい、そこで追加にスタイルや画像を入れました。画像は`pexels`から貰いました。

- この[コーポレートサイト](</my-app/src/app/(homedesign)/corporate-site>)はモーダル用のテストをしたい為作りました。大体のポートフォリオサイトが出来上がったらどんどんデザインやサイトなどを作成していく予定です。`モーダル`については`手順７`を確認して下さい。

### 6.

- `zustand`を使ってモーダルの状態を管理するためのカスタムフックを作ります。[hooks](/my-app/src/hooks/use-mobil-modal.tsx)

- `shadcnUI`から`dialog`使って、使い回しができる[Modal](/my-app/src/components/ui/modal.tsx)を作成

- 作った`Modal`を使ってモバイル用の[MobilModal](/my-app/src/components/modals/mobil-modal.tsx)を作成

- `ModalProvider`を作り`layout.tsx`に追加、これで`/app/(roures)`にあるページの全てに`MobilModal`が使えます

(`MobilModal`の中身は作ったサイト情報のほか`iframe要素`を使ってサイトをスマホサイズとダブレットサイズに表示されます)

### 7. Admin

- 管理者用に`create-next-app`をして`Admin`を作成

- 認証機能に next-auth とデータベースは supabase で SQL の代わりに prisma で書きます。[ここで確認](/READMES/CreationProcedure/AdminEnvironment.md)

- [schema.prisma](/admin/prisma/schema.prisma)に認証用テーブルを作成。

- 認証方法は Google 認証だけ行います。[auth.ts](/admin/src/lib/auth.ts)(自分用のなので Google 認証だけです。また、自分のメールアドレスじゃないとログインできないようにしてあります)

- ログインモダールを作成。

- [middleware.ts](/admin/src/middleware.ts)を作成し、必ずログインしないと他のベージに飛ばないようにしました。

### 8.

- [ProjectsPage](</admin/src/app/(dashboard)/(routes)/projects>),[BlogsPage](</admin/src/app/(dashboard)/(routes)/blogs>),[CategoriesPage](</admin/src/app/(dashboard)/(routes)/categories>)等を作成

- ProjectsPage と BlogsPage のデータテーブルを作成
