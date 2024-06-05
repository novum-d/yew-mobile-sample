## デモ


![aadc23a725760cf4cd2d88dedd2008ee](https://github.com/novum-d/yew-mobile-sample/assets/68803158/19f4e92f-fa00-409c-bc40-499bd36ec825)


## Cargo.toml以外の依存関係

## tailwind css

### 1. tailwind cssのインストール
```
npm install -D tailwindcss
npx tailwindcss init
```

### 2. テンプレートパスの指定
```
module.exports = {
    content: [
        "./src/**/*.rs",
        "./index.html",
        "./assets/**/*.css",
    ],
// ...
```

### 3. Tailwind layers

```
// assets/css/main.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. plugin

- daisyUI

1. daisyUI, continer queryプラグインのインストール
```
npm i -D daisyui@latest
npm i -D @tailwindcss/container-queries
```

2. `tailwind.config.js`でプラグイン追加
```
module.exports = {
  //...
  plugins: [require("daisyui"), require('@tailwindcss/container-queries')],
}
```

### Trunk
```
rustup target add wasm32-unknown-unknown
cargo install --locked trunk
cargo install --locked wasm-bindgen-cli
```

### Open API

```
npm i -D @openapitools/openapi-generator-cli
```

