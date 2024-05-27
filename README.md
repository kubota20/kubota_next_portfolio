# Portforlio

クボタのポートフォリオにようこそ！

こちらではポートフォリオの紹介とサイトの作成手順などを書いていきます。

## 作成手順

### 1.

- 環境構築 [ここで確認](/READMES/CreationProcedure/Procedure1.md)

### 2.

- Navbar と Footer を作成[Navbar](/my-app//src/components/navbar.tsx)と[Footer](/my-app/src/components/footer.tsx)で確認

- Navbar の中に [MainNav](/my-app/src/components/main-nav.tsx)を作成

- Navbar と Footer を layout.tsx に追加

### 3.

- レイアウトに ui に Container を作成

### 4.　

- ページを作成[about](</my-app/src/app/(routes)/about>),[projects](</my-app/src/app/(routes)/projects>),[blogs](</my-app/src/app/(routes)/blogs>),[contact](</my-app/src/app/(routes)/contact>)

- ページの動的ルートを作成[project](</my-app/src/app/(routes)/projects/[projectId]>),[blog](</my-app/src/app/(routes)/blogs/[blogId]>),

### 5.

- [project-list](/my-app//src//components/project-list.tsx)と[blog-list](/my-app//src//components/blog-list.tsx)を作成

### 6.

- 初期のポートフォリオのホームデザインとしてコーポレートサイトを作成、[ここで確認](</my-app/src/app/(homedesign)/corporate-site>)

- コーポレートサイトを作成手順は一度 ChatGPT で簡単なデザインを書いてもらい、そこで追加にスタイルや画像を入れました。画像は`pexels`から貰いました。

- この[コーポレートサイト](</my-app/src/app/(homedesign)/corporate-site>)はモーダル用のテストをしたい為作りました。大体のポートフォリオサイトが出来上がったらどんどんデザインやサイトなどを作成していく予定です。`モーダル`については`手順７`を確認して下さい。
