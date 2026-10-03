// ============================================================
// LANGUAGE / TRANSLATION SYSTEM
// ============================================================

let currentLang = localStorage.getItem("eliteItalyLang") || "en";

const TRANSLATIONS = {
    en: {
        nav_home: "Home",
        nav_universities: "Universities",
        nav_admissions: "Admissions",
        nav_ielts: "IELTS Prep",
        nav_services: "Services",
        nav_pricing: "Pricing",
        nav_apply: "Apply",

        hero_title: "Study in Italy's Top Universities",
        hero_subtitle: "Your Complete Guide to Admission, IELTS Prep & Premium Application Services",
        hero_btn_explore: "Explore Universities →",
        hero_btn_stories: "Success Stories →",

        stat_admissions: "Successful Admissions",
        stat_success_rate: "Success Rate",
        stat_partner_unis: "Partner Universities",
        stat_years_exp: "Years Experience",

        how_it_works_title: "How It Works",
        step1_title: "Step 1: Consultation",
        step1_desc: "Free initial assessment of your profile, goals, and eligibility for Italian universities.",
        step2_title: "Step 2: University Match",
        step2_desc: "We identify 5-7 universities that match your academic profile and preferences.",
        step3_title: "Step 3: Application",
        step3_desc: "Our experts handle all documentation, essays, and application submissions.",
        step4_title: "Step 4: Admission",
        step4_desc: "Get multiple acceptances and choose your ideal university with our guidance.",

        unis_title: "Top Italian Universities",
        filter_ielts_label: "Filter by IELTS:",
        filter_all: "All Universities",
        filter_required: "IELTS Required",
        filter_not_required: "IELTS Not Required",
        filter_max_fee_label: "Max Application Fee:",
        reset_filters_btn: "Reset Filters",

        uni_location: "📍 Location:",
        uni_opens: "📅 Applications Open:",
        uni_closes: "⏰ Applications Close:",
        uni_fee: "💳 Application Fee:",
        uni_programs: "🎓 Programs:",
        uni_majors: "📚 Popular Majors:",
        uni_get_info_btn: "Get Info & Apply",

        admissions_title: "Success Stories & Admissions",
        admissions_subtitle: "Meet our students who have been successfully admitted to Italy's top universities",
        filter_all_unis: "All Universities",
        filter_masters: "Master's Degree",
        filter_bachelor: "Bachelor's Degree",
        admission_click_hint: "Click to enlarge",
        admission_program_label: "Program:",
        admission_type_label: "Type:",
        admission_year_label: "Year:",
        admission_status_verified: "Verified",
        admission_year_prefix: "Admission",
        admission_letter_badge: "Admission Letter",
        admission_masters_badge: "Master's",
        country_algeria: "Algeria",
        degree_master: "Master",
        degree_bachelor: "Bachelor",
        student_from_algeria: "Student from Algeria",

        ielts_title: "IELTS Preparation Resources",
        ielts_subtitle: "Prepare for your IELTS exam with the best platforms and courses available",
        ielts_table_title: "IELTS Score Requirements by University",
        ielts_table_uni: "University",
        ielts_table_score: "Minimum IELTS Score",
        ielts_table_level: "Degree Level",
        resource_learn_more: "Learn More →",

        services_title: "Our Premium Services",
        service1_title: "Document Preparation",
        service1_desc: "Complete assistance with statement of purpose, letters of recommendation, academic transcripts, and all required documents.",
        service2_title: "Application Submission",
        service2_desc: "We submit applications to multiple universities simultaneously, tracking all deadlines and requirements.",
        service3_title: "Legalisation Guidance",
        service3_desc: "Not sure which documents need an apostille? We do. We review your situation and identify exactly which certificates, diplomas, and transcripts require legalization for your universities. We guide you step by step how to legalize your documents (Apostille).",
        service4_title: "Visa Assistance",
        service4_desc: "Complete guidance on student visa application, accommodation, and relocation to Italy.",
        service5_title: "24/7 Support",
        service5_desc: "Dedicated support throughout your journey - before, during, and after your admission.",
        service6_title: "Career Guidance",
        service6_desc: "Post-graduation support including internship placement and career counseling.",

        pricing_title: "Transparent Pricing",
        price_starter_title: "Starter Package",
        price_starter_desc: "Perfect for self-motivated students",
        price_starter_period: "/one-time",
        price_starter_btn: "Get Started",
        price_complete_badge: "Most Popular",
        price_complete_title: "Complete Package",
        price_complete_desc: "Full end-to-end assistance",
        price_complete_period: "/all-inclusive",
        price_complete_btn: "Enroll Now",
        price_premium_title: "Premium Plus",
        price_premium_desc: "Personalized elite service",
        price_premium_period: "/all-inclusive",
        price_premium_btn: "Get Elite Service",

        f_starter_1: "University Selection Consultation",
        f_starter_2: "Profile Review & Assessment",
        f_starter_3: "Document Checklist",
        f_starter_4: "Application Timeline",
        f_starter_5: "Email Support",

        f_complete_1: "Applications to 5-7 Universities",
        f_complete_2: "Complete Document Preparation",
        f_complete_3: "All Application Submissions",
        f_complete_4: "Essay & SOP Writing",
        f_complete_5: "Interview Preparation",
        f_complete_6: "Scholarship Negotiation",
        f_complete_7: "24/7 Phone & Email Support",
        f_complete_8: "Visa Assistance",

        f_premium_1: "Everything in Complete Package",
        f_premium_2: "Applications to 8-10 Universities",
        f_premium_3: "Scholarship Guarantee Consultation",
        f_premium_4: "Personal Advisor (Direct Access)",
        f_premium_5: "LinkedIn Profile Optimization",
        f_premium_6: "Career Placement Support",
        f_premium_7: "Post-Admission Relocation Help",
        f_premium_8: "3-Month Free Tutoring",

        additional_services_title: "Additional Services (À La Carte)",
        ielts_coaching_label: "IELTS Coaching:",
        ielts_coaching_val: "€30/per Week",
        interview_prep_label: "Interview Prep:",
        interview_prep_val: "Free",
        visa_assistance_label: "Visa Assistance:",
        visa_assistance_val: "€30",
        accommodation_help_label: "Accommodation Help:",
        accommodation_help_val: "For free",

        contact_title: "Get in Touch & Select Your Universities",
        personal_info_title: "Personal Information",
        label_fullname: "Full Name *",
        label_email: "Email Address *",
        label_phone: "Phone Number",
        label_academic_level: "Academic Level *",
        select_placeholder: "Select...",
        level_bachelor: "Bachelor's Degree",
        level_master: "Master's Degree",
        level_phd: "PhD",
        label_package: "Interested Package *",
        package_starter: "Starter Package",
        package_complete: "Complete Package",
        package_premium: "Premium Plus",

        select_unis_title: "Select Universities & Majors",
        filter_ielts_req_label: "Filter by IELTS Requirement:",
        filter_cities_label: "Filter by Cities (Select Multiple):",
        clear_city_filters_btn: "Clear City Filters",
        choose_unis_title: "Choose Universities (Select at least 1) *",
        selected_unis_label: "Selected Universities:",
        no_ielts_required: "No IELTS Required",

        select_majors_title: "Select Interested Majors",
        no_majors_msg: "Select universities above to see available majors",
        selected_majors_label: "Selected Majors:",

        additional_info_title: "Additional Information",
        label_tell_us: "Tell us about yourself *",
        textarea_placeholder: "Your background, goals, why you want to study in Italy, and your field of interest...",
        agree_terms_label: "I agree to be contacted about my application *",
        submit_btn: "Submit Application",

        other_ways_title: "Other Ways to Reach Us",
        email_label: "Email",
        phone_label: "Phone",
        office_label: "Office",
        office_available: "Available Worldwide",
        hours_label: "Hours",
        hours_weekdays: "Mon-Fri: 9 AM - 6 PM CET",
        hours_saturday: "Sat: 10 AM - 4 PM CET",

        footer_about_title: "About Elite Italy",
        footer_about_text: "Leading education consultant for Italy's top universities. 15+ years of expertise helping international students achieve their dreams.",
        footer_quick_links: "Quick Links",
        footer_home: "Home",
        footer_universities: "Universities",
        footer_stories: "Success Stories",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_resources_title: "Resources",
        footer_ielts_guide: "IELTS Guide",
        footer_visa_info: "Visa Information",
        footer_accommodation: "Accommodation",
        footer_faq: "FAQ",
        footer_follow_title: "Follow Us",
        footer_copyright: "© 2024 Elite Italy - All Rights Reserved",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",

        sending_application: "Sending your application...",
        application_success: "✅ Your application has been sent successfully!",
        application_error: "❌ Failed to send application. Please try again.",
        select_uni_alert: "Please select at least one university to apply to.",
        application_problem_alert: "There was a problem sending your application. Please try again."
    },

    fr: {
        nav_home: "Accueil",
        nav_universities: "Universités",
        nav_admissions: "Admissions",
        nav_ielts: "Préparation IELTS",
        nav_services: "Services",
        nav_pricing: "Tarifs",
        nav_apply: "Postuler",

        hero_title: "Étudiez dans les Meilleures Universités d'Italie",
        hero_subtitle: "Votre guide complet pour l'admission, la préparation à l'IELTS et des services d'inscription haut de gamme",
        hero_btn_explore: "Explorer les Universités →",
        hero_btn_stories: "Témoignages de Réussite →",

        stat_admissions: "Admissions Réussies",
        stat_success_rate: "Taux de Réussite",
        stat_partner_unis: "Universités Partenaires",
        stat_years_exp: "Années d'Expérience",

        how_it_works_title: "Comment ça Marche",
        step1_title: "Étape 1 : Consultation",
        step1_desc: "Évaluation initiale gratuite de votre profil, de vos objectifs et de votre éligibilité aux universités italiennes.",
        step2_title: "Étape 2 : Sélection des Universités",
        step2_desc: "Nous identifions 5 à 7 universités correspondant à votre profil académique et à vos préférences.",
        step3_title: "Étape 3 : Candidature",
        step3_desc: "Nos experts gèrent tous les documents, essais et soumissions de candidatures.",
        step4_title: "Étape 4 : Admission",
        step4_desc: "Obtenez plusieurs admissions et choisissez votre université idéale avec notre accompagnement.",

        unis_title: "Meilleures Universités Italiennes",
        filter_ielts_label: "Filtrer par IELTS :",
        filter_all: "Toutes les Universités",
        filter_required: "IELTS Requis",
        filter_not_required: "IELTS Non Requis",
        filter_max_fee_label: "Frais de Candidature Max :",
        reset_filters_btn: "Réinitialiser les Filtres",

        uni_location: "📍 Localisation :",
        uni_opens: "📅 Ouverture des Candidatures :",
        uni_closes: "⏰ Clôture des Candidatures :",
        uni_fee: "💳 Frais de Candidature :",
        uni_programs: "🎓 Programmes :",
        uni_majors: "📚 Filières Populaires :",
        uni_get_info_btn: "Infos & Candidater",

        admissions_title: "Témoignages de Réussite & Admissions",
        admissions_subtitle: "Découvrez nos étudiants admis avec succès dans les meilleures universités d'Italie",
        filter_all_unis: "Toutes les Universités",
        filter_masters: "Master",
        filter_bachelor: "Licence",
        admission_click_hint: "Cliquez pour agrandir",
        admission_program_label: "Programme :",
        admission_type_label: "Type :",
        admission_year_label: "Année :",
        admission_status_verified: "Vérifié",
        admission_year_prefix: "Admission",
        admission_letter_badge: "Lettre d'Admission",
        admission_masters_badge: "Master",
        country_algeria: "Algérie",
        degree_master: "Master",
        degree_bachelor: "Licence",
        student_from_algeria: "Étudiant d'Algérie",

        ielts_title: "Ressources de Préparation IELTS",
        ielts_subtitle: "Préparez votre examen IELTS avec les meilleures plateformes et cours disponibles",
        ielts_table_title: "Scores IELTS Requis par Université",
        ielts_table_uni: "Université",
        ielts_table_score: "Score IELTS Minimum",
        ielts_table_level: "Niveau du Diplôme",
        resource_learn_more: "En Savoir Plus →",

        services_title: "Nos Services Premium",
        service1_title: "Préparation des Documents",
        service1_desc: "Assistance complète pour la lettre de motivation, les lettres de recommandation, les relevés de notes et tous les documents requis.",
        service2_title: "Soumission des Candidatures",
        service2_desc: "Nous soumettons les candidatures à plusieurs universités simultanément, en suivant toutes les échéances et exigences.",
        service3_title: "Accompagnement à la Légalisation",
        service3_desc: "Vous ne savez pas quels documents nécessitent une apostille ? Nous, oui. Nous examinons votre situation et identifions exactement quels certificats, diplômes et relevés de notes doivent être légalisés pour vos universités. Nous vous guidons étape par étape pour légaliser vos documents (Apostille).",
        service4_title: "Assistance Visa",
        service4_desc: "Accompagnement complet pour la demande de visa étudiant, l'hébergement et l'installation en Italie.",
        service5_title: "Support 24/7",
        service5_desc: "Un accompagnement dédié tout au long de votre parcours - avant, pendant et après votre admission.",
        service6_title: "Orientation de Carrière",
        service6_desc: "Accompagnement après l'obtention du diplôme, y compris le placement en stage et le conseil de carrière.",

        pricing_title: "Tarification Transparente",
        price_starter_title: "Forfait Starter",
        price_starter_desc: "Idéal pour les étudiants autonomes",
        price_starter_period: "/paiement unique",
        price_starter_btn: "Commencer",
        price_complete_badge: "Le Plus Populaire",
        price_complete_title: "Forfait Complet",
        price_complete_desc: "Assistance complète de bout en bout",
        price_complete_period: "/tout inclus",
        price_complete_btn: "S'inscrire Maintenant",
        price_premium_title: "Premium Plus",
        price_premium_desc: "Service élite personnalisé",
        price_premium_period: "/tout inclus",
        price_premium_btn: "Obtenir le Service Élite",

        f_starter_1: "Consultation pour le Choix des Universités",
        f_starter_2: "Évaluation du Profil",
        f_starter_3: "Liste des Documents Requis",
        f_starter_4: "Calendrier de Candidature",
        f_starter_5: "Support par Email",

        f_complete_1: "Candidatures à 5-7 Universités",
        f_complete_2: "Préparation Complète des Documents",
        f_complete_3: "Toutes les Soumissions de Candidatures",
        f_complete_4: "Rédaction d'Essais & Lettre de Motivation",
        f_complete_5: "Préparation aux Entretiens",
        f_complete_6: "Négociation de Bourses",
        f_complete_7: "Support Téléphonique & Email 24/7",
        f_complete_8: "Assistance Visa",

        f_premium_1: "Tout le Forfait Complet",
        f_premium_2: "Candidatures à 8-10 Universités",
        f_premium_3: "Consultation Garantie de Bourse",
        f_premium_4: "Conseiller Personnel (Accès Direct)",
        f_premium_5: "Optimisation du Profil LinkedIn",
        f_premium_6: "Aide au Placement de Carrière",
        f_premium_7: "Aide à la Relocalisation Post-Admission",
        f_premium_8: "3 Mois de Tutorat Gratuit",

        additional_services_title: "Services Supplémentaires (À la Carte)",
        ielts_coaching_label: "Coaching IELTS :",
        ielts_coaching_val: "30€/semaine",
        interview_prep_label: "Préparation aux Entretiens :",
        interview_prep_val: "Gratuit",
        visa_assistance_label: "Assistance Visa :",
        visa_assistance_val: "30€",
        accommodation_help_label: "Aide au Logement :",
        accommodation_help_val: "Gratuit",

        contact_title: "Contactez-Nous & Sélectionnez Vos Universités",
        personal_info_title: "Informations Personnelles",
        label_fullname: "Nom Complet *",
        label_email: "Adresse Email *",
        label_phone: "Numéro de Téléphone",
        label_academic_level: "Niveau Académique *",
        select_placeholder: "Sélectionner...",
        level_bachelor: "Licence",
        level_master: "Master",
        level_phd: "Doctorat",
        label_package: "Forfait Souhaité *",
        package_starter: "Forfait Starter",
        package_complete: "Forfait Complet",
        package_premium: "Premium Plus",

        select_unis_title: "Sélectionnez les Universités et Filières",
        filter_ielts_req_label: "Filtrer par Exigence IELTS :",
        filter_cities_label: "Filtrer par Villes (Sélection Multiple) :",
        clear_city_filters_btn: "Effacer les Filtres de Ville",
        choose_unis_title: "Choisissez les Universités (Au moins 1) *",
        selected_unis_label: "Universités Sélectionnées :",
        no_ielts_required: "IELTS Non Requis",

        select_majors_title: "Sélectionnez les Filières qui Vous Intéressent",
        no_majors_msg: "Sélectionnez des universités ci-dessus pour voir les filières disponibles",
        selected_majors_label: "Filières Sélectionnées :",

        additional_info_title: "Informations Complémentaires",
        label_tell_us: "Parlez-nous de vous *",
        textarea_placeholder: "Votre parcours, vos objectifs, pourquoi vous souhaitez étudier en Italie, et votre domaine d'intérêt...",
        agree_terms_label: "J'accepte d'être contacté(e) concernant ma candidature *",
        submit_btn: "Soumettre la Candidature",

        other_ways_title: "Autres Moyens de Nous Contacter",
        email_label: "Email",
        phone_label: "Téléphone",
        office_label: "Bureau",
        office_available: "Disponible dans le Monde Entier",
        hours_label: "Horaires",
        hours_weekdays: "Lun-Ven : 9h - 18h CET",
        hours_saturday: "Sam : 10h - 16h CET",

        footer_about_title: "À Propos d'Elite Italy",
        footer_about_text: "Premier cabinet de conseil éducatif pour les meilleures universités d'Italie. Plus de 15 ans d'expertise pour aider les étudiants internationaux à réaliser leurs rêves.",
        footer_quick_links: "Liens Rapides",
        footer_home: "Accueil",
        footer_universities: "Universités",
        footer_stories: "Témoignages",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_resources_title: "Ressources",
        footer_ielts_guide: "Guide IELTS",
        footer_visa_info: "Informations Visa",
        footer_accommodation: "Hébergement",
        footer_faq: "FAQ",
        footer_follow_title: "Suivez-Nous",
        footer_copyright: "© 2024 Elite Italy - Tous Droits Réservés",
        footer_privacy: "Politique de Confidentialité",
        footer_terms: "Conditions d'Utilisation",

        sending_application: "Envoi de votre candidature...",
        application_success: "✅ Votre candidature a été envoyée avec succès !",
        application_error: "❌ Échec de l'envoi de la candidature. Veuillez réessayer.",
        select_uni_alert: "Veuillez sélectionner au moins une université.",
        application_problem_alert: "Un problème est survenu lors de l'envoi de votre candidature. Veuillez réessayer."
    },

    ar: {
        nav_home: "الرئيسية",
        nav_universities: "الجامعات",
        nav_admissions: "القبولات",
        nav_ielts: "تحضير الآيلتس",
        nav_services: "الخدمات",
        nav_pricing: "الأسعار",
        nav_apply: "قدّم الآن",

        hero_title: "ادرس في أفضل الجامعات الإيطالية",
        hero_subtitle: "دليلك الشامل للقبول، والتحضير للآيلتس، وخدمات التسجيل المميزة",
        hero_btn_explore: "← استكشف الجامعات",
        hero_btn_stories: "← قصص النجاح",

        stat_admissions: "قبول ناجح",
        stat_success_rate: "نسبة النجاح",
        stat_partner_unis: "جامعة شريكة",
        stat_years_exp: "سنوات خبرة",

        how_it_works_title: "كيف تعمل الخدمة",
        step1_title: "الخطوة 1: الاستشارة",
        step1_desc: "تقييم أولي مجاني لملفك وأهدافك ومدى أهليتك للالتحاق بالجامعات الإيطالية.",
        step2_title: "الخطوة 2: اختيار الجامعات",
        step2_desc: "نحدد لك 5 إلى 7 جامعات تناسب ملفك الأكاديمي وتفضيلاتك.",
        step3_title: "الخطوة 3: التقديم",
        step3_desc: "يتولى خبراؤنا جميع الوثائق والمقالات وإرسال طلبات التسجيل.",
        step4_title: "الخطوة 4: القبول",
        step4_desc: "احصل على عدة قبولات واختر جامعتك المثالية بمساعدتنا.",

        unis_title: "أفضل الجامعات الإيطالية",
        filter_ielts_label: "تصفية حسب الآيلتس:",
        filter_all: "جميع الجامعات",
        filter_required: "الآيلتس مطلوب",
        filter_not_required: "الآيلتس غير مطلوب",
        filter_max_fee_label: "الحد الأقصى لرسوم التسجيل:",
        reset_filters_btn: "إعادة ضبط الفلاتر",

        uni_location: "📍 الموقع:",
        uni_opens: "📅 فتح باب التسجيل:",
        uni_closes: "⏰ إغلاق باب التسجيل:",
        uni_fee: "💳 رسوم التسجيل:",
        uni_programs: "🎓 البرامج:",
        uni_majors: "📚 التخصصات الشائعة:",
        uni_get_info_btn: "معلومات وتقديم",

        admissions_title: "قصص النجاح والقبولات",
        admissions_subtitle: "تعرّف على طلابنا الذين تم قبولهم بنجاح في أفضل الجامعات الإيطالية",
        filter_all_unis: "جميع الجامعات",
        filter_masters: "درجة الماجستير",
        filter_bachelor: "درجة البكالوريوس",
        admission_click_hint: "اضغط للتكبير",
        admission_program_label: "البرنامج:",
        admission_type_label: "النوع:",
        admission_year_label: "السنة:",
        admission_status_verified: "موثّق",
        admission_year_prefix: "قبول",
        admission_letter_badge: "رسالة القبول",
        admission_masters_badge: "ماجستير",
        country_algeria: "الجزائر",
        degree_master: "ماجستير",
        degree_bachelor: "بكالوريوس",
        student_from_algeria: "طالب من الجزائر",

        ielts_title: "موارد التحضير للآيلتس",
        ielts_subtitle: "استعد لامتحان الآيلتس مع أفضل المنصات والدورات المتاحة",
        ielts_table_title: "الحد الأدنى لدرجة الآيلتس حسب الجامعة",
        ielts_table_uni: "الجامعة",
        ielts_table_score: "الحد الأدنى لدرجة الآيلتس",
        ielts_table_level: "المستوى الدراسي",
        resource_learn_more: "← اعرف المزيد",

        services_title: "خدماتنا المميزة",
        service1_title: "تحضير الوثائق",
        service1_desc: "مساعدة كاملة في كتابة خطاب الدافع، ورسائل التوصية، والسجلات الأكاديمية، وجميع الوثائق المطلوبة.",
        service2_title: "إرسال طلبات التسجيل",
        service2_desc: "نقوم بإرسال طلبات التسجيل إلى عدة جامعات في آن واحد، مع متابعة جميع المواعيد والمتطلبات.",
        service3_title: "إرشادات التصديق والتوثيق",
        service3_desc: "لست متأكداً أي الوثائق تحتاج إلى ختم أبوستيل؟ نحن نعرف. نراجع وضعك ونحدد بدقة أي الشهادات والدبلومات والسجلات تحتاج إلى تصديق لجامعاتك، ونرشدك خطوة بخطوة لتصديق وثائقك (أبوستيل).",
        service4_title: "المساعدة في التأشيرة",
        service4_desc: "إرشاد كامل حول طلب تأشيرة الطالب والسكن والانتقال إلى إيطاليا.",
        service5_title: "دعم على مدار الساعة",
        service5_desc: "دعم مخصص طوال رحلتك - قبل وأثناء وبعد قبولك.",
        service6_title: "التوجيه المهني",
        service6_desc: "دعم بعد التخرج يشمل التنسيق للتدريب المهني والاستشارة المهنية.",

        pricing_title: "أسعار شفافة",
        price_starter_title: "الباقة الأساسية",
        price_starter_desc: "مثالية للطلاب المستقلين",
        price_starter_period: "/دفعة واحدة",
        price_starter_btn: "ابدأ الآن",
        price_complete_badge: "الأكثر طلباً",
        price_complete_title: "الباقة الكاملة",
        price_complete_desc: "مساعدة شاملة من البداية إلى النهاية",
        price_complete_period: "/شاملة كل شيء",
        price_complete_btn: "سجّل الآن",
        price_premium_title: "بريميوم بلس",
        price_premium_desc: "خدمة نخبوية مخصصة",
        price_premium_period: "/شاملة كل شيء",
        price_premium_btn: "احصل على الخدمة النخبوية",

        f_starter_1: "استشارة اختيار الجامعة",
        f_starter_2: "مراجعة وتقييم الملف",
        f_starter_3: "قائمة الوثائق المطلوبة",
        f_starter_4: "الجدول الزمني للتقديم",
        f_starter_5: "الدعم عبر البريد الإلكتروني",

        f_complete_1: "التقديم إلى 5-7 جامعات",
        f_complete_2: "تحضير كامل للوثائق",
        f_complete_3: "إرسال جميع طلبات التسجيل",
        f_complete_4: "كتابة المقالات وخطاب الدافع",
        f_complete_5: "التحضير للمقابلات",
        f_complete_6: "التفاوض على المنح الدراسية",
        f_complete_7: "دعم هاتفي وبريدي على مدار الساعة",
        f_complete_8: "المساعدة في التأشيرة",

        f_premium_1: "كل ما في الباقة الكاملة",
        f_premium_2: "التقديم إلى 8-10 جامعات",
        f_premium_3: "استشارة ضمان المنحة الدراسية",
        f_premium_4: "مستشار شخصي (وصول مباشر)",
        f_premium_5: "تحسين ملف LinkedIn",
        f_premium_6: "دعم التوظيف المهني",
        f_premium_7: "مساعدة في الانتقال بعد القبول",
        f_premium_8: "3 أشهر دروس خصوصية مجانية",

        additional_services_title: "خدمات إضافية (حسب الطلب)",
        ielts_coaching_label: "تدريب الآيلتس:",
        ielts_coaching_val: "30€ / أسبوع",
        interview_prep_label: "التحضير للمقابلة:",
        interview_prep_val: "مجاني",
        visa_assistance_label: "المساعدة في التأشيرة:",
        visa_assistance_val: "30€",
        accommodation_help_label: "المساعدة في السكن:",
        accommodation_help_val: "مجاني",

        contact_title: "تواصل معنا واختر جامعاتك",
        personal_info_title: "المعلومات الشخصية",
        label_fullname: "الاسم الكامل *",
        label_email: "البريد الإلكتروني *",
        label_phone: "رقم الهاتف",
        label_academic_level: "المستوى الدراسي *",
        select_placeholder: "اختر...",
        level_bachelor: "درجة البكالوريوس",
        level_master: "درجة الماجستير",
        level_phd: "دكتوراه",
        label_package: "الباقة المطلوبة *",
        package_starter: "الباقة الأساسية",
        package_complete: "الباقة الكاملة",
        package_premium: "بريميوم بلس",

        select_unis_title: "اختر الجامعات والتخصصات",
        filter_ielts_req_label: "تصفية حسب متطلبات الآيلتس:",
        filter_cities_label: "تصفية حسب المدن (اختيار متعدد):",
        clear_city_filters_btn: "مسح فلاتر المدن",
        choose_unis_title: "اختر الجامعات (اختر واحدة على الأقل) *",
        selected_unis_label: "الجامعات المختارة:",
        no_ielts_required: "الآيلتس غير مطلوب",

        select_majors_title: "اختر التخصصات التي تهمك",
        no_majors_msg: "اختر الجامعات أعلاه لرؤية التخصصات المتاحة",
        selected_majors_label: "التخصصات المختارة:",

        additional_info_title: "معلومات إضافية",
        label_tell_us: "أخبرنا عن نفسك *",
        textarea_placeholder: "خلفيتك، أهدافك، لماذا تريد الدراسة في إيطاليا، ومجال اهتمامك...",
        agree_terms_label: "أوافق على التواصل معي بخصوص طلبي *",
        submit_btn: "إرسال الطلب",

        other_ways_title: "طرق أخرى للتواصل معنا",
        email_label: "البريد الإلكتروني",
        phone_label: "الهاتف",
        office_label: "المكتب",
        office_available: "متوفر عالمياً",
        hours_label: "ساعات العمل",
        hours_weekdays: "الإثنين-الجمعة: 9 صباحاً - 6 مساءً بتوقيت وسط أوروبا",
        hours_saturday: "السبت: 10 صباحاً - 4 مساءً بتوقيت وسط أوروبا",

        footer_about_title: "عن إليت إيطاليا",
        footer_about_text: "الشركة الاستشارية التعليمية الرائدة لأفضل الجامعات الإيطالية. أكثر من 15 عاماً من الخبرة في مساعدة الطلاب الدوليين على تحقيق أحلامهم.",
        footer_quick_links: "روابط سريعة",
        footer_home: "الرئيسية",
        footer_universities: "الجامعات",
        footer_stories: "قصص النجاح",
        footer_services: "الخدمات",
        footer_contact: "تواصل معنا",
        footer_resources_title: "موارد",
        footer_ielts_guide: "دليل الآيلتس",
        footer_visa_info: "معلومات التأشيرة",
        footer_accommodation: "السكن",
        footer_faq: "الأسئلة الشائعة",
        footer_follow_title: "تابعنا",
        footer_copyright: "© 2024 إليت إيطاليا - جميع الحقوق محفوظة",
        footer_privacy: "سياسة الخصوصية",
        footer_terms: "شروط الخدمة",

        sending_application: "جارٍ إرسال طلبك...",
        application_success: "✅ تم إرسال طلبك بنجاح!",
        application_error: "❌ فشل إرسال الطلب. حاول مرة أخرى.",
        select_uni_alert: "الرجاء اختيار جامعة واحدة على الأقل للتقديم إليها.",
        application_problem_alert: "حدثت مشكلة أثناء إرسال طلبك. حاول مرة أخرى."
    }
};

