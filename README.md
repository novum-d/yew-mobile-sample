## デモ


https://github.com/novum-d/yew-mobile-sample/assets/68803158/d2c989e1-9225-4659-93ad-e7c3efd95879


Android側は、インターネット通信をしようとするとクラッシュしておちる(この時点ではα)。


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
cargo install --locked trunk
cargo install --locked wasm-bindgen-cli
```

### Open API

```
npm i -D @openapitools/openapi-generator-cli
```

