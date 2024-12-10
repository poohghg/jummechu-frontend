## 점메츄 프로젝트 프론트엔드

This is a [Next.js](https://nextjs.org) project bootstrapped
with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

pnpm 설치
`npm install pnpm`

Next.js 프로젝트 생성
`pnpm create-next-app jummechu-frontend`

패키지 설치

1. tanstack/react-query

   ```bash
   pnpm add @tanstack/react-query
   ```

2. babel-plugin-react-compiler

   ```bash
   pnpm add babel-plugin-react-compiler
   ```

3. prettier 설치

   ```bash
   pnpm add prettier eslint-config-prettier prettier-plugin-tailwindcss
   ```

4. zustand 설치
   ```bash
   pnpm add zustand
   ```

### 프로젝트 세팅

1. 노드 버전 관리
    - Volta
    - https://volta.sh/ 설치
    - 설치 후 volta list로 버전확인
        - 로컬 node -v 버전확인 필요

2.config.js/.env.example 파일 복사 하여 .env.local 파일 생성

3.husky 설치 1회 필요

```bash  
  pnpm prepare
```

4. https://mockoon.com/download/ 설치

5.

### Getting Started

First, run the development server:

```bash
   pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


