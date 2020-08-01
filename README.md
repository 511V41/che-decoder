# che-decoder

カルネージハートエクサからエクスポートしたチームデータをデコードして出力するコマンドラインツールです。

現在出力されるものは以下の通り。

- チーム名
- オーナー名
- 機体名 + 識別名
- フォーメーション

プログラムの中身など本来ブラックボックスである情報は取りません。実際にPSPで遊んでいる中で得られる情報についてのみサポートします。

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

```
Copyright 2020 511V41

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
