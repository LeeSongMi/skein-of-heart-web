# 마음실타래

[![JIRA](https://img.shields.io/badge/jira-%230A0FFF.svg?label=프로젝트정의&style=for-the-badge&logo=jira&logoColor=white)](https://skein-of-heart.atlassian.net/browse/SOH-1)

## 📋 목차

## 📀 프로젝트 설치 및 실행

### 프로젝트 설치

### 프로젝트 실행

```bash

# 프로젝트 실행
yarn install
yarn dev # or yarn run dev

# 프로젝트 빌드 + 빌드된 프로젝트 실행
yarn build
yarn start

# 테스트
yarn test

# 기타 스크립트는 package.json -> scripts 참고

```

### Prettier/ESLint 설정

프로젝트가 정상적으로 실행되면 Prettier와 ESLint가 올바르게 작동하는지 확인한 후 개발을 진행해 주세요.

Prettier/ESLint 상세 설정은 설정 파일 내부의 주석을 확인해 주세요.

**[IntelliJ IDEA 기준]**

1. Prettier와 ESLint 플러그인을 설치합니다.
    - IntelliJ 버전에 따라 플러그인이 기본 내장되어 있을 수 있습니다.
2. IntelliJ IDEA의 설정(settings)을 열고 Prettier 또는 ESLint를 검색합니다.
3. 자동 Prettier/ESLint 구성을 선택합니다.
4. 하단의 저장 시 실행 체크박스를 체크합니다.
5. 옆의 "저장 시 모든 액션..."을 클릭한 뒤 저장 시 액션을 설정합니다.
6. 설정을 적용하고 나면, 파일을 저장할 때마다 Prettier와 ESLint가 자동으로 실행됩니다.

## 📚 사용법 - 개발 가이드

### 주요 라이브러리

| 분류           | 라이브러리                                                                                                                                                                                                                                                                                                                                                | 설정 파일 경로                                                                           |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| 통신 라이브러리     | swr or react-query                                                                                                                                                                                                                                                                                                                                   |                                                                                    |
| CSS 라이브러리    | [![TailwindCSS](https://img.shields.io/badge/tailwind_css-%23000000.svg?style=for-the-badge&logo=tailwindcss&logoColor=sky)](https://tailwindcss.com/docs/installation)                                                                                                                                                                              | <code>tailwind.config.ts</code>                                                    |
| UI 라이브러리     | [![MantineUI](https://img.shields.io/badge/mantine_ui-%23000000.svg?style=for-the-badge&logo=mantine&logoColor=blue)](https://mantine.dev/getting-started/)                                                                                                                                                                                          | <code>src/base/provider/MantineProvider.tsx</code> <code>postcss.config.mjs</code> |
| 테스팅 라이브러리    | [![Jest](https://img.shields.io/badge/jest-%23000000.svg?style=for-the-badge&logo=jest&logoColor=red)](https://jestjs.io/docs/getting-started) [![TestingLibrary](https://img.shields.io/badge/testing_library-%23000000.svg?style=for-the-badge&logo=testing-library&logoColor=red)](https://testing-library.com/docs/react-testing-library/intro/) | <code>jest.config.ts</code> <code>jest.setup.ts</code>                             |
| 유효성 검증 라이브러리 | [![Zod](https://img.shields.io/badge/zod-%23000000.svg?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/?id=basic-usage)                                                                                                                                                                                                               | <code>lib/utils/zod</code>                                                         |

## 👥 기여

## 🗝️ 라이선스

## 📞 문의

## ✔️ 추가정보