function t(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.en[key] || key;
}

// Dictionary for translating major / program category words (used in university
// "majors" tags and the short "programs" summary string).
const MAJOR_MAP = {
    "Computer Science": { fr: "Informatique", ar: "علوم الحاسوب" },
    "Artificial Intelligence": { fr: "Intelligence Artificielle", ar: "الذكاء الاصطناعي" },
    "Data Science": { fr: "Science des Données", ar: "علم البيانات" },
    "Business Administration": { fr: "Administration des Affaires", ar: "إدارة الأعمال" },
    "International Relations": { fr: "Relations Internationales", ar: "العلاقات الدولية" },
    "Engineering": { fr: "Ingénierie", ar: "الهندسة" },
    "Medicine and Surgery": { fr: "Médecine et Chirurgie", ar: "الطب والجراحة" },
    "Law": { fr: "Droit", ar: "القانون" },
    "Economics": { fr: "Économie", ar: "الاقتصاد" },
    "Mechanical Engineering": { fr: "Génie Mécanique", ar: "الهندسة الميكانيكية" },
    "Civil Engineering": { fr: "Génie Civil", ar: "الهندسة المدنية" },
    "Architecture": { fr: "Architecture", ar: "العمارة" },
    "Computer Engineering": { fr: "Génie Informatique", ar: "هندسة الحاسوب" },
    "Automotive Engineering": { fr: "Génie Automobile", ar: "هندسة السيارات" },
    "Electronic Engineering": { fr: "Génie Électronique", ar: "الهندسة الإلكترونية" },
    "Electrical Engineering": { fr: "Génie Électrique", ar: "الهندسة الكهربائية" },
    "International Management": { fr: "Management International", ar: "الإدارة الدولية" },
    "Finance": { fr: "Finance", ar: "التمويل" },
    "International Economics and Management": { fr: "Économie et Management International", ar: "الاقتصاد والإدارة الدولية" },
    "Economics and Finance": { fr: "Économie et Finance", ar: "الاقتصاد والتمويل" },
    "Political Science": { fr: "Sciences Politiques", ar: "العلوم السياسية" },
    "Psychology": { fr: "Psychologie", ar: "علم النفس" },
    "Biomedical Engineering": { fr: "Génie Biomédical", ar: "الهندسة الطبية الحيوية" },
    "Biology": { fr: "Biologie", ar: "علم الأحياء" },
    "Chemistry": { fr: "Chimie", ar: "الكيمياء" },
    "Automation Engineering": { fr: "Génie de l'Automatisation", ar: "هندسة الأتمتة" },
    "Languages and Literature": { fr: "Langues et Littérature", ar: "اللغات والآداب" },
    "Medicine": { fr: "Médecine", ar: "الطب" },
    "Arts and Humanities": { fr: "Arts et Sciences Humaines", ar: "الآداب والعلوم الإنسانية" },
    "History": { fr: "Histoire", ar: "التاريخ" },
    "Aerospace Engineering": { fr: "Génie Aérospatial", ar: "هندسة الطيران والفضاء" },
    "Transportation Engineering": { fr: "Génie des Transports", ar: "هندسة النقل" },
    "Maritime Studies": { fr: "Études Maritimes", ar: "الدراسات البحرية" },
    "Tourism Management": { fr: "Gestion du Tourisme", ar: "إدارة السياحة" },
    "Robotics Engineering": { fr: "Génie Robotique", ar: "هندسة الروبوتات" },
    "Naval Engineering": { fr: "Génie Naval", ar: "الهندسة البحرية" },
    "Environmental Engineering": { fr: "Génie de l'Environnement", ar: "الهندسة البيئية" },
    "Physics": { fr: "Physique", ar: "الفيزياء" },
    "Mathematics": { fr: "Mathématiques", ar: "الرياضيات" },
    "Food Science": { fr: "Science Alimentaire", ar: "علوم الأغذية" },
    "Biotechnology": { fr: "Biotechnologie", ar: "التكنولوجيا الحيوية" },
    "Pharmaceutical Sciences": { fr: "Sciences Pharmaceutiques", ar: "العلوم الصيدلانية" },
    "Veterinary Medicine": { fr: "Médecine Vétérinaire", ar: "الطب البيطري" },
    "Cultural Heritage": { fr: "Patrimoine Culturel", ar: "التراث الثقافي" },
    "Agricultural Sciences": { fr: "Sciences Agricoles", ar: "العلوم الزراعية" },
    "Environmental Sciences": { fr: "Sciences de l'Environnement", ar: "العلوم البيئية" },
    "Telecommunications Engineering": { fr: "Génie des Télécommunications", ar: "هندسة الاتصالات" },
    "Humanities": { fr: "Sciences Humaines", ar: "العلوم الإنسانية" },
    "Sciences": { fr: "Sciences", ar: "العلوم" },
    "Technology": { fr: "Technologie", ar: "التكنولوجيا" },
    "Social Sciences": { fr: "Sciences Sociales", ar: "العلوم الاجتماعية" },
    "Arts": { fr: "Arts", ar: "الفنون" },
    "Literature": { fr: "Littérature", ar: "الأدب" },
    "Various programs": { fr: "Divers programmes", ar: "برامج متنوعة" }
};

