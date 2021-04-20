# Next.js + typescript + next-redux-wrapper + redux-saga + i18next + reactstrap

Next.js를 처음 접하면서 수많은 시행착오를 겪는 중에 초기 세팅을 하고 기록하기 위해 작성합니다.

기존의 react에서 잘 사용해왔던 라이브러리들이 제대로 적용 되지 않았던 문제들을 하나씩 해결하며 세팅을 해보았습니다.

# 참고

Next.js

- Next.js는 서버 측 렌더링 및 React 기반 웹 애플리케이션을위한 정적 웹 사이트 생성과 같은 기능을 지원하는 오픈 소스 React 프런트 엔드 개발 웹 프레임 워크

Typescript

- 타입스크립트는 자바스크립트에 타입을 부여한 언어

Redux-saga

- 데이터 fetching이나 브라우저 캐시에 접근하는 순수하지 않은 비동기 동작들을, 더 쉽고 좋게 만드는 것을 목적으로하는 라이브러리

I18next

- I18next는 Javascript로 작성된 국제화 프레임 워크(번역)

reactstrap

- 부트스트랩의 리액트 버전

# Quick start

패키지 설치

```bash
npm install
// or
yarn install
```

개발 모드 실행

```bash
npm run dev
// or
yarn dev
```

빌드 후 실행

```bash
  npm run build
  npm run start
  // or
  yarn build
  yarn start
```

# Example

1. reactstrap 적용 (lib설치 만으로는 bootstrap을 읽어오지 않아 cdn 적용)
2. next-redux-wrapper를 적용한 기본적인 Counter
3. Redux-saga를 적용해 User data fetching
4. 라우팅을 예시를 위한 로그인 페이지
5. I18next 를 적용해 사이트 번역기능 적용

## Contact

> 하태현 ([taehyen11@google.com](mailto:taehyen11@google.com))
