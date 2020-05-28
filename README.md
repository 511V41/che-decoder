# che-decoder

カルネージハートエクサからエクスポートしたチームデータをデコードして出力するコマンドラインツールです。

現在出力されるものは以下の通り。

- チーム名
- オーナー名
- 機体名 + 識別名

使いみちとしては、例えばSATLOKEのバックアップから目当ての機体を検索するのに使ったりできると思います。

バグ報告などは [issue](https://github.com/511V41/che-decoder/issues) にお願いします。

## インストール

```sh
npm install -g 511V41/che-decoder
```

## 使い方

```sh
che-decode -f hoge.che
```

## Licence

MIT
