const productTypes = [
  {
    title: "الكتب الإلكترونية والدلائل",
    valueProp:
      "مثالية لتجميع الخبرة في وثيقة قابلة للتنزيل مع تكلفة إنتاج منخفضة وسهولة التحديث.",
    bestFor: "مبتدئين يحبون البحث والكتابة ويمتلكون خبرة متخصصة محددة.",
    advantages: [
      "تكلفة إنتاج شبه معدومة ويمكن بيعها عبر منصات متعددة بسهولة.",
      "إمكانية تطويرها لاحقًا إلى دورات أو منتجات أعمق.",
      "سهولة الاستهلاك للمشتري وعدم الحاجة لدعم تقني معقد.",
    ],
    challenges: [
      "المنافسة العالية تتطلب قيمة مضافة وبحثًا موسعًا.",
      "الحاجة لتصميم بصري احترافي لزيادة الإقبال.",
    ],
  },
  {
    title: "الدورات المصغرة (Mini Courses)",
    valueProp:
      "منتج مرئي أو صوتي قصير يعلّم مهارة مركّزة ويخلق ثقة تؤدي لمنتجات أعلى سعرًا.",
    bestFor: "صنّاع المحتوى الذين يفضّلون الشرح المباشر.",
    advantages: [
      "إمكان بيعها بأسعار أعلى من الكتب مع نفس الجهد البحثي.",
      "توفر تجربة تعليمية متعددة الوسائط تزيد من ولاء العملاء.",
      "يمكن إعادة تدوير محتواها إلى مقاطع تسويقية.",
    ],
    challenges: [
      "تتطلب معدات تسجيل بسيطة على الأقل (ميكروفون + إضاءة).",
      "تحرير الفيديو أو الصوت يحتاج وقتًا أو الاستعانة بمستقلين.",
    ],
  },
  {
    title: "قوالب الإنتاجية (Notion, Excel, Canva)",
    valueProp:
      "جاهزية عالية للبيع بسرعة مع طلب متزايد على الحلول السريعة للوقت والتنظيم.",
    bestFor: "أشخاص يعشقون التنظيم والتصاميم ويجيدون بناء الأنظمة.",
    advantages: [
      "إنشاء سريع وقابل للتكرار مع إمكانية التخصيص حسب الشرائح.",
      "أرباح مستمرة لأن نفس القالب يُباع مرارًا دون تكلفة إضافية.",
      "يستفيد من اقتصاد المنصات مثل Etsy وGumroad.",
    ],
    challenges: [
      "الوصول إلى تصميم مميز يتطلب إتقان الأدوات أو شراء عناصر مدفوعة.",
      "ضرورة تضمين شرح واضح للمستخدم لضمان رضا العملاء.",
    ],
  },
  {
    title: "منتجات SaaS الصغيرة وأدوات الذكاء الاصطناعي",
    valueProp:
      "منتج قابل للتوسع يوفر حلولاً مؤتمتة ويستفيد من الاشتراكات المتكررة.",
    bestFor: "مطورين أو مؤسسين لديهم القدرة على بناء أو إدارة فرق تقنية صغيرة.",
    advantages: [
      "إيرادات متكررة وإمكانية التوسع عالميًا بسرعة.",
      "قيمة سوقية أعلى وإمكان البيع كمشروع جاهز.",
      "إمكان إضافة نماذج Freemium لزيادة النمو.",
    ],
    challenges: [
      "حاجة إلى خبرة تقنية أو ميزانية للتطوير والصيانة.",
      "توقعات مستخدمين عالية تتطلب دعمًا مستمرًا.",
    ],
  },
];

const nicheDiscovery = [
  {
    title: "استكشاف الخبرات والاهتمامات الشخصية",
    items: [
      "كتابة قائمة بـ 10 مجالات تمتلك فيها معرفة أو تجربة مميزة.",
      "تحليل تجاربك المهنية أو الدراسية أو الهوايات لمعرفة المشاكل التي حللتها للآخرين.",
      "استخدام أداة مثل Notion لتسجيل الملاحظات وتصنيفها بحسب الطلب المحتمل.",
    ],
  },
  {
    title: "تحليل السوق والمنافسة",
    items: [
      "بحث في منصات Gumroad وProduct Hunt وEtsy عن المنتجات الأعلى مبيعًا داخل المجال المختار.",
      "استخدام Google Trends وExploding Topics لاكتشاف الكلمات المفتاحية الصاعدة.",
      "تنزيل 3 منتجات منافسة ودراسة نقاط القوة والضعف وتقارير التقييمات.",
    ],
  },
  {
    title: "اختبار الجاهزية الربحية",
    items: [
      "تقدير عدد الأشخاص المستعدين للدفع باستخدام Audience.rocks أو SparkToro.",
      "تحديد مستوى السعر المتوقع بناءً على القيمة (منخفض < 30$، متوسط 30-150$، مرتفع > 150$).",
      "تقييم الموارد: وقتك، مهاراتك، ميزانيتك، علاقاتك، لتحديد نوع المنتج الأنسب لبدايتك.",
    ],
  },
];

