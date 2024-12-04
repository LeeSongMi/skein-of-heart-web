module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  embeddedLanguageFormatting: 'auto', // 내장된 언어 포매팅 여부 (ex: HTML 안의 JavaScript 코드)
  htmlWhitespaceSensitivity: 'css', // HTML의 공백 처리 민감도를 설정 : css 표시 방식의 기본 값을 존중합니다.
  singleAttributePerLine: false, // 한 줄에 하나의 HTML 속성만 사용
  experimentalTernaries: false, // 중첩된 삼항 연산자의 경우, 중첩만큼 들여쓰기
  jsxBracketSameLine: false, // JSX 요소의 마지막 꺽새 괄호(>)를 같은 줄에 위치: 줄바꿈
  quoteProps: 'as-needed', // 객체 속성의 따옴표 스타일: 필요한 경우만, 따옴표 추가
  bracketSameLine: false, // 괄호의 마지막을 같은 줄에 위치: 줄바꿈
  arrowParens: 'always', // 람다 함수의 매개변수에 괄호를 사용할지 여부: (property) => {}
  proseWrap: 'preserve', // Markdown이나 HTML과 같은 자연어 포맷의 텍스트 줄바꿈 방식: 줄바꿈 안함
  jsxSingleQuote: false, // JSX 속성에서 작은따옴표를 사용: 큰따옴표 사용
  bracketSpacing: true, // 객체 리터럴에서 중괄호 주위에 공백 추가 여부
  trailingComma: 'es5', // 배열이나 객체 리터럴의 마지막 요소 뒤에 쉼표를 추가: ES5에서 유효한 후행 쉼표를 따름
  requirePragma: false, // 지정된 주석이 있어야만 Prettier가 포맷팅을 적용
  insertPragma: false, // Prettier가 파일 상단에 포맷팅 주석 자동 추가
  singleQuote: true, // 문자열 따옴표로 작은 따옴표 사용
  printWidth: 120, // 한줄에 출력할 최대 문자 수: 120자
  useTabs: false, // 들여쓰기 방식을 탭으로 할지 여부: 탭 대신 공백으로 들여쓰기
  tabWidth: 2, // 들여쓰기당 치환할 공백 수: 들여쓰기당 2개의 공백
  semi: false, // 세미콜론 사용 여부
}