function translateTerm(term) {
    const clean = term.trim();
    if (MAJOR_MAP[clean] && MAJOR_MAP[clean][currentLang]) {
        return MAJOR_MAP[clean][currentLang];
    }
    return clean;
}

function translateMajorsList(majorsArr) {
    if (currentLang === "en") return majorsArr;
    return majorsArr.map(m => translateTerm(m));
}

function translateProgramsString(str) {
    if (currentLang === "en" || !str) return str;
    const sep = currentLang === "ar" ? "، " : ", ";
    return str.split(",").map(part => translateTerm(part)).join(sep);
}

// ============================================================
// SET LANGUAGE / APPLY TRANSLATIONS TO STATIC PAGE
// ============================================================

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;

    currentLang = lang;
    localStorage.setItem("eliteItalyLang", lang);

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    translateStaticPage();
    refreshDynamicSections();
}

function translateStaticPage() {
     updateLangUI();
    // Text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });

    // Placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
}

function refreshDynamicSections() {
    const activeSection = document.querySelector(".section.active");
    const activeId = activeSection ? activeSection.id : null;

    if (activeId === "universities") {
        displayUniversities();
    }

    if (activeId === "admissions") {
        displayAdmissions();
    }

    if (activeId === "ielts") {
        displayResources();
    }

    if (activeId === "contact") {
        initializeContactSection();
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.documentElement.setAttribute("lang", currentLang);
    document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
    autoTagI18n();
    translateStaticPage();

    const savedSection =
        localStorage.getItem("eliteItalyCurrentSection");

    if (savedSection && document.getElementById(savedSection)) {

        showSection(savedSection, false);

    } else {

        showSection("home", false);

    }

});

