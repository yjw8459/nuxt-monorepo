# Nuxt

## MiddleWare

Nuxt는 특정 경로로 이동하기 전에 실행됨.

1. 경로가 지정되지 않은 미들웨어는 페이지에서 직접 정의
2. 경로가 지정된 미들웨어는 `middleware/`에 작성 시 자동으로 로드됨.
3. 글로벌 경로 미들웨어는 `middleware/`에 배치되고, `.global`이 접미사로 붙음.

ex) myMiddleware -> my-middleware

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    // 선택적으로 오류 메세지를 표시하고 탐색을 중단함.
    return abortNavigation() // => 탐색 중지
    // return abortNavigation(error) => 오류로 인한 탐색 거부
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (to.path !== '/') {
    // 주어진 경로로 리디렉션
    return navigateTo('/')
  }
})
```

### 글로벌 미들웨어

```bash
-| middleware/
---| analytics.global.ts
---| setup.global.ts
---| auth.ts
```

```vue
<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
})
</script>
```

위 같은 상황에서의 실행순서

1. analytics.global.ts
2. setup.global.ts
3. definePageMeta
4. auth.ts

글로벌 미들웨어의 경우 파일 이름 기준으로 알파벳 순 실행됨.
실행 순서를 바꿀 경우

```bash
-| middleware/
---| 01.setup.global.ts
---| 02.analytics.global.ts
---| auth.ts
```

### Client 구성 요소

클라이언트 측에서만 렌더링되도록 의도한 경우 접미사를 통해 구성할 수 있다.

```bash
| components/
--| Comments.client.vue
```

- `.client` 클라이언트 측에서만 렌더링 되는 경우 마운트 된 후에만 렌더링된다.
-

defineNuxtModule
Nuxt 모듈을 정의하고, 사용자가 제공한 옵션과 기본값을 자동으로 병합하고, 제공된 모든 후크를 설치하고, 전체 제어를 위한 선택적 설정 함수를 호출합니다.