const personaFramework = [
  "بناء شخصية العميل عبر أسئلة أساسية: من هو؟ ما هدفه الرئيسي؟ ما العوائق التي يواجهها؟",
  "استخدام مقابلات سريعة مع 5 أشخاص داخل المجتمع المستهدف (LinkedIn, Reddit, Twitter).",
  "إنشاء خريطة تعاطف Empathy Map تحدد: ما يرى، يسمع، يقول، يشعر به عميلك.",
  "تحويل النتائج إلى قصة عميل يومية تحدد كيف سيستخدم منتجك لحل مشكلته.",
  "صياغة عرض قيمة فريد UVP مكوّن من: مشكلة واضحة + حل محدد + نتيجة قابلة للقياس.",
];

const creationToolbox = [
  {
    category: "تصميم وبناء المحتوى",
    free: ["Canva", "Figma", "Tome"],
    paid: ["Adobe Creative Cloud", "Pitch", "Beautiful.ai"],
    note: "ابدأ بالأدوات المجانية مع قوالب جاهزة، ثم استثمر في المدفوعة عند الحاجة للهوية الاحترافية.",
  },
  {
    category: "إدارة المعرفة والكتابة",
    free: ["Notion", "Obsidian", "Google Docs"],
    paid: ["Craft", "ClickUp Docs"],
    note: "أنشئ نظام أرشفة للبحوث والمصادر مع قوالب جاهزة لتوثيق الأفكار والاقتباسات.",
  },
  {
    category: "التسجيل والمونتاج",
    free: ["Descript (خطة مجانية)", "CapCut", "Audacity"],
    paid: ["ScreenFlow", "Camtasia", "Adobe Premiere"],
    note: "استخدم الذكاء الاصطناعي في Descript أو Opus لتحويل الفيديوهات إلى مقاطع تسويقية.",
  },
  {
    category: "أتمتة وتسليم المنتج",
    free: ["Zapier (خطة مجانية)", "Typeform", "Tally"],
    paid: ["Make.com", "Lemlist", "Outseta"],
    note: "أتمتة إرسال الإيصالات والوصول إلى المنتج مباشرة بعد الشراء لرفع تجربة العميل.",
  },
];

const mvpSteps = [
  {
    phase: "الأسبوع 1",
    objectives: [
      "إنهاء بحث السوق والعميل وإقرار عرض القيمة.",
      "تحديد شكل المنتج النهائي (كتاب، دورة، قالب) وكتابة قائمة المحتوى.",
    ],
    deliverables: [
      "وثيقة عرض القيمة ونقاط الألم الأساسية.",
      "Outline تفصيلي للفصول أو الوحدات التعليمية.",
    ],
  },
  {
    phase: "الأسبوع 2",
    objectives: [
      "إنتاج 30٪ من المحتوى النهائي مع نماذج تصميم أولية.",
      "جمع ردود فعل سريعة من 3 مستخدمين مثاليين (Beta Testers).",
    ],
    deliverables: [
      "مقتطفات قابلة للعرض: فصل كامل، فيديو نموذجي، أو قالب جاهز.",
      "قائمة تحسينات مبنية على ملاحظات التجارب الأولى.",
    ],
  },
  {
    phase: "الأسبوع 3",
    objectives: [
      "إكمال المنتج بنسبة 80٪ والتركيز على الجودة والتفاصيل.",
      "إعداد مواد التسويق الأولية (landing page، وصف المنتج، رسائل البريد).",
    ],
    deliverables: [
      "نسخة شبه نهائية من المنتج، مع دليل استخدام أو onboarding.",
      "صفحة مبيعات أولية مع Call-to-Action واضح.",
    ],
  },
  {
    phase: "الأسبوع 4",
    objectives: [
      "إطلاق تجريبي محدود (Soft Launch) لجمع مبيعات أولية.",
      "تحليل النتائج وتحسين الرسائل التسويقية بناءً على الاعتراضات الشائعة.",
    ],
    deliverables: [
      "تقارير أداء (زيارات، معدل تحويل، تقييمات العملاء).",
      "خطة تحسين مستمر للشهر التالي (منتج + تسويق).",
    ],
  },
];