// ========================================
// ADMISSION IMAGE ZOOM
// ========================================

let currentZoom = 1;

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;

function closeImageModal() {

    const modal = document.getElementById("imageModal");

    if (modal) {
        modal.style.display = "none";
    }

    document.body.style.overflow = "auto";

    currentZoom = 1;
}


function updateZoom() {

    const img = document.getElementById("modalImage");

    img.style.transform = `scale(${currentZoom})`;
}


function zoomIn() {

    if (currentZoom < MAX_ZOOM) {

        currentZoom += ZOOM_STEP;

        updateZoom();
    }
}


function zoomOut() {

    if (currentZoom > MIN_ZOOM) {

        currentZoom -= ZOOM_STEP;

        updateZoom();
    }
}


function resetZoom() {

    currentZoom = 1;

    updateZoom();

    const wrapper = document.getElementById("modalImageWrapper");

    if (wrapper) {
        wrapper.scrollLeft = 0;
        wrapper.scrollTop = 0;
    }
}

// ===== ADMISSIONS DATA WITH REAL ADMISSION LETTERS =====
// program_fr / program_ar / testimonial_fr / testimonial_ar give accurate
// human translations of the free-text fields for each admission story.
const admissions = [

{
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Palermo",
        program: "Master's Degree in System and Hospitality management ",
        program_fr: "Master en Gestion des Systèmes et de l'Hôtellerie",
        program_ar: "ماجستير في إدارة الأنظمة والضيافة",
        degree: "Master",
        letterImage: "University of palermo.jpg",
        testimonial: "Successfully admitted to Plermo University for System and Hospitality Management studies.",
        testimonial_fr: "Admis avec succès à l'Université de Palerme pour des études en Gestion des Systèmes et de l'Hôtellerie.",
        testimonial_ar: "تم قبوله بنجاح في جامعة باليرمو لدراسة إدارة الأنظمة والضيافة.",
        date: "2026",
        score: "IELTS Required"
    },
{
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Napoli Federico II",
        program: "Master's degree in Science politics ",
        program_fr: "Master en Sciences Politiques",
        program_ar: "ماجستير في العلوم السياسية",
        degree: "Master",
        letterImage: "University of napoli.jpg",
        testimonial: "Successfully admitted to Napoli University for Science politics studies.",
        testimonial_fr: "Admis avec succès à l'Université de Naples pour des études en Sciences Politiques.",
        testimonial_ar: "تم قبوله بنجاح في جامعة نابولي لدراسة العلوم السياسية.",
        date: "2026",
        score: "IELTS Not Required"
    },
{
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Tuscia",
        program: "Master's degree in Human Right ",
        program_fr: "Master en Droits de l'Homme",
        program_ar: "ماجستير في حقوق الإنسان",
        degree: "Master",
        letterImage: "University of Tuscia.jpg",
        testimonial: "Successfully admitted to Tuscia University for Human Right studies.",
        testimonial_fr: "Admis avec succès à l'Université de Tuscia pour des études en Droits de l'Homme.",
        testimonial_ar: "تم قبوله بنجاح في جامعة توشا لدراسة حقوق الإنسان.",
        date: "2026",
        score: "IELTS Not Required"
    },


    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Messina",
        program: "Bachelor's Degree Course in Business Management",
        program_fr: "Licence en Gestion des Affaires",
        program_ar: "بكالوريوس في إدارة الأعمال",
        degree: "bachelor",
        letterImage: "messina.png.jpg",
        testimonial: "Successfully admitted to Messina University for Business Management studies.",
        testimonial_fr: "Admis avec succès à l'Université de Messine pour des études en Gestion des Affaires.",
        testimonial_ar: "تم قبوله بنجاح في جامعة ميسينا لدراسة إدارة الأعمال.",
        date: "2026",
        score: "IELTS Required"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Messina",
        program: "Bachelor's Degree Course in Data Analysis",
        program_fr: "Licence en Analyse de Données",
        program_ar: "بكالوريوس في تحليل البيانات",
        degree: "bachelor",
        letterImage: "messina.png2.jpg",
        testimonial: "Admission confirmed for Data Analysis program at University of Messina.",
        testimonial_fr: "Admission confirmée au programme d'Analyse de Données de l'Université de Messine.",
        testimonial_ar: "تم تأكيد القبول في برنامج تحليل البيانات بجامعة ميسينا.",
        date: "2026",
        score: "IELTS Required"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università di Pisa",
        program: "International Programme in Humanities (Master's)",
        program_fr: "Programme International en Sciences Humaines (Master)",
        program_ar: "برنامج دولي في العلوم الإنسانية (ماجستير)",
        degree: "masters",
        letterImage: "pisa.png.jpg",
        testimonial: "Accepted to University of Pisa's prestigious International Humanities program.",
        testimonial_fr: "Accepté dans le prestigieux programme international en Sciences Humaines de l'Université de Pise.",
        testimonial_ar: "تم قبوله في برنامج العلوم الإنسانية الدولي المرموق بجامعة بيزا.",
        date: "2026",
        score: "Master's Program"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Napoli Federico II",
        program: "Master's Degree in Transportation Engineering and Mobility",
        program_fr: "Master en Génie des Transports et de la Mobilité",
        program_ar: "ماجستير في هندسة النقل والتنقل",
        degree: "masters",
        letterImage: "Naples Federico II.png.jpg",
        testimonial: "Pre-admission to Naples Federico II for Transportation Engineering program.",
        testimonial_fr: "Pré-admission à Naples Federico II pour le programme de Génie des Transports.",
        testimonial_ar: "قبول مبدئي في جامعة نابولي فيديريكو الثاني لبرنامج هندسة النقل.",
        date: "2026",
        score: "Engineering Master's"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Palermo",
        program: "Bachelor's Degree in Economics and Sustainable Cooperation",
        program_fr: "Licence en Économie et Coopération Durable",
        program_ar: "بكالوريوس في الاقتصاد والتعاون المستدام",
        degree: "bachelor",
        letterImage: "palermo.png.jpg",
        testimonial: "Admitted to University of Palermo's Economics program focusing on sustainable cooperation.",
        testimonial_fr: "Admis au programme d'Économie de l'Université de Palerme, axé sur la coopération durable.",
        testimonial_ar: "تم قبوله في برنامج الاقتصاد بجامعة باليرمو مع تركيز على التعاون المستدام.",
        date: "2026",
        score: "Economics"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Palermo",
        program: "Bachelor's Degree in Industrial and Information Engineering",
        program_fr: "Licence en Génie Industriel et de l'Information",
        program_ar: "بكالوريوس في الهندسة الصناعية والمعلوماتية",
        degree: "bachelor",
        letterImage: "palermo.png2.jpg",
        testimonial: "Successfully admitted to Palermo University's Industrial Engineering program.",
        testimonial_fr: "Admis avec succès au programme de Génie Industriel de l'Université de Palerme.",
        testimonial_ar: "تم قبوله بنجاح في برنامج الهندسة الصناعية بجامعة باليرمو.",
        date: "2026",
        score: "Engineering"
    }
];

