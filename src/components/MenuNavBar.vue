<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/UserLogin">ユーザー</router-link>
      </li>
      <li>
        <router-link to="/GalleryActive">ギャラリー</router-link>
      </li>
      <li>
        <router-link to="/ClubEvent">サークルイベント</router-link>
      </li>
      <li>
        <router-link to="/ContactUs">お問い合わせ</router-link>
      </li>
    </ul>
  </nav>
  </template>
  
  <script>
  export default {
    name: 'MenuNavBar',
  }
  </script>
  
  <style>
  nav {
  background-color: #333;
  overflow: hidden;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
}

li a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  border-radius: 5px;
  background-color: #4CAF50;
  transition: background-color 0.3s ease;
}

li a.router-link-active {
  background-color: #45a049; /* 활성화된 링크 스타일 */
}
  </style>