const platformComparison = [
  {
    name: "Etsy",
    type: "منصة جاهزة",
    pros: [
      "جمهور ضخم يبحث عن قوالب ومنتجات إبداعية.",
      "دعم مدمج للدفع والضرائب.",
    ],
    cons: [
      "رسوم على كل عملية بيع ومنافسة كبيرة.",
      "تحكم محدود في تجربة العلامة التجارية.",
    ],
    bestUse: "مثالي لقوالب التصميم والمنتجات الإبداعية الصغيرة.",
  },
  {
    name: "Gumroad",
    type: "منصة جاهزة",
    pros: [
      "سهولة الإعداد واستلام المدفوعات عالميًا.",
      "دعم بيع الاشتراكات والعضويات.",
    ],
    cons: [
      "رسوم على المبيعات وتخصيص محدود للواجهة.",
      "يوفر أدوات تسويق بسيطة فقط.",
    ],
    bestUse: "مناسب لكتب إلكترونية، دورات صغيرة، وموارد قابلة للتنزيل.",
  },
  {
    name: "Amazon KDP",
    type: "منصة جاهزة",
    pros: [
      "ثقة عالية ومبيعات ضخمة للكتب والدفاتر.",
      "إمكانية الطباعة عند الطلب.",
    ],
    cons: [
      "صعوبة بناء قاعدة بيانات عملاء خاصة بك.",
      "يحتاج تحسينًا لمحركات البحث داخل أمازون.",
    ],
    bestUse: "للكتب المتخصصة وأدلة الأعمال أو التعليم.",
  },
  {
    name: "متجر خاص (Shopify / WordPress / Salla)",
    type: "متجر مستقل",
    pros: [
      "تحكم كامل في العلامة التجارية وتجربة المستخدم.",
      "إمكانية بناء أصول تسويق طويلة المدى (قوائم بريدية، تحليلات متقدمة).",
    ],
    cons: [
      "تكلفة أعلى (اشتراكات + إضافات + وقت تطوير).",
      "حاجة لإدارة الدفع، الضرائب، والدعم بنفسك.",
    ],
    bestUse: "عندما يكون لديك مجموعة منتجات متعددة وتريد توسعًا مستدامًا.",
  },
];

const professionalStoreSteps = [
  "اختيار منصة الدفع المناسبة (PayPal, Stripe, Tap) والتأكد من توافقها مع عملائك المستهدفين.",
  "تصميم صفحة مبيعات واضحة تركز على النتائج النهائية للعميل مع إثبات اجتماعي (Testimonials, Metrics).",
  "إنشاء رحلة عميل سلسة: صفحة منتج → سلة → الدفع → صفحة شكر تتضمن CTA للتواصل والمشاركة.",
  "تطبيق Cross-sell وUpsell بسيط مثل عرض باقة موارد إضافية بخصم خاص بعد الدفع.",
  "إعداد نظام بريد تلقائي (Welcome Sequence) يقدم محتوى قيّم ويشجع على مشاركة منتجك.",
];

const growthPillars = [
  {
    title: "بناء الجمهور",
    focus: "اختيار قناة أساسية (Twitter, LinkedIn, YouTube, TikTok) وتقديم محتوى تعليمي مجاني يدعم عرض القيمة.",
    metrics: ["زيادة الاشتراكات البريدية", "عدد المتفاعلين النشطين", "التحويل من المحتوى المجاني إلى المدفوع"],
  },
  {
    title: "التحسين المستمر",
    focus: "جمع تقييمات العملاء بعد الشراء واستخدامها لتحديث المنتج وإنتاج إصدارات جديدة.",
    metrics: ["معدل إعادة الشراء", "متوسط تقييم العملاء", "زمن حل الدعم"],
  },
  {
    title: "تنويع المنتجات",
    focus: "تقديم سُلَّم منتجات يبدأ بمنتج مجاني Lead Magnet، ثم منتج منخفض السعر، وصولًا إلى برامج عالية القيمة.",
    metrics: ["متوسط قيمة الطلب", "عدد المنتجات لكل عميل", "نسبة التحويل بين المستويات"],
  },
];