// ===== DISPLAY ADMISSIONS =====
function displayAdmissions(admissionsToShow = admissions) {
    const grid = document.getElementById("admissionsGrid");

    if (!grid) {
        console.error("admissionsGrid not found");
        return;
    }

    grid.innerHTML = admissionsToShow.map(admission => {

        const program = currentLang === "fr" ? admission.program_fr
            : currentLang === "ar" ? admission.program_ar
            : admission.program;

        const testimonial = currentLang === "fr" ? admission.testimonial_fr
            : currentLang === "ar" ? admission.testimonial_ar
            : admission.testimonial;

        const country = currentLang === "en" ? admission.country : t("country_algeria");

        const scoreText = admission.score === "IELTS Required" ? t("filter_required")
            : admission.score === "IELTS Not Required" ? t("filter_not_required")
            : admission.score === "Master's Program" ? t("degree_master") + "'s Program"
            : admission.score === "Engineering Master's" ? t("degree_master")
            : translateProgramsString(admission.score);

        return `
        <div class="admission-card">

            <div class="admission-letter-image"
                 onclick="openImageModal('${admission.letterImage}', '${admission.university}')">

                <img 
                    src="${admission.letterImage}" 
                    alt="Admission Letter"
                >

                <div class="admission-badge">
                    ${admission.degree === "masters" ? t("admission_masters_badge") : t("admission_letter_badge")}
                </div>

                <div class="image-click-hint">
                    <i class="fas fa-expand"></i>
                    ${t("admission_click_hint")}
                </div>

            </div>

            <div class="admission-content">

                <h3>${admission.university}</h3>

                <p class="admission-country">
                    <i class="fas fa-globe"></i>
                    ${country}
                </p>

                <div class="admission-details">
                    <p><strong>${t("admission_program_label")}</strong> ${program}</p>
                    <p><strong>${t("admission_type_label")}</strong> ${scoreText}</p>
                    <p><strong>${t("admission_year_label")}</strong> ${admission.date}</p>
                </div>

                <p class="admission-testimonial">
                    "${testimonial}"
                </p>

                <div class="admission-footer">
                    <span class="admission-year">
                        ${t("admission_year_prefix")} ${admission.date}
                    </span>

                    <span class="admission-status">
                        <i class="fas fa-check-circle"></i> ${t("admission_status_verified")}
                    </span>
                </div>

            </div>
        </div>
    `;
    }).join("");
}
 
// ===== FILTER ADMISSIONS FUNCTION =====
function filterAdmissions(filter) {
    let filtered = admissions;
    
    if (filter === 'masters') {
        filtered = admissions.filter(a => a.degree === 'masters');
    } else if (filter === 'bachelor') {
        filtered = admissions.filter(a => a.degree === 'bachelor');
    }
    
    displayAdmissions(filtered);
}
 
// ===== FORM SUBMISSION (defined again further below with async fetch) =====

