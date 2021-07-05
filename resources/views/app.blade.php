<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Vue Laravel SPA') }}</title>
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
  <div id="app">
    <header-component></header-component>
    <router-view />
    <footer-component></footer-component>
  </div>
  <script src="{{ mix('/js/app.js') }}" defer></script>
</body>
</html>