# Kong Community, Japan サイト

## Run in Local

```bash
npm install
npm run dev
```

## event の変更

1. `contents/event.json`を編集する

```json
{
"name": "API Summit 2023",
"date": "2023/9/27（水）~ 28（木)",
"image": "/images/kong-summit-2023.png",
"link": "https://konghq.com/events/conferences/api-summit"
},
{
"name": "【第3回開催！】Kong Community, Japanミートアップ",
"date": "2023/6/13（火）19:00-20:30 ※ 終了・資料公開済み",
"image": "/images/kong-jp-meetup-3rd.png",
"link": "https://kongjp.connpass.com/event/284421/"
},
...
```

`name`にイベント名、`date`に日付、`image`には`public/images`フォルダ内においた画像ファイル、`link`にはイベントのリンクを記載する

2. 画像ファイルを格納

`public/images`内にイベントの画像ファイルを格納する
