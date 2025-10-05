# NestJS Project CRUD API

TypeORM을 사용한 간단한 Project CRUD API입니다.

## 기능

- Project 생성 (CREATE)
- Project 목록 조회 (READ)
- Project 상세 조회 (READ)
- Project 수정 (UPDATE)
- Project 삭제 (DELETE)

## 기술 스택

- **NestJS**: Node.js 프레임워크
- **TypeORM**: ORM (Object-Relational Mapping)
- **SQLite**: 데이터베이스
- **Swagger**: API 문서화
- **Class Validator**: 데이터 검증

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 애플리케이션 실행
```bash
# 개발 모드
npm run start:dev

# 프로덕션 모드
npm run start:prod
```

## API 엔드포인트

### Base URL
```
http://localhost:3000
```

### 프로젝트 관련 API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/projects` | 새 프로젝트 생성 |
| GET    | `/projects` | 모든 프로젝트 조회 |
| GET    | `/projects/:id` | 특정 프로젝트 조회 |
| PATCH  | `/projects/:id` | 프로젝트 수정 |
| DELETE | `/projects/:id` | 프로젝트 삭제 |

### API 문서
애플리케이션 실행 후 다음 URL에서 Swagger 문서를 확인할 수 있습니다:
```
http://localhost:3000/api
```

## 프로젝트 구조

```
src/
├── project/
│   ├── dto/
│   │   ├── create-project.dto.ts
│   │   └── update-project.dto.ts
│   ├── entities/
│   │   └── project.entity.ts
│   ├── project.controller.ts
│   ├── project.service.ts
│   └── project.module.ts
├── app.module.ts
└── main.ts
```

## 프로젝트 데이터 모델

### Project Entity
- `id`: 고유 식별자 (자동 생성)
- `name`: 프로젝트 이름 (필수)
- `description`: 프로젝트 설명 (선택)
- `status`: 프로젝트 상태 (기본값: 'active')
- `createdAt`: 생성 시간 (자동 생성)
- `updatedAt`: 수정 시간 (자동 업데이트)

## 예시 요청

### 프로젝트 생성
```bash
curl -X POST http://localhost:3000/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "새 프로젝트",
    "description": "프로젝트 설명",
    "status": "active"
  }'
```

### 프로젝트 조회
```bash
curl http://localhost:3000/projects
```

### 특정 프로젝트 조회
```bash
curl http://localhost:3000/projects/1
```

### 프로젝트 수정
```bash
curl -X PATCH http://localhost:3000/projects/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "수정된 프로젝트 이름"
  }'
```

### 프로젝트 삭제
```bash
curl -X DELETE http://localhost:3000/projects/1
```