type SkillItem = {
  title: string
  content: string
}

type Skill = {
  name: string
  data: SkillItem[]
}

export const skills: Skill[] = [
  {
    name: 'JAVA',
    data: [
      {
        title: 'JSE',
        content:
          'Java 에 대한 전체적인 기술 (객체지향 프로그래밍, 컬렉션, 입출력, 쓰레드, 스트림)'
      },
      {
        title: 'JSP / Servlet',
        content: 'DAO 패턴 활용 하여 MariaDB 연결, 동적 웹사이트 구현'
      },
      {
        title: 'Spring',
        content:
          'MVC 패턴 활용 개발, 서버 및 MyBatis 연동, Lombok 활용, Security 비지니스 계층 구현'
      },
      {
        title: 'HTML5',
        content: 'HTML 웹 표준 활용 / 반응형 웹 구현'
      },
      {
        title: 'CSS3',
        content:
          '레이아웃 및 스타일 정의/ 디스플레이 속성 정의 / 선택자 활용 / 모바일 뷰포트 활용'
      }
    ]
  },
  {
    name: 'Backend',
    data: [
      {
        title: 'SpringBoot',
        content:
          ' Maven 을 사용한 의존성 관리 / RESTful 웹 서비스 / SpringSecurity / JWT 로그인'
      },
      {
        title: 'Node.js',
        content: 'NPM / MongoDB, MySQL DB 연동'
      }
    ]
  },
  {
    name: 'Frontend',
    data: [
      {
        title: 'React',
        content:
          '생명주기/ Redux및 훅을 통한 상태관리 / 라우팅 및 동적 네비게이션 / 커스텀 훅'
      },
      {
        title: 'HTML5',
        content: 'HTML 웹 표준 활용 / 반응형 웹 구현'
      },
      {
        title: 'CSS3',
        content:
          '레이아웃 및 스타일 정의/ 디스플레이 속성 정의 / 선택자 활용/모바일 뷰포트 활용'
      }
    ]
  },
  {
    name: 'DB',
    data: [
      {
        title: 'Oracle DB',
        content: 'DBMS 구현'
      },
      {
        title: 'SQLDeveloper',
        content: 'GROUP BY 및 서브쿼리 활용'
      },
      {
        title: 'MariaDB',
        content: 'HeidiSQL 활용'
      }
    ]
  },
  {
    name: 'Tools',
    data: [
      {
        title: 'GitHub',
        content: '형상관리'
      },
      {
        title: 'Notion',
        content: '이슈관리'
      },
      {
        title: '개발 도구',
        content: 'IntelliJ IDEA, VSCode, Docker, Postman'
      }
    ]
  }
]
