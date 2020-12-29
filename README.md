## 環境構築
### ローカル用DBの起動
```
docker-compose up -d
```
※DBの停止は以下
```
docker-compose down
```

### 設定ファイルの作成
```
cp .env.example .env
```

### パッケージインストール
```
yarn
```

### ローカルサーバ起動
watchあり
```
yarn dev
```
watchなし
```
yarn start
```