// University Data
const universities = [

    {
        name: "University of Milan",
        city: "Milan",
        opens: "22 January 2027",
        closes: "30 April 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€50",
        programs: "Engineering, Business, Medicine",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Data Science",
            "Business Administration",
            "International Relations",
            "Engineering"
        ]
    },

    {
        name: "Sapienza University of Rome",
        city: "Rome",
        opens: "22 December 2026",
        closes: "15 May 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€30",
        programs: "Law, Humanities, Sciences",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Medicine and Surgery",
            "Law",
            "Economics",
            "Mechanical Engineering",
            "Civil Engineering",
            "Architecture"
        ]
    },

    {
        name: "Politecnico di Torino",
        city: "Turin",
        opens: "19 December 2026",
        closes: "1 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€50",
        programs: "Engineering, Architecture, Technology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Automotive Engineering",
            "Electronic Engineering",
            "Civil Engineering",
            "Architecture",
            "Data Science"
        ]
    },

    {
        name: "University of Bologna",
        city: "Bologna",
        opens: "8 October 2026",
        closes: "12 November 2026",
        ielts: true,
        minScore: "5.5",
        applicationFee: "Depends on program",
        programs: "Business, Languages, Social Sciences, Engineering",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Economics",
            "Business Administration",
            "Mechanical Engineering",
            "Automation Engineering",
            "International Relations",
            "Languages and Literature"
        ]
    },

    {
        name: "University of Padua",
        city: "Padua",
        opens: "15 September 2026",
        closes: "15 November 2026",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€60",
        programs: "Medicine, Biology, Chemistry, Engineering",
        majors: [
            "Computer Science",
            "Medicine and Surgery",
            "Biomedical Engineering",
            "Mechanical Engineering",
            "Psychology",
            "Biology",
            "Chemistry",
            "Economics"
        ]
    },

    {
        name: "Bocconi University",
        city: "Milan",
        opens: "2 to 29 September 2026",
        closes: "25 November 2026 to 26 January 2027",
        ielts: true,
        minScore: "6.5",
        applicationFee: "€50",
        programs: "Business, Economics, Finance",
        majors: [
            "International Economics and Management",
            "Economics and Finance",
            "Business Administration",
            "Finance",
            "Data Science",
            "Artificial Intelligence",
            "International Management"
        ]
    },

    {
        name: "University of Palermo",
        city: "Palermo",
        opens: "Check official call",
        closes: "Check official deadline",
        ielts: true,
        minScore: "5.5",
        applicationFee: "Free",
        programs: "Business, Law, Political Science, Engineering",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Business Administration",
            "Economics",
            "Political Science",
            "Architecture"
        ]
    },

    {
        name: "University of Florence",
        city: "Florence",
        opens: "10 December 2026",
        closes: "17 April 2027",
        ielts: true,
        minScore: "N/A",
        applicationFee: "€20",
        programs: "Arts, Literature, History, Engineering",
        majors: [
            "Computer Science",
            "Mechanical Engineering",
            "Architecture",
            "Economics",
            "Medicine",
            "Psychology",
            "Arts and Humanities",
            "History"
        ]
    },

    {
        name: "University of Messina",
        city: "Messina",
        opens: "24 November 2026",
        closes: "31 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Various programs",
        majors: [
            "Computer Science",
            "Data Science",
            "Engineering",
            "Medicine and Surgery",
            "Economics",
            "Business Administration",
            "Political Science",
            "Psychology"
        ]
    },

    {
        name: "University of Naples Federico II",
        city: "Naples",
        opens: "Early March",
        closes: "Early May",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Literature, History, Engineering",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Aerospace Engineering",
            "Transportation Engineering",
            "Civil Engineering",
            "Medicine and Surgery",
            "Architecture",
            "Economics"
        ]
    },

    {
        name: "University of Naples Parthenope",
        city: "Naples",
        opens: "Early February",
        closes: "Early April",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Economics",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Economics",
            "Business Administration",
            "Maritime Studies",
            "Tourism Management",
            "Data Science"
        ]
    },

    {
        name: "University of Genoa",
        city: "Genoa",
        opens: "26 November 2026",
        closes: "30 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Arts, Engineering, Sciences",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Robotics Engineering",
            "Naval Engineering",
            "Electrical Engineering",
            "Architecture",
            "Economics",
            "Computer Science"
        ]
    },

    {
        name: "Polytechnic University of Marche",
        city: "Ancona",
        opens: "16 December 2026",
        closes: "30 April 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€10",
        programs: "Engineering, Sciences, Economics",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Biomedical Engineering",
            "Civil Engineering",
            "Environmental Engineering",
            "Economics",
            "Business Administration"
        ]
    },

    {
        name: "University of Pisa",
        city: "Pisa",
        opens: "8 July",
        closes: "31 December",
        ielts: true,
        minScore: "N/A",
        applicationFee: "Depends on program",
        programs: "Arts, Literature, History, Engineering",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Engineering",
            "Physics",
            "Medicine",
            "Economics",
            "Mathematics",
            "Data Science"
        ]
    },

    {
        name: "University of Udine",
        city: "Udine",
        opens: "15 February 2027",
        closes: "31 May 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20",
        programs: "Engineering, Biology, Sciences",
        majors: [
            "Computer Science",
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Economics",
            "Agricultural Sciences",
            "Biology"
        ]
    },

    {
        name: "University of Parma",
        city: "Parma",
        opens: "15 April 2027",
        closes: "26 June 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Mechanical Engineering",
            "Food Science",
            "Medicine and Surgery",
            "Economics",
            "Biotechnology",
            "Pharmaceutical Sciences"
        ]
    },

    {
        name: "University of Trieste",
        city: "Trieste",
        opens: "15 December",
        closes: "30 April",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€40",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Data Science",
            "Engineering",
            "Physics",
            "Economics",
            "International Relations",
            "Medicine",
            "Psychology"
        ]
    },

    {
        name: "University of Teramo",
        city: "Teramo",
        opens: "No fixed deadline",
        closes: "No fixed deadline",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Veterinary Medicine",
            "Food Science",
            "Economics",
            "Business Administration",
            "Political Science",
            "Law",
            "Biotechnology"
        ]
    },

    {
        name: "University of Catania",
        city: "Catania",
        opens: "10 February 2027",
        closes: "17 March 2027",
        ielts: true,
        minScore: "N/A",
        applicationFee: "€10",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Computer Engineering",
            "Mechanical Engineering",
            "Medicine and Surgery",
            "Economics",
            "Physics",
            "Biology",
            "Architecture"
        ]
    },

    {
        name: "University of Cassino",
        city: "Cassino",
        opens: "Check official call",
        closes: "30 June 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€15",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Economics",
            "Business Administration",
            "International Relations"
        ]
    },

    {
        name: "University of Bergamo",
        city: "Bergamo",
        opens: "24 November 2026",
        closes: "15 January 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Economics",
            "Business Administration",
            "International Management",
            "Computer Science",
            "Psychology"
        ]
    },

    {
        name: "University of L'Aquila",
        city: "L'Aquila",
        opens: "25 November 2026",
        closes: "31 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Mathematics",
            "Physics"
        ]
    },

    {
        name: "University of Basilicata",
        city: "Potenza",
        opens: "3 April 2026",
        closes: "Check official deadline",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Environmental Engineering",
            "Agricultural Sciences",
            "Architecture",
            "Economics"
        ]
    },

    {
        name: "University of Calabria",
        city: "Rende",
        opens: "1 February 2026",
        closes: "15 May 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€10",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Computer Engineering",
            "Mechanical Engineering",
            "Telecommunications Engineering",
            "Economics",
            "Data Science"
        ]
    },

    {
        name: "University of Tuscia",
        city: "Viterbo",
        opens: "Early",
        closes: "18 April 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Environmental Sciences",
            "Agricultural Sciences",
            "Biotechnology",
            "Economics",
            "International Relations",
            "Cultural Heritage"
        ]
    },

    {
        name: "University of Modena and Reggio Emilia",
        city: "Modena",
        opens: "10 February 2026",
        closes: "30 April 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Artificial Intelligence",
            "Mechanical Engineering",
            "Automotive Engineering",
            "Electrical Engineering",
            "Medicine",
            "Economics",
            "Computer Science"
        ]
    },

];


// IELTS Resources
const ieltsResources = [
    {
        name: "IELTS Advantage",
        icon: "fas fa-book",
        description: "Comprehensive online course with video lessons, practice tests, and expert feedback.",
        description_fr: "Cours en ligne complet avec des leçons vidéo, des tests d'entraînement et un retour d'experts.",
        description_ar: "دورة شاملة عبر الإنترنت تتضمن دروساً مصورة واختبارات تدريبية وملاحظات من خبراء.",
        link: "https://www.ieltsadvantage.com/"
    },
    {
        name: "British Council IELTS",
        icon: "fas fa-graduation-cap",
        description: "Official IELTS preparation materials and practice tests from the British Council.",
        description_fr: "Matériel de préparation officiel et tests d'entraînement du British Council pour l'IELTS.",
        description_ar: "مواد تحضير رسمية واختبارات تدريبية للآيلتس من المجلس الثقافي البريطاني.",
        link: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test"
    },
    {
        name: "IELTS Buddy",
        icon: "fas fa-users",
        description: "Free IELTS preparation resources, tips, and community support.",
        description_fr: "Ressources gratuites de préparation à l'IELTS, conseils et soutien communautaire.",
        description_ar: "موارد مجانية للتحضير للآيلتس، نصائح، ودعم مجتمعي.",
        link: "https://abderx-no.github.io/IELTS-_Buddy/"
    },
    {
        name: "E2Language",
        icon: "fas fa-laptop",
        description: "Interactive online courses with live lessons and personalized feedback.",
        description_fr: "Cours interactifs en ligne avec des leçons en direct et un retour personnalisé.",
        description_ar: "دورات تفاعلية عبر الإنترنت مع دروس مباشرة وملاحظات مخصصة.",
        link: "https://engnovate.com/"
    },
    {
        name: "IELTS Liz",
        icon: "fas fa-star",
        description: "Expert YouTube channel with free tutorials and speaking practice.",
        description_fr: "Chaîne YouTube experte proposant des tutoriels gratuits et des exercices d'expression orale.",
        description_ar: "قناة يوتيوب متخصصة تقدم دروساً مجانية وتمارين للمحادثة.",
        link: "https://youtube.com/@dalilk4english?si=AyMrmemAx_cZnhs7"
    },
    {
        name: "Udemy IELTS Courses",
        icon: "fas fa-play-circle",
        description: "Affordable video courses with lifetime access and certificates.",
        description_fr: "Cours vidéo abordables avec accès à vie et certificats.",
        description_ar: "دورات فيديو بأسعار معقولة مع وصول مدى الحياة وشهادات.",
        link: "www.udemy.com/ielts"
    }
];



