import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        catalog: 'Catalog',
        roadmaps: 'Roadmaps',
        projects: 'Projects',
        aiPath: 'AI Path',
        universities: 'Universities'
      },
      hero: {
        title: 'The curated path to mastery.',
        subtitle: "We index only the highest-signal educational resources from the world's leading institutions. No noise, just the canonical best."
      },
      search: {
        placeholder: 'Search resources...',
        clear: 'Clear',
        allUnis: 'All Universities',
        allTopics: 'All Topics',
        levels: {
          all: 'All Levels',
          intro: 'Beginner',
          intermediate: 'Intermediate',
          advanced: 'Senior'
        },
        domains: {
          all: 'All',
          systems: 'Systems',
          cs: 'Computer Science',
          math: 'Mathematics',
          ai: 'AI',
          ml: 'Machine Learning',
          dl: 'Deep Learning',
          ds: 'Data Science',
          da: 'Data Analysis',
          nlp: 'NLP',
          cv: 'Computer Vision'
        }
      },
      projects: {
        label: 'Portfolio Builder',
        title: 'The Projects Library',
        subtitle: 'Convert your learning into tangible outcomes. Each project is designed to be a significant addition to your professional portfolio.',
        steps: 'Steps',
        tools: 'Suggested Tools',
        dod: 'Definition of Done',
        role: 'Role Focus',
        mustOnCV: 'CV Essential',
        roles: {
          junior: 'Junior',
          senior: 'Senior',
          manager: 'Lead/Manager'
        }
      },
      roadmaps: {
        label: 'Special Feature',
        title: 'Guided Paths to Mastery',
        subtitle: "Don't just collect resources. Follow a structured sequence designed by experts to take you from foundational concepts to advanced implementation.",
        weeklyPlan: 'The Weekly Plan',
        methodology: 'Methodology',
        capstone: 'Capstone Project',
        executionSteps: 'Execution Steps',
        dod: 'Definition of Done',
        options: 'Pick-One Options',
        week: 'Week'
      },
      courses: {
        review: 'Editorial Review',
        guide: 'Study Guide',
        projects: 'After-Course Projects',
        resources: 'Resources',
        site: 'Official Site',
        playlist: 'YouTube Playlist',
        notes: 'Course Notes'
      },
      ai: {
        label: 'AI-Powered Guidance',
        title: 'Your Custom Path to Mastery',
        subtitle: "Tell us your ambition. Our AI will synthesize a unique curriculum using the world's highest-signal educational resources.",
        placeholder: 'e.g., I want to build a self-driving car agent from scratch',
        generate: 'Generate Path',
        synthesizing: 'Synthesizing...',
        milestones: 'Milestones',
        context: 'Deep Context',
        contextDesc: 'Our AI understands the specific nuances of every course in our catalog.',
        goal: 'Goal Oriented',
        goalDesc: "Whether it's a career pivot or a specific project, the path is tailored to you.",
        efficiency: 'Efficient Learning',
        efficiencyDesc: 'We eliminate the noise and focus only on the canonical best resources.',
        note: 'Note: This feature is powered by Gemini 3 Flash and is free to use.'
      },
      universities: {
        label: 'Institutional Hubs',
        title: 'The Universities',
        subtitle: 'We curate from the world\'s most prestigious institutions. Each hub contains verified links to official departments and playlists.',
        featured: 'Featured Resources',
        official: 'Official Links'
      },
      footer: {
        curatedBy: 'Curated by',
        license: 'Released under the MIT License',
        rights: 'The One Editorial'
      },
      common: {
        back: 'Back',
        view: 'View',
        forWhom: 'For Whom',
        level: 'Level',
        format: 'Format',
        certificate: 'Certificate',
        prerequisites: 'Prerequisites',
        duration: 'Duration',
        source: 'Source'
      }
    }
  },
  de: {
    translation: {
      nav: {
        catalog: 'Katalog',
        roadmaps: 'Roadmaps',
        projects: 'Projekte',
        aiPath: 'KI-Pfad',
        universities: 'Universitäten'
      },
      hero: {
        title: 'Der kuratierte Weg zur Meisterschaft.',
        subtitle: 'Wir indexieren nur die am höchsten bewerteten Bildungsressourcen der weltweit führenden Institutionen. Kein Lärm, nur das Beste.'
      },
      search: {
        placeholder: 'Ressourcen suchen...',
        clear: 'Löschen',
        allUnis: 'Alle Universitäten',
        allTopics: 'Alle Themen',
        levels: {
          all: 'Alle Ebenen',
          intro: 'Anfänger',
          intermediate: 'Mittelstufe',
          advanced: 'Fortgeschritten'
        },
        domains: {
          all: 'Alle',
          systems: 'Systeme',
          cs: 'Informatik',
          math: 'Mathematik',
          ai: 'KI',
          ml: 'Maschinelles Lernen',
          dl: 'Deep Learning',
          ds: 'Data Science',
          da: 'Datenanalyse',
          nlp: 'NLP',
          cv: 'Computer Vision'
        }
      },
      projects: {
        label: 'Portfolio-Builder',
        title: 'Die Projekt-Bibliothek',
        subtitle: 'Verwandeln Sie Ihr Wissen in greifbare Ergebnisse. Jedes Projekt ist als bedeutende Ergänzung für Ihr professionelles Portfolio konzipiert.',
        steps: 'Schritte',
        tools: 'Empfohlene Tools',
        dod: 'Definition von Abgeschlossen',
        role: 'Rollen-Fokus',
        mustOnCV: 'Lebenslauf-Essenziell',
        roles: {
          junior: 'Junior',
          senior: 'Senior',
          manager: 'Leiter/Manager'
        }
      },
      roadmaps: {
        label: 'Besonderes Feature',
        title: 'Geführte Wege zur Meisterschaft',
        subtitle: 'Sammeln Sie nicht nur Ressourcen. Folgen Sie einer strukturierten Sequenz von Experten.',
        weeklyPlan: 'Der Wochenplan',
        methodology: 'Methodik',
        capstone: 'Abschlussprojekt',
        executionSteps: 'Ausführungsschritte',
        dod: 'Definition von Abgeschlossen',
        options: 'Wahlmöglichkeiten',
        week: 'Woche'
      },
      courses: {
        review: 'Redaktionelle Bewertung',
        guide: 'Studienführer',
        projects: 'Projekte nach dem Kurs',
        resources: 'Ressourcen',
        site: 'Offizielle Website',
        playlist: 'YouTube-Playlist',
        notes: 'Kursnotizen'
      },
      ai: {
        label: 'KI-gestützte Beratung',
        title: 'Ihr individueller Weg zur Meisterschaft',
        subtitle: 'Nennen Sie uns Ihr Ziel. Unsere KI erstellt ein einzigartiges Curriculum.',
        placeholder: 'z.B. Ich möchte einen Agenten für selbstfahrende Autos von Grund auf bauen',
        generate: 'Pfad generieren',
        synthesizing: 'Synthetisiere...',
        milestones: 'Meilensteine',
        context: 'Tiefer Kontext',
        contextDesc: 'Unsere KI versteht die spezifischen Nuancen jedes Kurses in unserem Katalog.',
        goal: 'Zielorientiert',
        goalDesc: 'Ob Karrierewechsel oder spezielles Projekt, der Pfad ist auf Sie zugeschnitten.',
        efficiency: 'Effizientes Lernen',
        efficiencyDesc: 'Wir eliminieren das Rauschen und konzentrieren uns nur auf das Beste.',
        note: 'Hinweis: Diese Funktion wird von Gemini 3 Flash unterstützt und ist kostenlos.'
      },
      universities: {
        label: 'Institutionelle Hubs',
        title: 'Die Universitäten',
        subtitle: 'Wir kuratieren von den renommiertesten Institutionen weltweit.',
        featured: 'Ausgewählte Ressourcen',
        official: 'Offizielle Links'
      },
      footer: {
        curatedBy: 'Kuratiert von',
        license: 'Veröffentlicht unter der MIT-Lizenz',
        rights: 'The One Redaktion'
      },
      common: {
        back: 'Zurück',
        view: 'Ansehen',
        forWhom: 'Für wen',
        level: 'Niveau',
        format: 'Format',
        certificate: 'Zertifikat',
        prerequisites: 'Voraussetzungen',
        duration: 'Dauer',
        source: 'Institution'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        catalog: 'Catalogue',
        roadmaps: 'Parcours',
        projects: 'Projets',
        aiPath: 'IA Path',
        universities: 'Universités'
      },
      hero: {
        title: 'Le chemin séléctionné vers la maîtrise.',
        subtitle: 'Nous indexons uniquement les ressources éducatives les plus qualitatives des meilleures institutions mondiales. Pas de bruit, juste le meilleur.'
      },
      search: {
        placeholder: 'Rechercher des ressources...',
        clear: 'Effacer',
        allUnis: 'Toutes les universités',
        allTopics: 'Tous les sujets',
        levels: {
          all: 'Tous les niveaux',
          intro: 'Débutant',
          intermediate: 'Intermédiaire',
          advanced: 'Sénior'
        },
        domains: {
          all: 'Tous',
          systems: 'Systèmes',
          cs: 'Informatique',
          math: 'Mathématiques',
          ai: 'IA',
          ml: 'Apprentissage Automatique',
          dl: 'Apprentissage Profond',
          ds: 'Science des Données',
          da: 'Analyse de Données',
          nlp: 'TAL',
          cv: 'Vision par Ordinateur'
        }
      },
      projects: {
        label: 'Constructeur de Portfolio',
        title: 'Bibliothèque de Projets',
        subtitle: 'Transformez votre apprentissage en résultats concrets. Chaque projet est conçu pour enrichir votre portfolio professionnel.',
        steps: 'Étapes',
        tools: 'Outils suggérés',
        dod: 'Définition de Terminé',
        role: 'Domaine de Rôle',
        mustOnCV: 'Essentiel CV',
        roles: {
          junior: 'Junior',
          senior: 'Sénior',
          manager: 'Lead/Manager'
        }
      },
      roadmaps: {
        label: 'Fonction Spéciale',
        title: 'Chemins vers la Maîtrise',
        subtitle: 'Ne vous contentez pas de collecter des ressources. Suivez une séquence structurée conçue par des experts.',
        weeklyPlan: 'Le Plan Hebdomadaire',
        methodology: 'Méthodologie',
        capstone: 'Projet de Fin d\'Études',
        executionSteps: 'Étapes d\'Exécution',
        dod: 'Définition de Terminé',
        options: 'Options à Choisir',
        week: 'Semaine'
      },
      courses: {
        review: 'Critique Éditoriale',
        guide: 'Guide d\'Étude',
        projects: 'Projets Post-Cours',
        resources: 'Ressources',
        site: 'Site Officiel',
        playlist: 'Playlist YouTube',
        notes: 'Notes de Cours'
      },
      ai: {
        label: 'Guidage par IA',
        title: 'Votre Parcours Personnalisé',
        subtitle: 'Dites-nous votre ambition. Notre IA synthétisera un curriculum unique.',
        placeholder: 'ex: Je veux construire un agent de voiture autonome à partir de zéro',
        generate: 'Générer le Parcours',
        synthesizing: 'Synthèse en cours...',
        milestones: 'Jalons',
        context: 'Contexte Approfondi',
        contextDesc: 'Notre IA comprend les nuances spécifiques de chaque cours de notre catalogue.',
        goal: 'Orienté Objectif',
        goalDesc: 'Qu\'il s\'agisse d\'un changement de carrière ou d\'un projet spécifique, le parcours est sur mesure.',
        efficiency: 'Apprentissage Efficace',
        efficiencyDesc: 'Nous éliminons le bruit pour nous concentrer uniquement sur le meilleur.',
        note: 'Note : Cette fonctionnalité est propulsée par Gemini 3 Flash et est gratuite.'
      },
      universities: {
        label: 'Pôles Institutionnels',
        title: 'Les Universités',
        subtitle: 'Nous sélectionnons les institutions les plus prestigieuses au monde.',
        featured: 'Ressources Vedettes',
        official: 'Liens Officiels'
      },
      footer: {
        curatedBy: 'Curaté par',
        license: 'Publié sous licence MIT',
        rights: 'The One Éditorial'
      },
      common: {
        back: 'Retour',
        view: 'Voir',
        forWhom: 'Pour qui',
        level: 'Niveau',
        format: 'Format',
        certificate: 'Certificat',
        prerequisites: 'Prérequis',
        duration: 'Durée',
        source: 'Source'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        catalog: 'الكتالوج',
        roadmaps: 'خارطة الطريق',
        projects: 'المشاريع',
        aiPath: 'مسار الذكاء الاصطناعي',
        universities: 'الجامعات'
      },
      hero: {
        title: 'المسار المنسق نحو الإتقان.',
        subtitle: 'نقوم بفهرسة الموارد التعليمية الأعلى قيمة فقط من المؤسسات الرائدة في العالم. لا ضوضاء، فقط الأفضل.'
      },
      search: {
        placeholder: 'البحث عن الموارد...',
        clear: 'مسح',
        allUnis: 'كل الجامعات',
        allTopics: 'كل المواضيع',
        levels: {
          all: 'جميع المستويات',
          intro: 'مبتدئ',
          intermediate: 'متوسط',
          advanced: 'متقدم'
        },
        domains: {
          all: 'الكل',
          systems: 'الأنظمة',
          cs: 'علوم الحاسوب',
          math: 'الرياضيات',
          ai: 'الذكاء الاصطناعي',
          ml: 'تعلم الآلة',
          dl: 'التعلم العميق',
          ds: 'علم البيانات',
          da: 'تحليل البيانات',
          nlp: 'معالجة اللغات الطبيعية',
          cv: 'الرؤية الحاسوبية'
        }
      },
      projects: {
        label: 'بناء الملف الشخصي',
        title: 'مكتبة المشاريع',
        subtitle: 'حول تعلمك إلى نتائج ملموسة. تم تصميم كل مشروع ليكون إضافة مهمة لملفك المهني.',
        steps: 'الخطوات',
        tools: 'الأدوات المقترحة',
        dod: 'تعريف الإنجاز',
        role: 'تركيز الدور',
        mustOnCV: 'ضروري للسيرة الذاتية',
        roles: {
          junior: 'مبتدئ (Junior)',
          senior: 'خبير (Senior)',
          manager: 'قائد/مدير'
        }
      },
      roadmaps: {
        label: 'ميزة خاصة',
        title: 'مسارات موجهة نحو الإتقان',
        subtitle: 'لا تكتفِ بجمع الموارد. اتبع تسلسلاً منظماً صممه الخبراء.',
        weeklyPlan: 'الخطة الأسبوعية',
        methodology: 'المنهجية',
        capstone: 'مشروع التخرج',
        executionSteps: 'خطوات التنفيذ',
        dod: 'تعريف الإنجاز',
        options: 'خيارات الانتقاء',
        week: 'أسبوع'
      },
      courses: {
        review: 'مراجعة تحريرية',
        guide: 'دليل الدراسة',
        projects: 'مشاريع ما بعد الدورة',
        resources: 'المصادر',
        site: 'الموقع الرسمي',
        playlist: 'قائمة تشغيل YouTube',
        notes: 'ملاحظات الدورة'
      },
      ai: {
        label: 'توجيه مدفوع بالذكاء الاصطناعي',
        title: 'مسارك المخصص للإتقان',
        subtitle: 'أخبرنا بطموحك. سيقوم ذكاؤنا الاصطناعي بتوليد منهج فريد لك.',
        placeholder: 'مثلاً: أريد بناء عميل سيارة ذاتية القيادة من الصفر',
        generate: 'توليد المسار',
        synthesizing: 'جاري التحليل...',
        milestones: 'محطات رئيسية',
        context: 'سياق عميق',
        contextDesc: 'يفهم ذكاؤنا الاصطناعي الفروق الدقيقة لكل دورة في كتالوجنا.',
        goal: 'موجه نحو الهدف',
        goalDesc: 'سواء كان تغييراً في المسار المهني أو مشروعاً محدداً، المسار مصمم لك.',
        efficiency: 'تعلم فعال',
        efficiencyDesc: 'نحن نزيل الضوضاء ونركز فقط على الأفضل.',
        note: 'ملاحظة: هذه الميزة مدعومة بواسطة Gemini 3 Flash وهي مجانية للاستخدام.'
      },
      universities: {
        label: 'المراكز المؤسسية',
        title: 'الجامعات',
        subtitle: 'نحن نختار من أرقى المؤسسات في العالم.',
        featured: 'الموارد المميزة',
        official: 'الروابط الرسمية'
      },
      footer: {
        curatedBy: 'بإشراف',
        license: 'منشور تحت رخصة MIT',
        rights: 'The One التحريرية'
      },
      common: {
        back: 'رجوع',
        view: 'عرض',
        forWhom: 'لمن هذا',
        level: 'المستوى',
        format: 'الصيغة',
        certificate: 'الشهادة',
        prerequisites: 'المتطلبات المسبقة',
        duration: 'المدة',
        source: 'المصدر'
      }
    }
  },
  es: {
    translation: {
      nav: {
        catalog: 'Catálogo',
        roadmaps: 'Rutas',
        projects: 'Proyectos',
        aiPath: 'Ruta IA',
        universities: 'Universidades'
      },
      hero: {
        title: 'El camino curado hacia la maestría.',
        subtitle: 'Indexamos solo los recursos educativos de mayor calidad de las principales instituciones del mundo. Sin ruido, solo lo mejor.'
      },
      search: {
        placeholder: 'Buscar recursos...',
        clear: 'Limpiar',
        allUnis: 'Todas las universidades',
        allTopics: 'Todos los temas',
        levels: {
          all: 'Todos los niveles',
          intro: 'Principiante',
          intermediate: 'Intermedio',
          advanced: 'Sénior'
        },
        domains: {
          all: 'Todos',
          systems: 'Sistemas',
          cs: 'Informática',
          math: 'Matemáticas',
          ai: 'IA',
          ml: 'Aprendizaje Automático',
          dl: 'Aprendizaje Profundo',
          ds: 'Ciencia de Datos',
          da: 'Análisis de Datos',
          nlp: 'PLN',
          cv: 'Visión Artificial'
        }
      },
      projects: {
        label: 'Creador de Portafolio',
        title: 'Biblioteca de Proyectos',
        subtitle: 'Convierte tu aprendizaje en resultados tangibles. Cada proyecto está diseñado para ser una adición significativa a tu portafolio.',
        steps: 'Pasos',
        tools: 'Herramientas sugeridas',
        dod: 'Definición de Terminado',
        role: 'Enfoque de Rol',
        mustOnCV: 'Esencial CV',
        roles: {
          junior: 'Junior',
          senior: 'Sénior',
          manager: 'Líder/Manager'
        }
      },
      roadmaps: {
        label: 'Función Especial',
        title: 'Rutas Guiadas hacia la Maestría',
        subtitle: 'No solo recolectes recursos. Sigue una secuencia estructurada diseñada por expertos.',
        weeklyPlan: 'Plan Semanal',
        methodology: 'Metodología',
        capstone: 'Proyecto Final',
        executionSteps: 'Pasos de Ejecución',
        dod: 'Definición de Terminado',
        options: 'Opciones para Elegir',
        week: 'Semana'
      },
      courses: {
        review: 'Reseña Editorial',
        guide: 'Guía de Estudio',
        projects: 'Proyectos Post-Curso',
        resources: 'Recursos',
        site: 'Sitio Oficial',
        playlist: 'Lista de YouTube',
        notes: 'Notas del Curso'
      },
      ai: {
        label: 'Guía Potenciada por IA',
        title: 'Tu Ruta Personalizada hacia la Maestría',
        subtitle: 'Dinos tu ambición. Nuestra IA sintetizará un currículo único.',
        placeholder: 'ej: Quiero construir un agente de coche autónomo desde cero',
        generate: 'Generar Ruta',
        synthesizing: 'Sintetizando...',
        milestones: 'Hitos',
        context: 'Contexto Profundo',
        contextDesc: 'Nuestra IA entiende los matices específicos de cada curso en nuestro catálogo.',
        goal: 'Orientado a Metas',
        goalDesc: 'Ya sea un cambio de carrera o un proyecto específico, la ruta está hecha a medida.',
        efficiency: 'Aprendizaje Eficiente',
        efficiencyDesc: 'Eliminamos el ruido y nos enfocamos solo en lo mejor.',
        note: 'Nota: Esta función utiliza Gemini 3 Flash y es gratuita.'
      },
      universities: {
        label: 'Centros Institucionales',
        title: 'Las Universidades',
        subtitle: 'Seleccionamos de las instituciones más prestigiosas del mundo.',
        featured: 'Recursos Destacados',
        official: 'Enlaces Oficiales'
      },
      footer: {
        curatedBy: 'Curado por',
        license: 'Lanzado bajo la licencia MIT',
        rights: 'The One Editorial'
      },
      common: {
        back: 'Volver',
        view: 'Ver',
        forWhom: 'Para quién',
        level: 'Nivel',
        format: 'Formato',
        certificate: 'Certificado',
        prerequisites: 'Prerrequisitos',
        duration: 'Duración',
        source: 'Institución'
      }
    }
  },
  it: {
    translation: {
      nav: {
        catalog: 'Catalogo',
        roadmaps: 'Percorsi',
        projects: 'Progetti',
        aiPath: 'Percorso IA',
        universities: 'Università'
      },
      hero: {
        title: 'Il percorso curato verso la maestria.',
        subtitle: 'Indicizziamo solo le risorse educative di più alto livello delle principali istituzioni mondiali. Niente rumore, solo il meglio.'
      },
      search: {
        placeholder: 'Cerca risorse...',
        clear: 'Cancella',
        allUnis: 'Tutte le università',
        allTopics: 'Tutti gli argomenti',
        levels: {
          all: 'Tutti i livelli',
          intro: 'Principiante',
          intermediate: 'Intermedio',
          advanced: 'Avanzato'
        },
        domains: {
          all: 'Tutti',
          systems: 'Sistemi',
          cs: 'Informatica',
          math: 'Matematica',
          ai: 'IA',
          ml: 'Apprendimento Automatico',
          dl: 'Deep Learning',
          ds: 'Scienza dei Dati',
          da: 'Analisi dei Dati',
          nlp: 'TAL',
          cv: 'Visione Artificiale'
        }
      },
      projects: {
        label: 'Costruttore di Portfolio',
        title: 'L\'Archivio dei Progetti',
        subtitle: 'Trasforma il tuo apprendimento in risultati tangibili. Ogni progetto è pensato per arricchire il tuo portfolio.',
        steps: 'Passaggi',
        tools: 'Strumenti suggeriti',
        dod: 'Definizione di Completato',
        role: 'Focus del Ruolo',
        mustOnCV: 'Essenziale per CV',
        roles: {
          junior: 'Junior',
          senior: 'Senior',
          manager: 'Lead/Manager'
        }
      },
      roadmaps: {
        label: 'Funzione Speciale',
        title: 'Percorsi Guidati verso la Maestria',
        subtitle: 'Non limitarti a raccogliere risorse. Segui una sequenza strutturata progettata da esperti.',
        weeklyPlan: 'Il Piano Settimanale',
        methodology: 'Metodologia',
        capstone: 'Progetto Finale',
        executionSteps: 'Passaggi di Esecuzione',
        dod: 'Definizione di Completato',
        options: 'Opzioni a Scelta',
        week: 'Settimana'
      },
      courses: {
        review: 'Recensione Editoriale',
        guide: 'Guida allo Studio',
        projects: 'Progetti Post-Corso',
        resources: 'Risorse',
        site: 'Sito Ufficiale',
        playlist: 'Playlist YouTube',
        notes: 'Note del Corso'
      },
      ai: {
        label: 'Guida Potenziata dall\'IA',
        title: 'Il Tuo Percorso Personalizzato',
        subtitle: 'Raccontaci la tua ambizione. La nostra IA sintetizzerà un curriculum unico.',
        placeholder: 'es: Voglio costruire un agente per auto a guida autonoma da zero',
        generate: 'Genera Percorso',
        synthesizing: 'Sintetizzando...',
        milestones: 'Traguardi',
        context: 'Contesto Approfondito',
        contextDesc: 'La nostra IA comprende le sfumature specifiche di ogni corso nel nostro catalogo.',
        goal: 'Orientato agli Obiettivi',
        goalDesc: 'Che si tratti di un cambio di carriera o di un progetto specifico, il percorso è su misura.',
        efficiency: 'Apprendimento Efficiente',
        efficiencyDesc: 'Eliminiamo il rumore e ci concentriamo solo sul meglio.',
        note: 'Nota: Questa funzione è alimentata da Gemini 3 Flash ed è gratuita.'
      },
      universities: {
        label: 'Centri Istituzionali',
        title: 'Le Università',
        subtitle: 'Selezioniamo le istituzioni più prestigiose al mondo.',
        featured: 'Risorse In Evidenza',
        official: 'Link Ufficiali'
      },
      footer: {
        curatedBy: 'A cura di',
        license: 'Rilasciato sotto licenza MIT',
        rights: 'The One Editoriale'
      },
      common: {
        back: 'Indietro',
        view: 'Vedi',
        forWhom: 'Per chi',
        level: 'Livello',
        format: 'Formato',
        certificate: 'Certificato',
        prerequisites: 'Prerequisiti',
        duration: 'Durata',
        source: 'Istituzione'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
