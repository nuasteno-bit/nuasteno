
    gsap.registerPlugin(ScrollTrigger);
    
    const deskThemeToggle = document.getElementById("desk-theme-toggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("desk-theme");
    
    if (savedTheme === "dark") body.classList.add("dark-mode");

    deskThemeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("desk-theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
    
    window.openQuickContact = function(event) {
      if (event) event.preventDefault();
      const modal = document.getElementById('quickContactModal');
      if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    }
    
    window.closeQuickContact = function() {
      const modal = document.getElementById('quickContactModal');
      if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    }
    
    window.handleQuickSubmit = function(event) {
      event.preventDefault();
      
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      
      console.log('접수 데이터:', data);
      
      alert('접수가 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
      
      event.target.reset();
      closeQuickContact();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      const quickContactBtn = document.getElementById('quickContactBtn');
      if (quickContactBtn) {
        quickContactBtn.addEventListener('click', function(e) {
          e.preventDefault();
          window.openQuickContact(e);
        });
      }
      
      const modal = document.getElementById('quickContactModal');
      if (modal) {
        modal.addEventListener('click', function(event) {
          if (event.target === modal) {
            window.closeQuickContact();
          }
        });
      }
      
      const form = document.getElementById('quickContactForm');
      if (form) {
        form.addEventListener('submit', window.handleQuickSubmit);
      }
      
      const closeBtn = document.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', window.closeQuickContact);
      }
    });
    
    const solutions = [
      {
        title: '속기사가 직접 개발한 맞춤형 플랫폼',
        subtitle: '속기사의 시선으로 만든, 속기사와 의뢰인을 위한 시스템',
        description: '10년 이상 현장 속기 경험을 바탕으로 개발한 플랫폼입니다. 실제 업무 흐름에 최적화된 편집·검수·전달 구조를 구현했습니다.',
        bullets: [
          '기술보다 기록의 본질에 집중한 UX 설계',
          '법원, 기관, 방송 환경에서 검증된 실사용 기반'
        ],
        icon: '🎯',
        image: 'card9.jpg'
      },
      {
        title: '신뢰와 투명성의 기록 문화',
        subtitle: '기록의 신뢰는 투명한 절차에서 시작됩니다',
        description: '모든 작업 단계를 기록화하고 검수 로그를 관리합니다. 표준 형식을 준수하며 법원·기관 제출용 문서 규격에 대응합니다.',
        bullets: [
          '개인정보·보안·비밀유지 협약 철저 준수',
          '작업 이력의 추적 및 검증 가능 구조 구축'
        ],
        icon: '🔒',
        image: 'card10.jpg'
      },
      {
        title: '전문성과 품질의 균형',
        subtitle: '기술과 사람이 만드는 최상의 기록 품질',
        description: '숙련된 전문가의 경험과 최신 기술을 결합하여 정확도와 효율성을 동시에 달성합니다. 각 분야별 전문 용어와 맥락을 이해하는 깊이 있는 기록을 제공합니다.',
        bullets: [
          'AI 보정과 전문가 검수의 이중 품질 관리 시스템',
          '분야별 전문 속기사 배정으로 맥락 있는 기록 보장'
        ],
        icon: '⚡',
        image: 'card11.jpg'
      },
      {
        title: '유니버설 디자인과 접근성',
        subtitle: '누구에게나 읽히고, 전달되는 기록을 위해',
        description: '색각·시각 약자도 고려한 가독성 중심 UI를 구현합니다. 자막·속기·문서의 일관된 디자인 언어를 적용합니다.',
        bullets: [
          '투명 디스플레이, 모바일 등 다양한 환경 지원',
          '장애인·비장애인 모두 접근 가능한 정보 전달 구조'
        ],
        icon: '♿',
        image: 'card12.jpg'
      }
    ];
    
    const credentials = [
      '국무이리 목요대화 속기 수행',
      '국가인권위원회 속기 수행',
      '산업통상자원부 에너지위원회 속기 수행',
      '교육부 교원간담회 속기 수행',
      '인사혁신처 공무원 간담회 속기 수행',
      '국가교육위원회 속기 수행',
      '서울시 정책박람회 속기 수행',
      '장애인이동편의증진 특별위원회 속기 수행',
      '국무조정실 청년기본법 토론회 속기 수행',
      '한국항만공사 속기 수행',
      '정부혁신국민포럼 속기 수행',
      '국회 진보당 중앙위원회 실시간 자막',
      'APEC 경주 실시간 속기 수행',
      '세계인권도시포럼 속기 수행',
      '제10회 아시아미래포럼 속기 수행',
      '유네스코 세계유산 해석 국제회의 속기 수행',
      '제10회 문화예술세계대회 실시간 자막',
      '한국인터넷거버넌스포럼 속기 수행',
      '사회적기업 국제포럼 속기 수행',
      '세계도시 혁신정책공유 심포지엄 속기 수행',
      '보조공학 컨퍼런스 속기 수행',
      'AI 시대 모두를 위한 교육 컨퍼런스 실시간 자막',
      '체인지메이커 컨퍼런스 실시간 자막',
      '연합뉴스TV 한미·한일 정상회담 동시통역 속기',
      'MBC 미국 개표방송 실시간 자막',
      'YTN 윤석열 미 의회 연설 특보 실시간 자막',
      '서울국제도서전 실시간 자막',
      '서울문화재단 속기 수행',
      '서울장애인인권영화제 문자통역',
      '한국영화진흥위원회 속기 수행',
      '경희대학교 평화의전당 속기 수행',
      '연세대학교 장애인권위원회 속기 수행',
      '민주사회를 위한 변호사 모임 속기 수행',
      '한국장애인개발원 속기 수행',
      '파이콘 코리아 속기 수행',
      'JSConf 속기 수행'
    ];
    
    let solutionIndex = 0;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      const progressBar = document.querySelector('.progress-bar');
      if (progressBar) {
        progressBar.style.height = scrollPercent + '%';
      }
      
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        if (scrollTop > 100) {
          scrollIndicator.classList.add('hidden');
        } else {
          scrollIndicator.classList.remove('hidden');
        }
      }
    });
    
    const fixedNavBlack = document.querySelector('.fixed-nav-black');
    const fixedNavYellow = document.querySelector('.fixed-nav-yellow');
    const fixedNavLive = document.querySelector('.fixed-nav-live');
    
    if (fixedNavBlack && fixedNavYellow && fixedNavLive) {
      ScrollTrigger.create({
        start: 'top+=150 top',
        end: 'max',
        onUpdate: (self) => {
          if (self.direction === 1) {
            fixedNavBlack.classList.add('is-collapsed');
            fixedNavYellow.classList.add('is-collapsed');
            fixedNavLive.classList.add('is-collapsed');
          } else {
            fixedNavBlack.classList.remove('is-collapsed');
            fixedNavYellow.classList.remove('is-collapsed');
            fixedNavLive.classList.remove('is-collapsed');
          }
        }
      });
    }
    
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTL
      .from('.hero-badge', { opacity: 0, y: 20, duration: 0.6 }, 0.5)
      .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6 }, 0.8)
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6 }, 1.1);
    
    function renderSolutions() {
      const slider = document.getElementById('solutionsSlider');
      const currentSlide = slider.querySelector('.solution-slide.active');
      
      const newContent = solutions.map((sol, i) => `
        <div class="solution-slide ${i === solutionIndex ? 'active' : ''}">
          <div class="solution-image">
            <img src="${sol.image}" alt="${sol.title}" 
                 style="width: 100%; height: 100%; object-fit: cover;" 
                 onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size: 4rem;\\'>${sol.icon}</div>'">
          </div>
          <div class="solution-content">
            <div>
              <span class="solution-tag">Platform</span>
              <h3 class="solution-title">${sol.title}</h3>
              <p class="solution-subtitle">${sol.subtitle}</p>
              <p class="solution-desc">${sol.description}</p>
              <ul class="solution-bullets">
                ${sol.bullets.map(bullet => `
                  <li>
                    <span class="offering-bullet"></span>
                    <span>${bullet}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            <a href="#services" class="solution-link">
              자세히 보기 <span>→</span>
            </a>
          </div>
        </div>
      `).join('');
      
      if (currentSlide) {
        currentSlide.style.opacity = '0';
        setTimeout(() => {
          slider.innerHTML = newContent;
          const newSlide = slider.querySelector('.solution-slide.active');
          if (newSlide) {
            setTimeout(() => {
              newSlide.style.opacity = '1';
            }, 10);
          }
        }, 200);
      } else {
        slider.innerHTML = newContent;
      }

      const indicators = document.getElementById('solutionIndicators');
      indicators.innerHTML = solutions.map((_, i) => 
        `<button class="slide-indicator ${i === solutionIndex ? 'active' : ''}" 
                 onclick="setSolution(${i})"></button>`
      ).join('');
    }
    
    function setSolution(index) {
      if (index !== solutionIndex) {
        solutionIndex = index;
        renderSolutions();
      }
    }
    
    function changeSolution(direction) {
      const newIndex = (solutionIndex + direction + solutions.length) % solutions.length;
      setSolution(newIndex);
    }
    
    let solutionAutoRotate = setInterval(() => {
      changeSolution(1);
    }, 8000);
    
    function renderCredentials() {
      const itemsPerRow = Math.ceil(credentials.length / 3);
      const row1 = credentials.slice(0, itemsPerRow);
      const row2 = credentials.slice(itemsPerRow, itemsPerRow * 2);
      const row3 = credentials.slice(itemsPerRow * 2);
      
      const row1HTML = [...row1, ...row1].map(cred => 
        `<div class="experience-item">${cred}</div>`
      ).join('');
      
      const row2HTML = [...row2, ...row2].map(cred => 
        `<div class="experience-item">${cred}</div>`
      ).join('');
      
      const row3HTML = [...row3, ...row3].map(cred => 
        `<div class="experience-item">${cred}</div>`
      ).join('');
      
      document.getElementById('experience-row-1').innerHTML = row1HTML;
      document.getElementById('experience-row-2').innerHTML = row2HTML;
      document.getElementById('experience-row-3').innerHTML = row3HTML;
    }
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
    
    gsap.fromTo('.services-title',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.services-subtitle',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.section-label',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.solutions-header',
          start: 'top 85%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.section-title',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.solutions-header',
          start: 'top 85%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.section-desc',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.solutions-header',
          start: 'top 85%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.solutions-slider',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.solutions-slider',
          start: 'top 85%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.experience-header',
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.experience-track',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.trust-title',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.trust-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.trust-subtitle',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.trust-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    const trustCards = document.querySelectorAll('.trust-card');
    trustCards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.trust-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
    
    gsap.fromTo('.faq-section-badge',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-section-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.faq-section-title',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-section-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.faq-section-subtitle',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-section-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-cards',
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
    
    gsap.fromTo('.faq-more-link',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-more-link',
          start: 'top 85%',
          once: true
        }
      }
    );
    
    const whyUsCards = document.querySelectorAll('.why-us .why-us-card');
    whyUsCards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.why-us',
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
      
      const num = card.querySelector('.why-us-number');
      if (num) {
        gsap.to(num, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
          }
        });
      }
    });
    
    gsap.fromTo('.why-us-title',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-us-header',
          start: 'top 80%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.footer-content',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
          once: true
        }
      }
    );
    
    gsap.fromTo('.footer-bottom',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
          once: true
        }
      }
    );
    
    window.addEventListener('load', () => {
      renderSolutions();
      renderCredentials();
      
      function handleMobileStats() {
        const isMobile = window.innerWidth <= 1024;
        const leftStat = document.querySelector('.map-stat-left');
        const rightStat = document.querySelector('.map-stat-right');
        const bottomStat = document.querySelector('.map-stat-bottom');
        const wrapper = document.querySelector('.map-stats-wrapper');
        
        if (!leftStat || !rightStat || !bottomStat || !wrapper) return;
        
        if (isMobile) {
          wrapper.appendChild(leftStat);
          wrapper.appendChild(rightStat);
          wrapper.appendChild(bottomStat);
        } else {
          const mapContainer = document.querySelector('.korea-map-container');
          if (mapContainer) {
            mapContainer.appendChild(leftStat);
            mapContainer.appendChild(rightStat);
            mapContainer.appendChild(bottomStat);
          }
        }
      }
      
      handleMobileStats();
      window.addEventListener('resize', handleMobileStats);
    });
  