// ===== OPEN ADMISSION IMAGE =====
function openImageModal(imageSrc, caption) {

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    if (!modal || !modalImage) {
        console.error("Image modal elements not found in HTML!");
        return;
    }

    currentZoom = 1;

    modalImage.src = imageSrc;
    modalImage.style.transform = "scale(1)";

    if (modalCaption) {
        modalCaption.textContent = caption;
    }

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


// ===== CLOSE WHEN CLICKING BACKGROUND =====
document.addEventListener("click", function(event) {

    const modal = document.getElementById("imageModal");

    if (modal && event.target === modal) {
        closeImageModal();
    }

});


// ===== CLOSE WITH ESC =====
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeImageModal();
    }

});

// ===== UNIVERSITY & MAJOR SELECTION FUNCTIONS =====

// Initialize Contact Section with Universities
function initializeContactSection() {
    displayCityCheckboxes();
    displayUniversitiesInContact();
}

// Get unique cities from universities
function getUniqueCities() {
    const cities = [...new Set(universities.map(uni => uni.city))];
    return cities.sort();
}

// Display City Checkboxes
function displayCityCheckboxes(cities = getUniqueCities(), checkedSet = null) {
    const citiesContainer = document.getElementById("citiesCheckboxes");
    if (!citiesContainer) return;

    const checked = checkedSet || new Set(
        Array.from(document.querySelectorAll("input[name='cities']:checked")).map(cb => cb.value)
    );

    citiesContainer.innerHTML = cities.map((city, index) => `
        <div style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:4px;cursor:pointer;">
            <input type="checkbox" id="city_${index}" name="cities" value="${city}"
                ${checked.has(city) ? "checked" : ""}
                style="width:18px;height:18px;cursor:pointer;"
                onchange="filterUniversitiesInContact();">
            <label for="city_${index}" style="cursor:pointer;margin:0;flex:1;font-weight:500;">${city}</label>
        </div>
    `).join("");
}

// Display Universities as Checkboxes in Contact Form
function displayUniversitiesInContact(unis = universities) {
    const checkboxContainer = document.getElementById("universitiesCheckboxes");
    
    if (!checkboxContainer) return;

    const checkedUnis = new Set(
        Array.from(document.querySelectorAll("input[name='universities']:checked")).map(cb => cb.value)
    );

    checkboxContainer.innerHTML = unis.map((uni, index) => `
        <div style="
            background: white;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
        " onmouseover="this.style.borderColor='var(--secondary-blue)'; this.style.boxShadow='0 2px 8px rgba(0,82,255,0.1)'" 
           onmouseout="this.style.borderColor='#ddd'; this.style.boxShadow='none'">
            <div style="display: flex; align-items: start; gap: 10px;">
                <input 
                    type="checkbox" 
                    id="uni_${index}" 
                    name="universities" 
                    value="${uni.name}"
                    ${checkedUnis.has(uni.name) ? "checked" : ""}
                    style="width: 18px; height: 18px; margin-top: 2px; cursor: pointer;"
                    onchange="updateSelectedUniversities(); updateAvailableMajors();"
                >
                <label for="uni_${index}" style="cursor: pointer; flex: 1;">
                    <strong style="color: var(--primary-dark); display: block;">${uni.name}</strong>
                    <small style="color: var(--text-light);">
                        📍 ${uni.city} | 💳 ${uni.applicationFee}
                        ${uni.ielts ? ` | IELTS: ${uni.minScore}` : ' | ' + t("no_ielts_required")}
                    </small>
                </label>
            </div>
        </div>
    `).join("");

    updateAvailableMajors();
}

// Filter Universities in Contact Form
function filterUniversitiesInContact() {
    const el = document.getElementById("ieltsFilterContact");
    const ieltsFilter = el ? el.value : "all";

    const matchesIelts = uni =>
        ieltsFilter === "all" ||
        (ieltsFilter === "required" && uni.ielts === true) ||
        (ieltsFilter === "not-required" && uni.ielts === false);

    // universities already ticked must stay visible
    const checkedUnis = new Set(
        Array.from(document.querySelectorAll("input[name='universities']:checked")).map(cb => cb.value)
    );

    // cities available for this IELTS option
    const availableCities = [...new Set(universities.filter(matchesIelts).map(u => u.city))].sort();

    // keep only ticked cities that still apply
    const keepCities = Array.from(document.querySelectorAll("input[name='cities']:checked"))
        .map(cb => cb.value)
        .filter(c => availableCities.includes(c));

    displayCityCheckboxes(availableCities, new Set(keepCities));

    const filtered = universities.filter(uni =>
        checkedUnis.has(uni.name) ||
        (matchesIelts(uni) && (keepCities.length === 0 || keepCities.includes(uni.city)))
    );

    displayUniversitiesInContact(filtered);

    if (filtered.length === 0) {
        const msgs = {
            en: "No universities match these filters.",
            fr: "Aucune université ne correspond à ces filtres.",
            ar: "لا توجد جامعات تطابق هذه الفلاتر."
        };
        document.getElementById("universitiesCheckboxes").innerHTML =
            `<p style="padding:20px;color:#666;">${msgs[currentLang] || msgs.en}</p>`;
    }
}
// Reset City Filters
function resetCityFilter() {
    // Uncheck all city checkboxes
    document.querySelectorAll("input[name='cities']").forEach(cb => {
        cb.checked = false;
    });
    
    // Display all universities again
    filterUniversitiesInContact();
}

// Update Selected Universities Display
function updateSelectedUniversities() {
    const checkboxes = document.querySelectorAll("input[name='universities']:checked");
    const selectedUnisList = document.getElementById("selectedUnisList");
    const selectedUnisSummary = document.getElementById("selectedUnisSummary");
    const selectedUnisInput = document.getElementById("selectedUnis");

    const selectedUnis = Array.from(checkboxes).map(cb => cb.value);
    selectedUnisInput.value = JSON.stringify(selectedUnis);

    if (selectedUnis.length > 0) {
        selectedUnisSummary.style.display = "block";
        selectedUnisList.innerHTML = selectedUnis.map(uni => `
            <span style="
                background: var(--secondary-blue);
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                display: inline-block;
            ">
                ${uni}
            </span>
        `).join("");
    } else {
        selectedUnisSummary.style.display = "none";
    }
}

// Update Available Majors Based on Selected Universities
function updateAvailableMajors() {
    const checkboxes = document.querySelectorAll("input[name='universities']:checked");
    const selectedUnis = Array.from(checkboxes).map(cb => cb.value);

    const majorsCheckboxes = document.getElementById("majorsCheckboxes");
    const noMajorsMessage = document.getElementById("noMajorsMessage");

    if (!majorsCheckboxes || !noMajorsMessage) return;

    if (selectedUnis.length === 0) {
        majorsCheckboxes.innerHTML = "";
        noMajorsMessage.style.display = "block";
        return;
    }

    // Get all majors from selected universities
    const allMajors = new Set();
    universities.forEach(uni => {
        if (selectedUnis.includes(uni.name)) {
            uni.majors.forEach(major => allMajors.add(major));
        }
    });

    const sortedMajors = Array.from(allMajors).sort();
    const checkedMajors = new Set(
        Array.from(document.querySelectorAll("input[name='majors']:checked")).map(cb => cb.value)
    );

    noMajorsMessage.style.display = "none";
    majorsCheckboxes.innerHTML = sortedMajors.map((major, index) => `
        <div style="display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 4px; cursor: pointer;">
            <input 
                type="checkbox" 
                id="major_${index}" 
                name="majors" 
                value="${major}"
                ${checkedMajors.has(major) ? "checked" : ""}
                style="width: 18px; height: 18px; cursor: pointer;"
                onchange="updateSelectedMajors();"
            >
            <label for="major_${index}" style="cursor: pointer; margin: 0; flex: 1;">
                ${translateTerm(major)}
            </label>
        </div>
    `).join("");

    updateSelectedMajors();
}

// Update Selected Majors Display
function updateSelectedMajors() {
    const checkboxes = document.querySelectorAll("input[name='majors']:checked");
    const selectedMajorsList = document.getElementById("selectedMajorsList");
    const selectedMajorsSummary = document.getElementById("selectedMajorsSummary");
    const selectedMajorsInput = document.getElementById("selectedMajorsInput");

    const selectedMajors = Array.from(checkboxes).map(cb => cb.value);
    selectedMajorsInput.value = JSON.stringify(selectedMajors);

    if (selectedMajors.length > 0) {
        selectedMajorsSummary.style.display = "block";
        selectedMajorsList.innerHTML = selectedMajors.map(major => `
            <span style="
                background: #4CAF50;
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                display: inline-block;
            ">
                ${translateTerm(major)}
            </span>
        `).join("");
    } else {
        selectedMajorsSummary.style.display = "none";
    }
}

// Display Universities
function displayUniversities(unis = universities) {

    const grid = document.getElementById("universitiesGrid");

    if (!grid) return;

    grid.innerHTML = unis.map(uni => `
        <div class="uni-card">

            <div class="uni-name">${uni.name}</div>

            <div class="uni-info">
                <label>${t("uni_location")}</label> ${uni.city}
            </div>

            <div class="uni-info">
                <label>${t("uni_opens")}</label>
                ${uni.opens}
            </div>

            <div class="uni-info">
                <label>${t("uni_closes")}</label>
                ${uni.closes}
            </div>

            <div class="uni-info">
                <label>${t("uni_fee")}</label>
                ${uni.applicationFee}
            </div>

            <div class="uni-info">
                <label>${t("uni_programs")}</label>
                ${translateProgramsString(uni.programs)}
            </div>

            <div class="majors-section">
                <label>${t("uni_majors")}</label>

                <div class="majors-list">
                    ${uni.majors && uni.majors.length > 0
                        ? translateMajorsList(uni.majors).map(major => `
                            <span class="major-tag">${major}</span>
                        `).join("")
                        : "<span>-</span>"
                    }
                </div>
            </div>

            <div style="margin-top: 15px;">
                ${uni.ielts ? `
                    <span class="badge badge-ielts-yes">
                        ${t("filter_required")} (${uni.minScore})
                    </span>
                ` : `
                    <span class="badge badge-ielts-no">
                        ${t("filter_not_required")}
                    </span>
                `}
            </div>

            <button
                class="btn btn-secondary"
                onclick="contactForUniversity('${uni.name}')"
                style="width: 100%; margin-top: 15px;"
            >
                ${t("uni_get_info_btn")}
            </button>

        </div>
    `).join("");
}