const weeklyRoutines = [
  {
    title: "الإثنين",
    actions: [
      "تحليل بيانات الأسبوع الماضي (مبيعات، تفاعل المحتوى، رسائل العملاء).",
      "تحديث لوحة التحكم في Notion وتحديد أولويات الأسبوع.",
    ],
  },
  {
    title: "الثلاثاء",
    actions: [
      "إنتاج محتوى تعليمي طويل (مقال، فيديو، بودكاست) يدعم المنتج.",
      "تحويل المحتوى إلى 3-5 منشورات قصيرة للقنوات الاجتماعية.",
    ],
  },
  {
    title: "الأربعاء",
    actions: [
      "تطوير المنتج أو تحديثه (إضافة وحدة، تحسين تصميم، توثيق جديد).",
      "إطلاق بريد أو نشرة تحتوي على عرض خاص أو قصة نجاح عميل.",
    ],
  },
  {
    title: "الخميس",
    actions: [
      "جلسة بناء علاقات: تواصل مع شركاء محتملين، مؤثرين، أو عملاء حاليين.",
      "تحسين funnel المبيعات عبر اختبار CTA أو تصميم صفحة الهبوط.",
    ],
  },
  {
    title: "الجمعة",
    actions: [
      "مراجعة مالية سريعة + تحديث لوحة الإيرادات وتحديد أهداف الأسبوع التالي.",
      "تعلم شخصي: دورة قصيرة، مقال متخصص، أو دراسة حالة ناجحة.",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-10 backdrop-blur">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold text-emerald-400">من الصفر إلى الاحتراف</span>
            <h1 className="text-3xl font-bold leading-tight text-slate-50 md:text-4xl lg:text-5xl">
              خطة متكاملة لبناء وإطلاق منتجات رقمية مربحة
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              صُمّمت هذه الخطة لتأخذك خطوة بخطوة من الفهم العميق للمنتجات الرقمية، مرورًا باختيار النيتش وبناء منتج أول (MVP)، وصولًا إلى إنشاء متجر احترافي واستراتيجية نمو مستدامة. كل مرحلة تتضمن أهدافًا واضحة، أدوات عملية، ومهام أسبوعية قابلة للتنفيذ.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">مدة المسار</p>
                <p className="mt-2 text-2xl font-bold text-emerald-200">12 أسبوعًا</p>
                <p className="mt-2 text-sm text-emerald-100/70">يُقسم إلى ثلاث مراحل أساسية مع تقييمات دورية.</p>
              </div>
              <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">نموذج التنفيذ</p>
                <p className="mt-2 text-2xl font-bold text-indigo-200">تعلم + تطبيق + إطلاق</p>
                <p className="mt-2 text-sm text-indigo-100/70">كل أسبوع يجمع بين الدراسة، التنفيذ العملي، واستلام التغذية الراجعة.</p>
              </div>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">نتيجة متوقعة</p>
                <p className="mt-2 text-2xl font-bold text-amber-200">منتج رقمي جاهز للبيع</p>
                <p className="mt-2 text-sm text-amber-100/70">مع خطة إطلاق أولية وأتمتة لتسليم المنتج.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">١. الأساسيات وأنواع المنتجات الرقمية</h2>
            <p className="text-base text-slate-300">
              فهم طبيعة كل نوع من المنتجات الرقمية يساعدك على اختيار المسار الأنسب لمهاراتك وميزانيتك. ركّز على نوع يمنحك فوزًا سريعًا دون التضحية بالجودة.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {productTypes.map((product) => (
              <article
                key={product.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-emerald-300">{product.title}</h3>
                  <p className="text-sm text-slate-200">{product.valueProp}</p>
                  <p className="text-sm font-medium text-amber-300/90">الأكثر ملاءمة لـ: {product.bestFor}</p>
                </div>
                <div className="mt-2 space-y-2 rounded-2xl bg-slate-900/60 p-4">
                  <p className="text-sm font-semibold text-emerald-200">مميزات</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-100">
                    {product.advantages.map((adv) => (
                      <li key={adv}>{adv}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 rounded-2xl bg-slate-900/40 p-4">
                  <p className="text-sm font-semibold text-rose-200">تحديات</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                    {product.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">٢. اختيار النيتش والجمهور المثالي</h2>
            <p className="text-base text-slate-300">
              اتّبع إطارًا منظمًا للانتقال من فكرة عامة إلى فرصة سوقية واضحة مع شخصية عميل محددة يسهل اختبارها والتواصل معها.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {nicheDiscovery.map((block) => (
              <article
                key={block.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-7"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-200">{block.title}</h3>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-100">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-xl font-semibold text-white">بناء شخصية العميل (Persona)</h3>
            <p className="mt-3 text-sm text-slate-300">
              اتبع الخطوات التالية لصناعة صورة ذهنية دقيقة عن العميل الذي ستصمم له المنتج وعروض التسويق.
            </p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm text-slate-100">
              {personaFramework.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="space-y-8">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">٣. الإنشاء والتطوير: صندوق الأدوات + خطة MVP</h2>
            <p className="text-base text-slate-300">
              ابدأ بأدوات بسيطة ومجانية، ثم طوّرها تدريجيًا كلما زادت الإيرادات. التزم بخطة MVP من أربعة أسابيع لضمان التقدم الملموس.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {creationToolbox.map((kit) => (
              <article
                key={kit.category}
                className="flex h-full flex-col gap-4 rounded-3xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-7"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-fuchsia-200">{kit.category}</h3>
                  <p className="text-xs uppercase tracking-wide text-fuchsia-300">مجاني</p>
                  <p className="text-sm text-slate-100">{kit.free.join(" • ")}</p>
                  <p className="mt-3 text-xs uppercase tracking-wide text-fuchsia-300">مدفوع</p>
                  <p className="text-sm text-slate-100">{kit.paid.join(" • ")}</p>
                </div>
                <p className="text-sm text-slate-200">{kit.note}</p>
              </article>
            ))}
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-xl font-semibold text-white">خطة MVP بأربعة أسابيع</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {mvpSteps.map((step) => (
                <article
                  key={step.phase}
                  className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-6"
                >
                  <h4 className="text-lg font-semibold text-emerald-200">{step.phase}</h4>
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">الأهداف</p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-slate-100">
                      {step.objectives.map((objective) => (
                        <li key={objective}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">المخرجات المتوقعة</p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-slate-100">
                      {step.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">٤. المنصات والمتاجر: أين وكيف تبيع؟</h2>
            <p className="text-base text-slate-300">
              قارن بين المنصات الجاهزة والمتاجر الخاصة لتقرر أين تبدأ وكيف تتوسع لاحقًا. ابدأ بنظام بسيط، ثم ابْنِ متجرًا مستقلاً عندما تصل إلى منتج-سوق ملائم.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {platformComparison.map((platform) => (
              <article
                key={platform.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-sky-500/20 bg-sky-500/5 p-7"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-sky-300">{platform.type}</p>
                  <h3 className="mt-2 text-lg font-semibold text-sky-200">{platform.name}</h3>
                  <p className="mt-2 text-sm text-slate-100">{platform.bestUse}</p>
                </div>
                <div className="space-y-2 rounded-2xl bg-slate-900/60 p-4">
                  <p className="text-sm font-semibold text-emerald-200">مميزات</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-100">
                    {platform.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 rounded-2xl bg-slate-900/40 p-4">
                  <p className="text-sm font-semibold text-rose-200">قيود</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-100">
                    {platform.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-xl font-semibold text-white">إعداد متجر احترافي يزيد التحويلات</h3>
            <ol className="mt-6 list-decimal space-y-3 pl-6 text-sm text-slate-100">
              {professionalStoreSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="space-y-8">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">٥. إستراتيجية النمو والاستدامة</h2>
            <p className="text-base text-slate-300">
              بعد إطلاق منتجك الأول، ركّز على بناء نظام متكرر للنمو والتحسين. ركائز النمو الثلاث التالية تساعدك على بناء عمل رقمي مستدام.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {growthPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-purple-500/20 bg-purple-500/5 p-7"
              >
                <div>
                  <h3 className="text-lg font-semibold text-purple-200">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-100">{pillar.focus}</p>
                </div>
                <div className="space-y-2 rounded-2xl bg-slate-900/60 p-4">
                  <p className="text-sm font-semibold text-purple-200">مؤشرات المتابعة</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-100">
                    {pillar.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-xl font-semibold text-white">روتين أسبوعي يحافظ على الزخم</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {weeklyRoutines.map((day) => (
                <article
                  key={day.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h4 className="text-base font-semibold text-amber-200">{day.title}</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-100">
                    {day.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">جاهز للإنطلاق؟</h2>
          <p className="mt-4 text-sm text-slate-300">
            التزم بالتطبيق الأسبوعي، واجمع بياناتك باستمرار، ولا تنتظر الكمال. المنتج الرقمي الأقوى هو ما يتم تحسينه بناءً على ملاحظات العملاء الحقيقيين.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
            بناء المستقبل الرقمي يبدأ بخطوة اليوم
          </p>
        </footer>
      </main>
    </div>
  );
}