// Display IELTS Resources
function displayResources() {
    const grid = document.getElementById("resourcesGrid");

    if (!grid) return;

    grid.innerHTML = ieltsResources.map(resource => {

        const description = currentLang === "fr" ? resource.description_fr
            : currentLang === "ar" ? resource.description_ar
            : resource.description;

        return `
        <div class="resource-card">

            <div class="resource-icon">
                <i class="${resource.icon}"></i>
            </div>

            <h3>${resource.name}</h3>

            <p>${description}</p>

            <a
                href="${resource.link}"
                target="_blank"
                class="resource-link"
            >
                ${t("resource_learn_more")}
            </a>

        </div>
    `;
    }).join("");
}

// Section Navigation
function showSection(sectionId, addToHistory = true) {

    // Remember the current page/section
    localStorage.setItem("eliteItalyCurrentSection", sectionId);

    // Hide all sections
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    // Remove active from all navigation buttons
    document.querySelectorAll("nav .nav-btn").forEach(button => {
        button.classList.remove("active");
    });

    // Find the correct navigation button
    const navButtons = document.querySelectorAll("nav .nav-btn");

    navButtons.forEach(button => {
        const onclickValue = button.getAttribute("onclick");

        if (onclickValue && onclickValue.includes(`'${sectionId}'`)) {
            button.classList.add("active");
        }
    });

    // Load Universities
    if (sectionId === "universities") {
        displayUniversities();
    }

    // Load Admissions
    if (sectionId === "admissions") {
        displayAdmissions();
    }

    // Load IELTS Resources
    if (sectionId === "ielts") {
        displayResources();
    }

    // Initialize Contact Section with Universities
    if (sectionId === "contact") {
        setTimeout(() => {
            initializeContactSection();
        }, 100);
    }

    // Add section to browser history
    if (addToHistory) {
        history.pushState(
            { section: sectionId },
            "",
            "#" + sectionId
        );
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Browser Back and Forward buttons
window.addEventListener("popstate", function(event) {

    if (event.state && event.state.section) {

        showSection(
            event.state.section,
            false
        );

    } else {

        const sectionId =
            window.location.hash.replace("#", "") || "home";

        showSection(sectionId, false);
    }

});

// Filtering Universities
function filterUniversities() {

    const ieltsFilter = document.querySelector(
        ".filter-section select"
    ).value;

    const maxFee =
        parseFloat(
            document.getElementById("maxFee").value
        ) || Infinity;

    const filtered = universities.filter(uni => {

        const ieltsMatch =
            ieltsFilter === "all" ||
            (ieltsFilter === "required" && uni.ielts) ||
            (ieltsFilter === "not-required" && !uni.ielts);

        const feeMatch =
            typeof uni.applicationFee !== "number" ||
            uni.applicationFee <= maxFee;

        return ieltsMatch && feeMatch;
    });

    displayUniversities(filtered);
}

// Reset Filters
function resetFilters() {

    document.querySelector(
        ".filter-section select"
    ).value = "all";

    document.getElementById("maxFee").value = "";

    displayUniversities();
}

// Contact University - ENHANCED
function contactForUniversity(uniName) {

    showSection("contact");

    document.querySelector("form").reset();
    
    // Pre-select the university if available
    setTimeout(() => {
        const checkbox = Array.from(document.querySelectorAll("input[name='universities']")).find(cb => cb.value === uniName);
        if (checkbox) {
            checkbox.checked = true;
            updateSelectedUniversities();
            updateAvailableMajors();
        }
    }, 150);
}

// Contact Package
function contactForPackage(packageName) {

    showSection("contact");

    const packageSelect =
        document.querySelector('select[name="package"]');

    if (packageName === "Starter") {
        packageSelect.value = "starter";
    }

    if (packageName === "Complete") {
        packageSelect.value = "complete";
    }

    if (packageName === "Premium Plus") {
        packageSelect.value = "premium";
    }

    setTimeout(() => {
        initializeContactSection();
    }, 100);
}

// Form Submission - ENHANCED
async function submitForm(e) {
    e.preventDefault();

    // Get form
    const form = e.target;

    // Get selected universities
    const selectedUniversities = Array.from(
        document.querySelectorAll("input[name='universities']:checked")
    ).map(cb => cb.value);

    // Check university selection
    if (selectedUniversities.length === 0) {
        alert(t("select_uni_alert"));
        return;
    }

    // Get selected majors
    const selectedMajors = Array.from(
        document.querySelectorAll("input[name='majors']:checked")
    ).map(cb => cb.value);

    // Get form values
    const data = {
        name: document.querySelector("input[name='name']")?.value || "",
        email: document.querySelector("input[name='email']")?.value || "",
        phone: document.querySelector("input[name='phone']")?.value || "",
        level: document.querySelector("select[name='level']")?.value || "",
        package: document.querySelector("select[name='package']")?.value || "",
        universities: selectedUniversities.join(", "),
        majors: selectedMajors.join(", "),
        message: document.querySelector("textarea[name='message']")?.value || "",
        language: currentLang
    };

    console.log("Sending application:", data);

    // Show sending message
    const successMsg = document.getElementById("successMessage");

    if (successMsg) {
        successMsg.style.display = "block";
        successMsg.textContent = t("sending_application");
    }

    try {

        const response = await fetch(
            "https://elite-italy-telegram.abderrahmanem627.workers.dev/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        console.log("Worker response:", result);

        if (!response.ok || !result.success) {
            throw new Error(
                result.error?.description ||
                result.error ||
                "Failed to send application"
            );
        }

        // SUCCESS
        if (successMsg) {
            successMsg.style.display = "block";
            successMsg.textContent = t("application_success");
        }

        // Reset form
        form.reset();

        // Reset university selections
        document.querySelectorAll(
            "input[name='universities']"
        ).forEach(cb => {
            cb.checked = false;
        });

        // Reset major selections
        document.querySelectorAll(
            "input[name='majors']"
        ).forEach(cb => {
            cb.checked = false;
        });

        // Reset summaries
        const selectedUnisSummary =
            document.getElementById("selectedUnisSummary");

        const selectedMajorsSummary =
            document.getElementById("selectedMajorsSummary");

        const noMajorsMessage =
            document.getElementById("noMajorsMessage");

        const majorsCheckboxes =
            document.getElementById("majorsCheckboxes");

        if (selectedUnisSummary) {
            selectedUnisSummary.style.display = "none";
        }

        if (selectedMajorsSummary) {
            selectedMajorsSummary.style.display = "none";
        }

        if (noMajorsMessage) {
            noMajorsMessage.style.display = "block";
        }

        if (majorsCheckboxes) {
            majorsCheckboxes.innerHTML = "";
        }

        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMsg) {
                successMsg.style.display = "none";
            }
        }, 5000);

    } catch (error) {

        console.error("Application error:", error);

        if (successMsg) {
            successMsg.style.display = "block";
            successMsg.textContent = t("application_error");
        }

        alert(t("application_problem_alert"));
    }
}
// ===== LANGUAGE DROPDOWN =====
const LANG_UI = { en: ["🇬🇧", "EN"], fr: ["🇫🇷", "FR"], ar: ["🇩🇿", "AR"] };

function updateLangUI() {
    const f = document.getElementById("eliteFlag");
    const tx = document.getElementById("eliteLangText");
    if (f && tx) { f.textContent = LANG_UI[currentLang][0]; tx.textContent = LANG_UI[currentLang][1]; }
}

function translateElitePage(lang) {
    setLanguage(lang);
    const box = document.getElementById("eliteLanguage");
    if (box) box.classList.remove("open");
}

document.addEventListener("click", function (e) {
    const box = document.getElementById("eliteLanguage");
    const btn = document.getElementById("eliteLanguageBtn");
    if (!box) return;
    if (btn && btn.contains(e.target)) box.classList.toggle("open");
    else box.classList.remove("open");
});

// Tags the existing HTML text so it can be translated
function autoTagI18n() {
    const norm = s => s.replace(/\s+/g, " ").trim();
    const rev = {};
    Object.entries(TRANSLATIONS.en).forEach(([k, v]) => { const n = norm(v); if (!rev[n]) rev[n] = k; });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
        const p = node.parentElement;
        if (!p || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(p.tagName)) return;
        if (p.closest("[data-i18n]")) return;
        const key = rev[norm(node.nodeValue)];
        if (!key) return;
        if (p.childNodes.length === 1) { p.setAttribute("data-i18n", key); return; }
        const span = document.createElement("span");
        span.setAttribute("data-i18n", key);
        span.textContent = node.nodeValue.trim();
        const frag = document.createDocumentFragment();
        if (/^\s/.test(node.nodeValue)) frag.append(" ");
        frag.append(span);
        if (/\s$/.test(node.nodeValue)) frag.append(" ");
        node.parentNode.replaceChild(frag, node);
    });
}
